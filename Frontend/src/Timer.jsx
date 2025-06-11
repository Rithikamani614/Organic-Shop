import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState("");
  
  // Set the date we're counting down to
  const countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

  useEffect(() => {
    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with the calculated time left
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // If the countdown is over, stop the interval and display "EXPIRED"
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("EXPIRED");
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "60px", marginTop: "0px" }}>{timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;
