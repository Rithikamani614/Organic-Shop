import { Row, Col,Container} from 'react-bootstrap';

import React, { useState, useEffect } from "react";

const Section4 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDownDate = new Date("march 5, 2026 5:37:25").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "EXPIRED",
          hours: "",
          minutes: "",
          seconds: "",
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div>
      <div className="bg11">
        <div className="sec4text1">
          <p className="sec4p1">Weekly Offers</p>
          <h2 className="sec4p2">Check deal of the day</h2>
          <p className="sec4p3">
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibu dignissim.
          </p>
          <div className='sec4div1'>
            <Container>
            < Row >
              <Col lg={3} md={3} sm={6} xs={6}>
              <div className='sec4div2'>
              <p className='sec4p5'>{timeLeft.days}</p>
              <p className='sec4p6'>Days</p>
              </div>
              </Col>
              <Col  lg={3} md={3} sm={6} xs={6}>
                <div className='sec4div3'>
                <p className='sec4p5'>{timeLeft.hours}</p>
                <p className='sec4p6'>Hours</p>
                </div>
              </Col>
              <Col  lg={3} md={3} sm={6} xs={6}>
               <div className='sec4div4'>
               <p className='sec4p5'>{timeLeft.minutes}</p>
               <p className='sec4p6'>Minutes</p>
               </div>
              </Col>
              <Col  lg={3} md={3} sm={6} xs={6}>
                <div className='sec4div5'>
                <p className='sec4p5' >{timeLeft.seconds}</p>
                <h6 className='sec4p6' >Seconds</h6>
                </div>
              </Col>
            </Row>
            </Container>
          </div>
        </div>
        <div className="badge1">100% Organic</div>
      </div>

      <div className="sec4text2">
        <div className="sec4img1">
          <div className="sec4text3">
            <p className="sec4p4">Need Our Help?</p>
            <h3>We’re leaders in  organic market</h3>
          </div>
          <div className="sec4text4">
            <button>DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

