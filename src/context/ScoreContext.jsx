import { createContext } from 'preact';
import { useEffect, useState, useContext } from 'preact/hooks';

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [chosen, setChosen] = useState('none');

  useEffect(() => {
    const getScore = () => {
      const score = window.localStorage.getItem('curr_score');
      if (!score) {
        setCurrentScore(0);
        window.localStorage.setItem('curr_score', currentScore);
      } else {
        setCurrentScore(score);
      }
    };
    getScore();
  }, []);
  return (
    <ScoreContext.Provider value={{ currentScore, setCurrentScore, chosen, setChosen }}>
      {children}
    </ScoreContext.Provider>
  );
};

const useScore = () => {
  return useContext(ScoreContext);
};

export { ScoreProvider, useScore };
