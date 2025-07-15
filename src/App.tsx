import React from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import { usePomodoro } from './hooks/usePomodoro';

const App: React.FC = () => {
  const { timeLeft, isRunning, mode, cycleCount, start, pause, resume, reset } =
    usePomodoro();

  const hasStarted = timeLeft !== 25 * 60 || cycleCount > 0 || isRunning;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Pomodoro Timer ⏱
      </h1>
      <TimerDisplay timeLeft={timeLeft} mode={mode} />
      <TimerControls
        isRunning={isRunning}
        hasStarted={hasStarted}
        onStart={start}
        onPause={pause}
        onResume={resume}
        onReset={reset}
      />
    </div>
  );
};

export default App;
