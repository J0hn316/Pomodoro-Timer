import React from 'react';

interface TimerControlsProps {
  isRunning: boolean;
  hasStarted: boolean;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  hasStarted,
  onStart,
  onPause,
  onResume,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {!hasStarted && (
        <button
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Start
        </button>
      )}

      {hasStarted && isRunning && (
        <button
          onClick={onPause}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Pause
        </button>
      )}

      {hasStarted && !isRunning && (
        <button
          onClick={onResume}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Resume
        </button>
      )}

      {hasStarted && (
        <button
          onClick={onReset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default TimerControls;
