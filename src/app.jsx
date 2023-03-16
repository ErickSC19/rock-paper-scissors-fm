import logo from './assets/logo.svg';
import { Score } from './components/Score';
import { RulesModal } from './components/RulesModal';
import { GameBoard } from './components/GameBoard';

export function App () {
  return (
    <>
      <div class='flex flex-col items-center min-h-screen p-8'>
        <header class='w-1/2 px-6 py-4 flex place-content-evenly border-2 rounded-xl border-headeer-outline'>
          <img class='mr-auto' src={logo} alt='Rock, Paper, Scissors' />
          <Score />
        </header>
        <GameBoard />
        <button class='self-end mt-auto border-2 rounded-xl border-headeer-outline py-2 px-10 hover:border-white hover:bg-white hover:text-black mix-blend-screen'>RULES</button>
        <RulesModal />
      </div>

    </>
  );
}
