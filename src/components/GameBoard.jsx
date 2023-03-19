import { useEffect, useRef } from 'preact/hooks';
import { useScore } from '../context/ScoreContext';
import anime from 'animejs/lib/anime.es.js';
import { Coin } from './Coin';

export const GameBoard = () => {
  const { chosen } = useScore();
  const animation = useRef(null);

  useEffect(async () => {
    if (chosen !== 'none') {
      animation.current = anime({
        duration: 2000,
        delay: 150,
        targets: '.gameBoard',
        'background-size': [{ value: '90%', duration: 800, easing: 'easeInBack' }, { value: '0%', easing: 'easeOutExpo' }],
        easing: 'easeOutElastic(1, .8)',
        autoplay: false
      });
      await animation.current.play();
    }
  }, [chosen]);
  return (
    <>
      <div class='gameBoard mt-14 grid grid-cols-4 gap-x-20 gap-y-7 bg-triangle-img bg-no-repeat bg-desktop bg-center w-fit'>
        <Coin classIn='col-span-2 bg-paper-gr' option='paper' />
        <Coin classIn='col-span-2 bg-scissors-gr' option='scissors' />
        <Coin classIn='col-start-2 col-span-2 bg-rock-gr' option='rock' />
      </div>
    </>
  );
};
