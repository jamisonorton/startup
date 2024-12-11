import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("pinged your deployment.");
} catch (err) {
  console.log(err);
}

let db = client.db("janesmusicstudio");

export default db;
