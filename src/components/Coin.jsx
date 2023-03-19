import paperUrl from '../assets/icon-paper.svg';
import scissorsUrl from '../assets/icon-scissors.svg';
import rockUrl from '../assets/icon-rock.svg';
import anime from 'animejs/lib/anime.es.js';
import { useScore } from '../context/ScoreContext';
import { useEffect, useRef } from 'preact/hooks';

export const Coin = ({ classIn, option, playedBy }) => {
  const { chosen, setChosen } = useScore();
  const animation = useRef(null);
  const thisCoin = useRef(null);
  const options = {
    scissors: { url: scissorsUrl, notSelected: ['paper', 'rock'] },
    paper: { url: paperUrl, notSelected: ['scissors', 'rock'] },
    rock: { url: rockUrl, notSelected: ['paper', 'scissors'] }
  };
  useEffect(async () => {
    const coinAtribs = thisCoin.current.getBoundingClientRect();
    const positionInX = (36 * window.innerWidth / 100) - (coinAtribs.width / 2);
    const positionInY = (60 * (window.innerHeight - window.scrollY) / 100) - (coinAtribs.height / 2);
    console.log(coinAtribs);
    if (chosen === option) {
      animation.current = anime.timeline({
        duration: 2000,
        autoplay: false
      });
      animation.current
        .add({
          targets: [`.coin-${options[option].notSelected[0]}`, `.coin-${options[option].notSelected[1]}`],
          translateY: [{ value: '-150px', duration: 50, easing: 'easeOutElastic()1, .6' }, { value: '800px' }],
          easing: 'easeOutElastic(1, .8)',
          delay: anime.stagger(500)
        }).add({
          targets: `.coin-${option}`,
          translateX: `${positionInX - (coinAtribs.x)}px`, // <-- This moves the element to a specific x cord no matter original position
          translateY: `${positionInY - (coinAtribs.y)}px`, // <-- This moves the element to a specific y cord no matter original position
          scale: 1.5,
          easing: 'easeOutQuint'
        }, 900);
      await animation.current.play();
    }
  }, [chosen, option]);
  return (
    <button
      class={`coin-${option} ${classIn} relative group min-w-fit h-fit rounded-full flex justify-center p-5 shadow-inner-3d-down transition-all ${playedBy !== 'results' ? 'hover:scale-105' : 'scale-150'}`} onClick={() => {
        setChosen(option);
      }} ref={thisCoin}
      disabled={chosen !== 'none' || playedBy === 'results'}
    >
      <div class='rounded-full bg-white md:w-36 aspect-square flex justify-center p-8 shadow-inner-3d-up'>
        <img src={options[option].url} class='' alt={option} />
      </div>
    </button>
  );
};
