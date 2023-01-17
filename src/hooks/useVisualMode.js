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
    if (history.length > 1) {
      setMode(history[history.length - 2]); //goes back to the second to the last mode
      setHistory(prev => [...prev.slice(0, -1)]); //slices and creates a new array with the last element removed
    }
  };
  return { mode, transition, back };
}
