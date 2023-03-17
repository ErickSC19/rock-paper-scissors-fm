import paperUrl from '../assets/icon-paper.svg';
import scissorsUrl from '../assets/icon-scissors.svg';
import rockUrl from '../assets/icon-rock.svg';

export const Coin = ({ classIn, option }) => {
  const options = {
    scissors: scissorsUrl,
    paper: paperUrl,
    rock: rockUrl
  };
  return (
    <button class={`${classIn} group min-w-fit rounded-full flex relative justify-center p-5 shadow-inner-3d-down transition-all hover:scale-105`}>
      <div class='-z-10 group-hover:animate-ping group-hover:absolute group-hover:inline-flex group-hover:rounded-full group-hover:w-full group-hover:h-full group-hover:bg-slate-700 group-hover:opacity-75' />
      <div class='rounded-full bg-white md:w-36 aspect-square flex justify-center p-8 shadow-inner-3d-up'>
        <img src={options[option]} class='' alt={option} />
      </div>
    </button>
  );
};
