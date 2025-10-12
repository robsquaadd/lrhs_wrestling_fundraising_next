import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const databases = await db.admin().listDatabases();

    return NextResponse.json({ databases });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to connect to database" }, { status: 500 });
  }
}
