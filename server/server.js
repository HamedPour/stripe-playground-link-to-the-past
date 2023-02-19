import dotenv from "dotenv";
import stripe from "stripe";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

stripe(process.env.STRIPE_PRIVATE_KEY);

const storeItem = new Map([
  [1, { priceInCents: 10000, name: "React Course" }],
  [2, { priceInCents: 20000, name: "CSS Course" }],
]);

app.post("/api/data", (req, res) => {
  const data = req.body;
  console.log("SERVER:", data.message);
});

app.listen(3000);
