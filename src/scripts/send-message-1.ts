import twilio from "twilio";
import dotenv from "dotenv";
const nodemailer = require("nodemailer");
dotenv.config();

const getMailingList = async () => {
	const response = await fetch(`${process.env.BASE_URL}/api/mailingList`);
	const mailingList = await response.json();
	return mailingList;
};

const sendWithTwilio = async (mailingList: any) => {
	try {
		const accountSID = process.env.TWILIO_ACCOUNT_SID;
		const authToken = process.env.TWILIO_AUTH_TOKEN;
		const client = twilio(accountSID, authToken);
		const fundraisingLink = "http://localhost:3000";

		let messageBody = `Thank you all for your contributions to the 2024-2025 wrestling season. Last year, we brought 17 wrestlers to the district tournaments, with 10 advancing to the regional tournaments, and two making the state tournament. Most importantly last year, the boys team academicly ranked 5th in the state with a 3.39 cumulative GPA, and the girls team ranked 7th with a 3.57 cumulative GPA. None of this would be possible without your support!

As we start the new school year, we are beginning to look forward to the 2025-2026 season being our best one yet! We will be traveling across the region and state for tournaments, with some of the highlights on the schedule including hosting Sarasota Riverview HS in a dual meet during the school day, and hosting the Mustang Duals for the second year in a row.

With our lofty goals in place, we are looking to raise at least $10,000 to help cover the costs of the season, including tournament entry fees, gear for the wrestlers, supplies for the mats, like mat tape and sanitizer, and referees for our dual meets and tournament. 

To take part in our fundraiser, visit: ${fundraisingLink}

Thank you for being apart of the Lakewood Ranch Mustang Wrestling Family, and we look forward to seeing you in the stands, apart of the stampede!`;

		for (let i = 0; i < mailingList.length; i++) {
			if (mailingList[i].donationFlag === 1) {
				messageBody = `Hey ${mailingList[i].firstName}! The wrestlers and coaches from the Lakewood Ranch Wrestling Team want to take this time to thank you so much for donating to our team! We appreciate your contribution to our program and your contribution to the development of these young men! We hate to ask, but could you do one more thing for us? Can you send this to one person that has not heard about Lakewood Ranch Wrestling? The fundraising link can be found here: ${fundraisingLink} We want to spread awareness about what these amazing young men are doing in the classroom, on the mat, and in the community! Thank you so much for everything that you do! Vamos Mustangos!`;
			}
			if (
				mailingList[i].phoneNumber &&
				mailingList[i].phoneNumber !== ""
			) {
				await client.messages.create({
					body: messageBody,
					from: "+19286934017",
					to: "+1" + mailingList[i].phoneNumber,
				});
			}
		}
	} catch (err) {
		console.error(err);
	}
};

const sendEmails = async (mailingList: any) => {
	let transporter = nodemailer.createTransport({
		pool: true,
		service: "gmail",
		auth: {
			user: process.env.GMAIL_ACCOUNT_EMAIL,
			pass: process.env.GMAIL_ACCOUNT_PASSWORD,
		},
	});

	let mailOptions = {
		from: "lrhswrestling0@gmail.com",
		to: "",
		subject: "Lakewood Ranch Wrestling Fundraising",
		html: ``,
	};

	for (let i = 0; i < mailingList.length; i++) {
		if (mailingList[i].email && mailingList[i].email !== "") {
			mailOptions.to = mailingList[i].email;
			mailOptions.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Support the [Team Name] Wrestling Team!</title>
    <style type="text/css">
        body, #bodyTable, #bodyCell { height: 100% !important; margin: 0; padding: 0; width: 100% !important; }
        table { border-collapse: collapse; }
        p { margin: 0; padding: 0; }
        a { color: #000000; text-decoration: none; }
        
        @media only screen and (max-width: 600px) {
            .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
            .content-table { width: 100% !important; }
            .mobile-hidden { display: none !important; }
            .h1 { font-size: 24px !important; line-height: 28px !important; }
            .button { width: 100% !important; display: block !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0;">
    <center>
    <table border="0" cellpadding="0" cellspacing="0" id="bodyTable" width="100%" style="background-color: #f6f6f6;">
        <tr>
            <td align="center" id="bodyCell">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="content-table" style="max-width: 600px; background-color: #ffffff; border: 1px solid #000000;">
                    
                    <tr>
                        <td align="center" style="padding: 20px 40px; background-color: #006400;"> <h1 class="h1" style="color: #ffffff; font-family: Arial, sans-serif; font-size: 30px; font-weight: bold; margin: 0;">
                                Lakewood Ranch Wrestling
                            </h1>
                            <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 16px; margin: 5px 0 0 0;">Fundraiser</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            <h2 style="color: #000000; font-family: Arial, sans-serif; font-size: 22px; font-weight: bold; margin: 0 0 20px 0;">
                                Help Our Team Takedown the Competition!
                            </h2>
                            <p style="color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; margin: 0 0 15px 0;">
                                Dear Friend and Supporter,
                            </p>
                            <p style="color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; margin: 0 0 25px 0;">
                                We're reaching out on behalf of the Lakewood Ranch Wrestling Team to raise funds for essential new equipment and travel expenses. Your contribution directly supports our dedicated student-athletes!
                            </p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center" style="border-radius: 5px; background-color: #006400;" class="button"> <a href="${process.env.BASE_URL}" target="_blank" style="font-size: 18px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; padding: 12px 25px; border: 1px solid #006400; display: inline-block; font-weight: bold;">
                                                        DONATE NOW
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <p style="color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; margin: 0 0 25px 0;">
                                Last season, we had 2 state qualifiers, 10 regional qualifiers, and a 3.4 team GPA. With your help, we aim to achieve even greater success this year. Every dollar counts! Thank you for your continued support.
                            </p>
                            <p style="color: #000000; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; margin: 0;">
                                Go Mustangs!
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding: 25px 40px; background-color: #000000;"> <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px; margin: 0;">
                                Lakewood Ranch High School Wrestling &bull; 5500 Lakewood Ranch Blvd. Bradenton, FL 34211
                            </p>
                        </td>
                    </tr>

                </table>
                </td>
        </tr>
    </table>
    </center>
</body>
</html>`;
			transporter.sendMail(mailOptions, (err: any) => {
				if (err) {
					console.log(err);
				} else {
					console.log("Email Sent!");
				}
			});
		}
	}
};

async function main() {
	const mailingList = await getMailingList();
	await sendWithTwilio(mailingList);
	await sendEmails(mailingList);
}

main();
