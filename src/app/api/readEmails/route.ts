import { NextResponse } from "next/server";
const Imap = require("node-imap");

export async function GET() {
	try {
		const emails = await new Promise((resolve, reject) => {
			const imap = new Imap({
				user: process.env.GMAIL_ACCOUNT_EMAIL,
				password: process.env.GMAIL_ACCOUNT_PASSWORD,
				host: "imap.gmail.com",
				port: 993,
				tls: true,
			});

			let runningTotal = 0;
			let returnObject: { total: number; data: any[] } = {
				total: 0,
				data: [],
			};

			imap.once("ready", () => {
				imap.openBox("INBOX", true, (err: any, box: any) => {
					if (err) reject(err);
					if (box.messages.total === 0) {
						imap.end();
						resolve(returnObject);
						return;
					}
					let f = imap.seq.fetch(`1:${box.messages.total}`, {
						bodies: ["HEADER.FIELDS (FROM)", "1"],
						struct: true,
					});
					f.on("message", (msg: any) => {
						let buffer = "";
						let messageObject = {
							email: "",
							firstName: "",
							lastName: "",
							donationFlag: 0,
						};
						let messageSender = "";
						msg.on("body", (stream: any) => {
							stream.on("data", (chunk: any) => {
								buffer += chunk.toString("utf8");
							});
							stream.once("end", () => {
								messageSender = Imap.parseHeader(buffer).from[0];
							});
						});
						msg.once("end", () => {
							if (
								messageSender ===
								"School District of Manatee County Web Store <webstores@revtrak.net>"
							) {
								let dataArray = buffer.split("<br />");
								let name = dataArray[3]?.slice(19).split(" ");
								let email = dataArray[4]?.slice(
									20,
									dataArray[4].length - 1
								);
								runningTotal += Number(
									dataArray[11]?.replaceAll(/[^0-9|.]/g, "")
								);
								messageObject["email"] = email;
								messageObject["firstName"] = name[0];
								messageObject["lastName"] = name[1];
								messageObject["donationFlag"] = 1;
								returnObject.data.push(messageObject);
							}
						});
					});
					f.once("error", (err: any) => {
						console.log(`Fetch Error: ${err}`);
						reject(err);
					});
					f.once("end", () => {
						imap.end();
					});
				});
			});

			imap.once("error", (err: any) => {
				console.error(err);
				reject(err);
			});

			imap.once("end", () => {
				returnObject["total"] = runningTotal;
				resolve(returnObject);
			});

			imap.connect();
		});

		return NextResponse.json({ emails });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ err });
	}
}