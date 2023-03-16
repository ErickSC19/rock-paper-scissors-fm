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
    <button class={`${classIn} min-w-fit rounded-full flex justify-center p-5 shadow-inner-3d-down`}>
      <div class='rounded-full bg-white md:w-36 aspect-square flex justify-center p-8 shadow-inner-3d-up'>
        <img src={options[option]} class='' alt={option} />
      </div>
    </button>
  );
};
