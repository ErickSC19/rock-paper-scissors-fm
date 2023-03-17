import close from '../assets/icon-close.svg';
import rules from '../assets/image-rules.svg';

const RulesModal = ({ setIsOpen }) => {
  return (
    <>
      <div class='bg-[rgba(0,_0,_0,_0.3)] w-full min-h-screen z-0 fixed top-0 left-0' onClick={() => setIsOpen(false)} />
      <div class='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div class='min-w-fit min-h-fit bg-white z-10 rounded-2xl py-6 px-8'>
          <div class='flex justify-between mb-12'>
            <h2 class='text-dark-text text-3xl font-bold'>RULES</h2>
            <button onClick={() => setIsOpen(false)}>
              <img src={close} alt='close' />
            </button>
          </div>
          <img class='my-4 mx-8' src={rules} alt='rules' />
        </div>
      </div>
    </>
  );
};

export default RulesModal;
