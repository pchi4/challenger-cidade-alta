import React, { useEffect, useState, useRef, useCallback } from "react";
import { Line } from "rc-progress";
import { Button, Modal } from "flowbite-react";
import Confetti from "react-confetti";
import { usePlayOver, usePlayWin } from "../hooks";

interface Props {
  openModal: boolean;
  randomAlpha: string;
  progress: number;
  isFinish: boolean;
  isOver: boolean;
  setOpenModal: (value: boolean) => void;
  setProgress: (value: number) => void;
  setRandomCharacter: (value: string) => void;
  setIsFinish: (value: boolean) => void;
  setIsOver: (value: boolean) => void;
}

export const ModalComponent = ({
  setOpenModal,
  openModal,
  progress,
  randomAlpha,
  isFinish,
  isOver,
  setProgress,
  setIsFinish,
  setRandomCharacter,
  setIsOver,
}: Props) => {
  const element = document;

  const alphas = Object.values(randomAlpha.toLocaleLowerCase());
  const [isWin, setIsWin] = useState<boolean>(false);
  let intervalId = useRef<string | number | NodeJS.Timer | undefined>();
  let idx = useRef(0).current;

  const { onPlayerWin } = usePlayWin();
  const { onPlayerOver } = usePlayOver();

  const [isSuccess, setIsSuccess] = useState({
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
    six: false,
  });

  const [isError, setIsError] = useState({
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
    six: false,
  });

  const startTime = useCallback(() => {
    if (progress === 0) {
      setIsFinish(true);
      onPlayerOver();
      return;
    }
    intervalId.current = setInterval(() => {
      setProgress(progress - 10);
    }, 1000);
  }, [onPlayerOver, progress, setIsFinish, setProgress]);

  useEffect(() => {
    startTime();
    return () => {
      clearInterval(intervalId.current);
    };
  }, [openModal, startTime]);

  useEffect(() => {
    function handleKeyDown(e: any) {
      if (!alphas.includes(e.key)) {
        setIsError((event) => ({
          ...event,
          first: true,
        }));
        setIsOver(true);
        onPlayerOver();
        clearInterval(intervalId.current);

        return;
      }

      // console.log(alphas.indexOf(e.key));
      console.log(alphas[alphas.indexOf(e.key)]);

      if (
        e.key === alphas[alphas.indexOf(e.key)].toLocaleLowerCase() &&
        !isSuccess.first
      ) {
        setIsSuccess((event) => ({
          ...event,
          first: true,
        }));
        element?.getElementById("code-2")?.focus();
        return;
      }

      if (
        e.key === alphas[alphas.indexOf(e.key)].toLocaleLowerCase() &&
        !isSuccess.second
      ) {
        setIsSuccess((event) => ({
          ...event,
          second: true,
        }));
        element?.getElementById("code-3")?.focus();
        return;
      }

      if (
        e.key === alphas[alphas.indexOf(e.key)].toLowerCase() &&
        !isSuccess.third
      ) {
        setIsSuccess((event) => ({
          ...event,
          third: true,
        }));
        element?.getElementById("code-4")?.focus();
        return;
      }
      if (
        e.key === alphas[alphas.indexOf(e.key)].toLowerCase() &&
        !isSuccess.four
      ) {
        setIsSuccess((event) => ({
          ...event,
          four: true,
        }));
        element?.getElementById("code-5")?.focus();
        return;
      }
      if (
        e.key === alphas[alphas.indexOf(e.key)].toLowerCase() &&
        !isSuccess.five
      ) {
        setIsSuccess((event) => ({
          ...event,
          five: true,
        }));
        element?.getElementById("code-6")?.focus();
        return;
      }
      if (
        e.key === alphas[alphas.indexOf(e.key)].toLowerCase() &&
        !isSuccess.six
      ) {
        setIsSuccess((event) => ({
          ...event,
          six: true,
        }));
        setIsWin(true);
        clearInterval(intervalId.current);
        onPlayerWin();
        return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    alphas,
    element,
    isSuccess.first,
    isSuccess.five,
    isSuccess.four,
    isSuccess.second,
    isSuccess.six,
    isSuccess.third,
    onPlayerOver,
    onPlayerWin,
    setIsOver,
    startTime,
  ]);

  function setStateFalse() {
    setIsSuccess({
      first: false,
      second: false,
      third: false,
      four: false,
      five: false,
      six: false,
    });
  }

  function onRepeat() {
    setRandomCharacter(btoa(String(+new Date())).substr(-8, 6).toUpperCase());
    setProgress(100);
    setIsFinish(false);
    setIsOver(false);
    setIsWin(false);
    setStateFalse();
  }

  function onCloseModal() {
    setOpenModal(false);
    setIsFinish(false);
    setIsOver(false);
    setIsWin(false);
    setStateFalse();
  }

  return (
    <>
      {isWin && <Confetti />}

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Mini Game</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 mx-auto">
            {!isFinish && !isOver && !isWin && (
              <>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Fique atento no tempo e na ordem dos caracteres. Não digite o
                  caractere errado. Boa sorte!
                </p>

                <form className="max-w-sm mx-auto">
                  <div className="flex mb-2 justify-center space-x-2 rtl:space-x-reverse mx-auto">
                    <div>
                      <label htmlFor="code-1" className="sr-only">
                        First code
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        value={randomAlpha[0]}
                        data-focus-input-init
                        data-focus-input-next="code-2"
                        id="code-1"
                        className={`block w-10 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                          isSuccess.first ? "bg-green" : "bg-white"
                        } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                          isSuccess.first ? "dark:bg-green" : "dark:bg-gray-700"
                        }  ${isError.first ? "bg-red" : "bg-white"}  ${
                          isError.first ? "dark:bg-red-700" : "dark:bg-gray-700"
                        } dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        required
                        disabled={true}
                      />
                    </div>
                    <div>
                      <label htmlFor="code-2" className="sr-only">
                        Second code
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        data-focus-input-init
                        value={randomAlpha[1]}
                        data-focus-input-prev="code-1"
                        data-focus-input-next="code-3"
                        id="code-2"
                        disabled={true}
                        className={`block w-10 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                          isSuccess.second ? "bg-green" : "bg-white"
                        } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                          isSuccess.second
                            ? "dark:bg-green-700"
                            : "dark:bg-gray-700"
                        }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="code-3" className="sr-only">
                        Third code
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        data-focus-input-init
                        value={randomAlpha[2]}
                        data-focus-input-prev="code-2"
                        data-focus-input-next="code-4"
                        id="code-3"
                        disabled={true}
                        className={`block w-10 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                          isSuccess.third ? "bg-green" : "bg-white"
                        } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                          isSuccess.third
                            ? "dark:bg-green-700"
                            : "dark:bg-gray-700"
                        }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="code-4" className="sr-only">
                        Fourth code
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        value={randomAlpha[3]}
                        data-focus-input-init
                        data-focus-input-prev="code-3"
                        data-focus-input-next="code-5"
                        id="code-4"
                        disabled={true}
                        className={`block w-10 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                          isSuccess.four ? "bg-green" : "bg-white"
                        } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                          isSuccess.four
                            ? "dark:bg-green-700"
                            : "dark:bg-gray-700"
                        }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="code-5" className="sr-only">
                        Fifth code
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        value={randomAlpha[4]}
                        data-focus-input-init
                        data-focus-input-prev="code-4"
                        data-focus-input-next="code-6"
                        id="code-5"
                        disabled={true}
                        className={`block w-10 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                          isSuccess.five ? "bg-green" : "bg-white"
                        } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                          isSuccess.five
                            ? "dark:bg-green-700"
                            : "dark:bg-gray-700"
                        }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="code-6" className="sr-only">
                        Sixth code
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        value={randomAlpha[5]}
                        data-focus-input-init
                        data-focus-input-prev="code-5"
                        id="code-6"
                        disabled={true}
                        className={`block w-10 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                          isSuccess.six ? "bg-green" : "bg-white"
                        } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                          isSuccess.six
                            ? "dark:bg-green-700"
                            : "dark:bg-gray-700"
                        }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        required
                      />
                    </div>
                  </div>
                  <p
                    id="helper-text-explanation"
                    className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    Por favor, Digite os caracteres de forma sequencial!
                  </p>
                </form>

                <Line percent={progress} strokeWidth={2} strokeColor="orange" />
              </>
            )}

            {isFinish && (
              <>
                <h2
                  className="text-4xl text-center font-extrabold dark:text-red"
                  style={{ fontFamily: "ArcadeClassic", color: "red" }}
                >
                  Game Over
                </h2>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Infelizmente você ultrapassou o tempo limite. Para tentar mais
                  uma vez, clique abaixo em jogar novamente.
                </p>
              </>
            )}

            {isWin && (
              <>
                <h2
                  className="text-4xl text-center font-extrabold dark:text-green"
                  style={{
                    fontFamily: "ArcadeClassic",
                    color: "rgb(42,221,42)",
                  }}
                >
                  K.O
                </h2>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Parabéns! Você é mestre em digitar de forma sequencial, você
                  acaba de vencer o mini game.
                </p>
              </>
            )}

            {isOver && (
              <>
                <h2
                  className="text-4xl text-center font-extrabold dark:text-green"
                  style={{ fontFamily: "ArcadeClassic", color: "red" }}
                >
                  Game Over
                </h2>
                <p className="text-center leading-relaxed text-gray-500 dark:text-gray-400">
                  Ops! Infelizmente você não seguiu as regras e acabou perdendo.
                </p>
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="mx-auto">
          <Button className="bg-red" color="red" onClick={() => onCloseModal()}>
            Fechar
          </Button>
          <Button
            className="bg-yellow"
            color="yellow"
            onClick={() => onRepeat()}
          >
            Jogar novamente
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
