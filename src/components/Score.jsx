import { useScore } from '../context/ScoreContext';

export const Score = () => {
  const { currentScore } = useScore();
  return (
    <div class='bg-white flex flex-col items-center justify-center rounded-md text-score-text px-6 min-w-fit w-36'>SCORE<span class='text-dark-text text-6xl font-bold'>{currentScore}</span></div>
  );
};
