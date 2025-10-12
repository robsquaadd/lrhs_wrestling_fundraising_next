import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("mailing-list");
        const mailingList = await db
            .collection("mailing-list")
            .find({})
            .toArray();

        return NextResponse.json({ mailingList });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { error: "Unable to connect to database" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("mailing-list");
        const body = await req.json();
        let { firstName, lastName, email, phoneNumber, donationFlag } = body;

        if (!phoneNumber) {
            phoneNumber = "";
        }

        if (!donationFlag) {
            donationFlag = 0;
        }

        const result = await db.collection("mailing-list").findOneAndUpdate(
            { firstName: firstName, lastName: lastName, email: email },
            {
                $set: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber,
                    donationFlag: donationFlag,
                },
            },
            {
                upsert: true,
                returnDocument: "after",
            }
        );

        return NextResponse.json({ result });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { error: "Unable to connect to database" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("mailing-list");
        const collection = db.collection("mailing-list");
        const { recordsToAdd } = await req.json();
        const result = collection.insertMany(recordsToAdd);

        return NextResponse.json({ result });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { error: "Unable to connect to database" },
            { status: 500 }
        );
    }
}
