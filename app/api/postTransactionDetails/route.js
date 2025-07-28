import client from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    try {
        const books = client.db('showaibsPersonalWallet').collection('transactions')
        const body = await req.json(); // Parse JSON request body
        const { transName, amount, createdAt, category } = body;
    
        // Create and save the new booking
        const result = await books.insertOne({ transName, amount, createdAt, category })
    
        return NextResponse.json(
          { success: true, message: "Booking successfully created!", data: result },
          { status: 201 }
        );
      } catch (error) {
        return NextResponse.json({ success: false, message: "Server error", error }, { status: 500 });
      }
}