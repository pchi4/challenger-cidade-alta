interface Props {
  setOpenModal: (value: boolean) => void;
  setProgress: (value: number) => void;
  setRandomCharacter: (value: string) => void;
  setIsFinish: (value: boolean) => void;
}

export const Header = ({
  setOpenModal,
  setProgress,
  setRandomCharacter,
  setIsFinish,
}: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Desafio Mini Game do Cidade Alta
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Estou aqui para mostrar a vocês um mini game bem divertido. Para
          começar é só clicar no botão começar
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
            onClick={() => {
              setOpenModal(true);
              setProgress(100);
              setRandomCharacter(
                btoa(String(+new Date())).substr(-8, 6).toUpperCase()
              );
              setIsFinish(false);
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Começar
          </button>
        </div>
      </div>
    </section>
  );
};
