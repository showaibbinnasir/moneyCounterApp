import client from "@/lib/dbConnect"


export async function GET() {
    const books = client.db('showaibsPersonalWallet').collection('transactions')
    const query = {}
    const result = await books.find(query).sort({ _id: -1 }).toArray()
    return Response.json(result)
}