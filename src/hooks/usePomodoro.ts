import { useState, useEffect, useRef, useCallback } from 'react';

// Types
type PomodoroMode = 'work' | 'break';

interface UsePomodoroReturn {
  timeLeft: number;
  isRunning: boolean;
  mode: PomodoroMode;
  cycleCount: number;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

// Constants
const WORK_DURATION = 25 * 60; // 25 minutes
const BREAK_DURATION = 5 * 60; // 5 minutes

export const usePomodoro = (): UsePomodoroReturn => {
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<PomodoroMode>('work');
  const [cycleCount, setCycleCount] = useState(0);

  const intervalRef = useRef<number | null>(null);

  const switchMode = useCallback(() => {
    setIsRunning(false);

    setMode((prevMode) => {
      if (prevMode === 'work') {
        setTimeLeft(BREAK_DURATION);
        return 'break';
      } else {
        setTimeLeft(WORK_DURATION);
        setCycleCount((count) => count + 1);
        return 'work';
      }
    });
  }, []);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      switchMode();
    }
  }, [timeLeft, isRunning, switchMode]);

  // Control functions
  const start = () => {
    setTimeLeft(WORK_DURATION);
    setMode('work');
    setCycleCount(0);
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resume = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(WORK_DURATION);
    setMode('work');
    setCycleCount(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return {
    timeLeft,
    isRunning,
    mode,
    cycleCount,
    start,
    pause,
    resume,
    reset,
  };
};
