import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body =await request.json();
    // console.log(body);
    const client = await clientPromise;
    const db = client.db("likeitshort");
    const collection = db.collection("url");

    console.log("Mongo URI:", process.env.MONGODB_URI);


    // check if short url exist
    const doc = await collection.findOne({shorturl: body.shorturl});
    if (doc) {
        return Response.json({ 
            success: false, 
            error: true,  
            message: 'URL already exist!' 
        })
    }
    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({ 
        success: true, 
        error: false,  
        message: 'URL generated successful' 
    })
}