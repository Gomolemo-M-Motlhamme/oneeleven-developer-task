
export async function POST(request: Request) {
    const {data} = await request.json(); // get the word from the request body
    const word = data.split('').sort(); // split the word into an array of characters, sort them, and then join them back into a string
    return Response.json({word}); // return the sorted word as a JSON response
}