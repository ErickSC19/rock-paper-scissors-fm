import { useEffect, useRef, useState } from 'preact/hooks';
import anime from 'animejs';
import { useScore } from '../context/ScoreContext';
import { Coin } from './Coin';

const ResultsBoard = () => {
  const { chosen } = useScore();
  const animation = useRef(null);
  const [isHid, setIsHid] = useState('hidden opacity-0');
  useEffect(async () => {
    if (chosen === 'none') {
      setIsHid('transition-opacity duration-300 grid opacity-0');
      setTimeout(() => {
        setIsHid('transition-opacity duration-300 grid opacity-100');
      }, 20);
    } else {
      setIsHid('transition-opacity duration-300 grid opacity-0');
      setTimeout(() => {
        setIsHid('transition-opacity duration-300 opacity-0 hidden');
      }, 305);
    }
  }, [chosen]);
  return (
    <div class={`gameResults min-w-1/2 w-1/2 h-fit mt-14 ${isHid} grid-cols-2 gap-x-10 gap-y-24 justify-items-center bg-desktop bg-center`}>
      <h2 class='text-2xl'>YOU PICKED</h2>
      <h2 class='text-2xl'>THE HOUSE PICKED</h2>
      <Coin classIn='bg-paper-gr' option='paper' playedBy='results' />
      <div class='bg-[rgb(0,0,0,0.3)] col-start-2 row-start-2 rounded-full w-auto min-h-fit h-52 aspect-square p-10 text-center opacity-20 animate-pulse' />
    </div>
  );
};

export default ResultsBoard;
