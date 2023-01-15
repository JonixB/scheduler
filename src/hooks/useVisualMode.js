import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      return setHistory(prev => [...prev.slice(0, -1), newMode]);
    }
    setHistory(prev => [...prev, newMode])
  };

  function back() {
    const copyHistory = [...history];
    copyHistory.pop(mode)
    setHistory(() => copyHistory);
    if (history.length > 1) {
      setMode(() => copyHistory[(copyHistory.length - 1)]);
    }
  };
  return { mode, transition, back };
}
