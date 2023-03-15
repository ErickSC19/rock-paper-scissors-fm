import logo from './assets/logo.svg';
import Score from './components/Score';
import RulesModal from './components/RulesModal';
import GameBoard from './components/GameBoard';

export function App () {
  return (
    <>
      <div class='flex flex-col items-center'>
        <header class='grow w-1/2 px-6 py-4 flex place-content-evenly border-2 rounded-xl border-headeer-outline'>
          <img class='mr-auto' src={logo} alt='Rock, Paper, Scissors' />
          <Score />
        </header>
        <GameBoard />
        <button>RULES</button>
        <RulesModal />
      </div>
    </>
  );
}
