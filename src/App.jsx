import React, { useState, useEffect } from 'react';
import './App.css';
import DetailedCountdown from './DetailedCountdown';
import Footer from './Footer';
import Typewriter from 'typewriter-effect';

function App() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const christmas = new Date(now.getFullYear() + (now > new Date(now.getFullYear(), 11, 25) ? 1 : 0), 11, 25);
    const diffTime = Math.abs(christmas - now);

    const days = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.max(0, Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.max(0, Math.floor((diffTime % (1000 * 60)) / 1000));

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const calculateDaysLeft = () => {
    const now = new Date();
    const christmas = new Date(now.getFullYear() + (now > new Date(now.getFullYear(), 11, 25) ? 1 : 0), 11, 25);
    const diffTime = Math.abs(christmas - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
      setDaysLeft(calculateDaysLeft());
    };

    const intervalId = setInterval(() => {
      updateCountdown();
    }, 1000);

    const dateInterval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, 1000);

    // Initial date update with setTimeout
    setTimeout(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, 0);

    return () => {
      clearInterval(intervalId);
      clearInterval(dateInterval);
    };
  }, []);

  const dayOrDays = daysLeft === 1 ? "Day" : "Days";
  const christmasDate = new Date(new Date().getFullYear() + (new Date() > new Date(new Date().getFullYear(), 11, 25) ? 1 : 0), 11, 25);
  const formattedChristmasDate = christmasDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div id="app-container">
      <div id="main-content">
        <div id="countdown">
          <p className="current-date">Today: {currentDate}</p>
          <div id="countdown-content">
            <h1>
              {daysLeft === 14 ? (
                <div className="merry-christmas-container">
                <Typewriter
                  options={{
                    strings: ['Merry Christmas!'],
                    autoStart: true,
                    loop: true,
                    delay: 100, 
                  }}
                />
                </div>
              ) : (
                `Christmas in ${daysLeft} ${dayOrDays}`
              )}
              </h1>
            <p className="christmas-date">{formattedChristmasDate}</p>
            <DetailedCountdown timeLeft={timeLeft} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;