function DetailedCountdown({ timeLeft }) {
  return (
    <div className="detailed-countdown">
      <div className="time">
        <span>{String(timeLeft.days).padStart(2, "0")}</span>
        <span>Days</span>
      </div>
      <div className="time">
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
        <span>Hours</span>
      </div>
      <div className="time">
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span>Minutes</span>
      </div>
      <div className="time">
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default DetailedCountdown;
