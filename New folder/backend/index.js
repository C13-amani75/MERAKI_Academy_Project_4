const express = require("express");

const cors = require("cors");
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });


const db = require("./models/db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
//routers

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});






const {userRouter} = require("./routes/user")
const{roleRouter} = require("./routes/role")
const {categoryRouter} = require("./routes/category")
const {productRouter} = require("./routes/product")
const {rateRouter}= require("./routes/rate")


// Handles any other endpoints [unassigned - endpoints]
app.use("/users", userRouter)
app.use("/roles", roleRouter)
app.use("/category", categoryRouter)
app.use("/product", productRouter)
app.use("/rate",rateRouter)
app.use(express.static(process.env.STATIC_DIR));
app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});



app.use("*", (req, res) => res.status(404).json("NO content at this path"));
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

/* app.listen(5252, () =>
  console.log(`Node server listening at https://localhost:5252`)
);
 */
