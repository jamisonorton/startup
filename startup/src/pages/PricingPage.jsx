import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  const socketRef = useRef(null); // Reference to store the WebSocket instance

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket("wss://startup.janesmusicstudio.com:443");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup WebSocket connection on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const handleInterestClick = () => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send("interested");
      alert("Your interest has been sent!");
    } else {
      alert("WebSocket connection is not open.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-2xl">Pricing</h1>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <p>
          I offer lessons on a semester basis. This means you sign up for 12
          lessons in a 14-week span. Each lesson is 30 minutes long and costs
          $20/lesson. However, I require you to pay the entire month in advance.
        </p>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <Button onClick={handleInterestClick}>I&apos;m Interested</Button>
      </div>
    </section>
  );
};

export default PricingPage;
