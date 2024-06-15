const express = require("express");
const path = require("path");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue, query, where } = require("firebase-admin/firestore");
const bodyparser = require("body-parser");
const passwordHash = require("password-hash");
const serviceAccountKey = require("./key.json");

// Initialize Firebase Admin and Firestore
initializeApp({
  credential: cert(serviceAccountKey),
});
const db = getFirestore();

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "../client/build")));

// Define a route to serve your React app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Handle POST request to /signinsubmit
app.post("/signinsubmit", async (req, res) => {
  try {
    // Extract form data from request body
    const { username, email, password } = req.body;

    // Check if email already exists in Firestore
    const emailQuerySnapshot = await db.collection("ExploreEpic").where("Email", "==", email).get();
    if (!emailQuerySnapshot.empty) {
      res.status(400).send("An account with this email address already exists.");
      return;
    }

    // Hash the password before storing it
    const hashedPassword = passwordHash.generate(password);

    // Add the new user to the Firestore database
    await db.collection("ExploreEpic").add({
      UserName: username,
      Email: email,
      Password: hashedPassword,
    });

    // Send success response
    res.status(200).send("Sign up successful");
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).send("Something went wrong.");
  }
});

app.post("/loginsubmit", async (req, res) => {
  try {
    // Extract form data from request body
    const { email, password } = req.body;

    // Check if email exists in Firestore
    const emailQuerySnapshot = await db
      .collection("ExploreEpic")
      .where("Email", "==", email)
      .get();

    if (emailQuerySnapshot.empty) {
      res.status(400).send("Invalid credentials");
      return;
    }

    // Retrieve the user document from Firestore
    let userDoc;
    emailQuerySnapshot.forEach((doc) => {
      userDoc = doc.data();
    });

    // Verify the password
    const passwordMatch = passwordHash.verify(
      password,
      userDoc.Password
    );

    if (passwordMatch) {
      res.status(200).send("Login successful");
    } else {
      res.status(400).send("Invalid credentials");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Something went wrong.");
  }
});

// Other routes and middleware...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
