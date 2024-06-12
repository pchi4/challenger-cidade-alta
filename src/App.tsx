import React, { useEffect, useState } from "react";
import "./App.css";
import { ModalComponent, Nav, Footer, Header } from "./components";

function App() {
  const [randomAlpha, setRandomCharacter] = useState<string>(
    btoa(String(+new Date())).substr(-8, 6).toUpperCase()
  );
  const element = document;
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLocaleLowerCase());

  const alphas = Object.values(randomAlpha.toLocaleLowerCase());
  const [isStarted, setStated] = useState(false);
  const [progress, setProgress] = useState<number>(100);
  const [openModal, setOpenModal] = useState(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  console.log(progress);

  return (
    <div className="App bg-white dark:bg-gray-900 h-screen">
      <Nav />
      <div className="mx-5">
        <Header
          setIsFinish={setIsFinish}
          setOpenModal={setOpenModal}
          setProgress={setProgress}
          setRandomCharacter={setRandomCharacter}
        />
        <h3 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Para mais produtos do mesmo criador
        </h3>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Experimente também
        </p>

        <div className="grid md:grid-cols-2 gap-8 w-3/4 mx-auto my-8">
          <div className="bg-gray-50 dark:bg-gray-800 h-3/4 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <div className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Code
            </div>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Pokemon Card
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Projeto divertido feito com Vue.js. Possibilita fazer varias
              consultas de qualquer pokémon.
            </p>

            <img
              className="h-2/4	mx-auto max-w-full rounded-md	"
              src="https://user-images.githubusercontent.com/84159325/189165805-505c4b8e-dd06-4563-b1f9-1f2a50913bca.png"
              alt="image description"
            />

            <a
              href="https://github.com/pchi4/Pokemon-Cards-Pokedex"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center my-4"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 h-3/4 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <div className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Code
            </div>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Caffeine Army Challenger
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Projeto full stack no qual foi desenvolvido atráves de um
              recrutamento.
            </p>

            <img
              className="h-2/4	mx-auto max-w-full rounded-md	"
              src="https://raw.githubusercontent.com/pchi4/caffeinearmy-frontend/4041f00b304749e2815f49435fc09b85700ce539/public/logo.png"
              alt="image description"
            />

            <a
              href="https://github.com/pchi4/caffeinearmy-infra"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center my-4"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <ModalComponent
          setOpenModal={setOpenModal}
          openModal={openModal}
          progress={progress}
          randomAlpha={randomAlpha}
          isFinish={isFinish}
          setIsFinish={setIsFinish}
          setProgress={setProgress}
          setRandomCharacter={setRandomCharacter}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
