import React from 'react';
import TimerDisplay from './components/TimerDisplay';
import { usePomodoro } from './hooks/usePomodoro';

const App: React.FC = () => {
  const { timeLeft, mode } = usePomodoro();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Pomodoro Timer ⏱
      </h1>
      <TimerDisplay timeLeft={timeLeft} mode={mode} />
    </div>
  );
};

export default App;
