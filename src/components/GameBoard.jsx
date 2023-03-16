import { Coin } from './Coin';

export const GameBoard = () => {
  return (
    <div class='mt-14 grid grid-cols-4 gap-x-20 gap-y-7 bg-triangle-img bg-no-repeat bg-desktop bg-center w-fit'>
      <Coin classIn='col-span-2 bg-paper-gr' option='paper' />
      <Coin classIn='col-span-2 bg-scissors-gr' option='scissors' />
      <Coin classIn='col-start-2 col-span-2 bg-rock-gr' option='rock' />
    </div>
  );
};
