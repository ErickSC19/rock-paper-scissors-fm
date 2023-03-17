import logo from './assets/logo.svg';
import { useState } from 'preact/hooks';
import { Score } from './components/Score';
import RulesModal from './components/RulesModal';
import { GameBoard } from './components/GameBoard';

export function App () {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class='flex flex-col items-center min-h-screen max-h-fit p-8'>
        <header class='w-1/2 px-6 py-4 flex justify-between border-2 rounded-xl border-headeer-outline'>
          <img class='' src={logo} alt='Rock, Paper, Scissors' />
          <Score />
        </header>
        <GameBoard />
        <button class='self-end mt-auto border-2 rounded-xl border-headeer-outline py-2 px-10 hover:border-white hover:bg-white hover:text-black mix-blend-screen' onClick={() => setOpen(true)}>RULES</button>
        <RulesModal setIsOpen={setOpen} isOpen={open} />
      </div>

    </>
  );
}
