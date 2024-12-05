import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

let client;
let db;

// Function to connect to MongoDB Atlas
const connectToDatabase = async () => {
  if (db) return db; // Return existing connection if available

  try {
    client = new MongoClient(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log("Connected to MongoDB Atlas");

    db = client.db(process.env.DB_NAME); // Replace with your database name

    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

// Authentication functions
const registerUser = async (email, password) => {
  const usersCollection = db.collection("users");
  const existingUser = await usersCollection.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await usersCollection.insertOne({
    email,
    password: hashedPassword,
  });

  return result.insertedId;
};

const loginUser = async (email, password) => {
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials");
  }

  return user;
};

export { connectToDatabase, registerUser, loginUser };
export default connectToDatabase;
