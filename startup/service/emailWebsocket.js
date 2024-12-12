import { WebSocketServer } from "ws";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email provider
  auth: {
    user: "jamison.orton@gmail.com", // Replace with your email
    pass: process.env.EMAIL_PASSWORD, // Replace with your email password or app-specific password
  },
});

// Function to send email
const sendEmail = () => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-email@gmail.com",
    subject: "New Piano Lesson Interest",
    text: "Someone is interested in piano lessons!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

// Function to set up WebSocket server
export const setupWebSocket = (server) => {
  const wss = new WebSocketServer({ server });

  // Handle the WebSocket connection
  wss.on("connection", (ws) => {
    console.log("A new client connected.");

    ws.on("message", (message) => {
      if (message === "interested") {
        console.log("Received interest in piano lessons.");
        sendEmail(); // Send the email on message
      }
    });

    ws.on("close", () => {
      console.log("Client disconnected.");
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });
  });

  console.log("WebSocket server is ready.");
};
