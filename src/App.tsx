import React, { useState } from "react";
import "./App.css";
import { ModalComponent, Nav, Footer, Header, Card } from "./components";
import Repos from "./models/repo.json";

function App() {
  const [randomAlpha, setRandomCharacter] = useState<string>(
    btoa(String(+new Date())).substr(-8, 6).toUpperCase()
  );

  const [progress, setProgress] = useState<number>(100);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [isOver, setIsOver] = useState<boolean>(false);

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
          {Repos.map((item, idx) => (
            <Card details={item} key={idx} />
          ))}
        </div>
        <ModalComponent
          openModal={openModal}
          progress={progress}
          randomAlpha={randomAlpha}
          isFinish={isFinish}
          isOver={isOver}
          setOpenModal={setOpenModal}
          setIsFinish={setIsFinish}
          setProgress={setProgress}
          setRandomCharacter={setRandomCharacter}
          setIsOver={setIsOver}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
