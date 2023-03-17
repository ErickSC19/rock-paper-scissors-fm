
export const RulesModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div class='bg-[rgba(0,_0,_0,_0.2)] w-screen h-screen z-0 top-1/2 left-1/2 translate-y-1/2 translate-x-1/2' onClick={() => setIsOpen(false)} />
      <div />
    </>
  );
};
