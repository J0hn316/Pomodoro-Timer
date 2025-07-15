import React from 'react';

interface TimerDisplayProps {
  timeLeft: number;
  mode: 'work' | 'break';
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft, mode }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`;

  return (
    <div className="text-center my-8">
      <h2
        className={`text-2xl font-semibold ${
          mode === 'work' ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {mode === 'work' ? 'Work Time' : 'Break Time'}
      </h2>
      <div className="text-6xl font-bold mt-2 tracking-widest">
        {formattedTime}
      </div>
    </div>
  );
};

export default TimerDisplay;
