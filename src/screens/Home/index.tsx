import { useEffect, useState } from "react";

export const Home = () => {
  const [randomAlpha] = useState<string>(
    btoa(String(+new Date())).substr(-8, 6).toUpperCase()
  );
  const element = document;
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLocaleLowerCase());

  const alphas = Object.values(randomAlpha.toLocaleLowerCase());

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

  //   function Str_Random(length: number) {
  //     let result = "";
  //     const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  //     // Loop to generate characters for the specified length
  //     for (let i = 0; i < length; i++) {
  //       const randomInd = Math.floor(Math.random() * characters.length);
  //       result += characters.charAt(randomInd);
  //     }
  //     return result;
  //   }

  //   console.log(Str_Random(6));

  const onHandle = (event: string) => {
    // console.log(alphabet.includes(randomAlpha[0]));
    if (!alphas.includes(event)) return;

    if (event === randomAlpha[0].toLowerCase()) {
      console.log("Deu certo!");
      //   setIsSuccessFirst(true);
      setIsSuccess({ ...isSuccess, first: true });
      element?.getElementById("code-2")?.focus();
    }

    if (event === randomAlpha[1].toLowerCase()) {
      console.log("Deu certo!");
      //   setIsSuccessSecond(true);
      setIsSuccess({ ...isSuccess, second: true });
      element?.getElementById("code-3")?.focus();
    }

    if (event === randomAlpha[2].toLowerCase()) {
      console.log("Deu certo!");
      //   setIsSuccessThird(true);
      setIsSuccess({ ...isSuccess, third: true });
      element?.getElementById("code-4")?.focus();
    }
    if (event === randomAlpha[3].toLowerCase()) {
      console.log("Deu certo!");
      //   setIsSuccessFour(true);
      setIsSuccess({ ...isSuccess, four: true });
      element?.getElementById("code-5")?.focus();
    }
    if (event === randomAlpha[4].toLowerCase()) {
      console.log("Deu certo!");
      //   setIsSuccessFive(true);
      setIsSuccess({ ...isSuccess, five: true });
      element?.getElementById("code-6")?.focus();
    }
    if (event === randomAlpha[5].toLowerCase()) {
      console.log("Deu certo!");
      //   setIsSuccessSix(true);
      setIsSuccess({ ...isSuccess, six: true });
      //   element?.getElementById("code-2")?.focus();
    }
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">
        {randomAlpha}{" "}
      </h2>

      <form className="max-w-sm mx-auto">
        <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
          <div>
            <label htmlFor="code-1" className="sr-only">
              First code
            </label>
            <input
              type="text"
              // onChange={(e) => console.log(e)}
              onKeyDown={(e) => onHandle(e.key)}
              maxLength={1}
              value={randomAlpha[0]}
              data-focus-input-init
              data-focus-input-next="code-2"
              id="code-1"
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                isSuccess.first ? "bg-green" : "bg-white"
              } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                isSuccess.first ? "dark:bg-green-700" : "dark:bg-gray-700"
              }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
              required
            />
          </div>
          <div>
            <label htmlFor="code-2" className="sr-only">
              Second code
            </label>
            <input
              type="text"
              maxLength={1}
              onKeyDown={(e) => onHandle(e.key)}
              data-focus-input-init
              value={randomAlpha[1]}
              data-focus-input-prev="code-1"
              data-focus-input-next="code-3"
              id="code-2"
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                isSuccess.second ? "bg-green" : "bg-white"
              } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                isSuccess.second ? "dark:bg-green-700" : "dark:bg-gray-700"
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
              onKeyDown={(e) => onHandle(e.key)}
              data-focus-input-init
              value={randomAlpha[2]}
              data-focus-input-prev="code-2"
              data-focus-input-next="code-4"
              id="code-3"
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                isSuccess.third ? "bg-green" : "bg-white"
              } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                isSuccess.third ? "dark:bg-green-700" : "dark:bg-gray-700"
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
              onKeyDown={(e) => onHandle(e.key)}
              value={randomAlpha[3]}
              data-focus-input-init
              data-focus-input-prev="code-3"
              data-focus-input-next="code-5"
              id="code-4"
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                isSuccess.four ? "bg-green" : "bg-white"
              } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                isSuccess.four ? "dark:bg-green-700" : "dark:bg-gray-700"
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
              onKeyDown={(e) => onHandle(e.key)}
              value={randomAlpha[4]}
              data-focus-input-init
              data-focus-input-prev="code-4"
              data-focus-input-next="code-6"
              id="code-5"
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                isSuccess.five ? "bg-green" : "bg-white"
              } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                isSuccess.five ? "dark:bg-green-700" : "dark:bg-gray-700"
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
              onKeyDown={(e) => onHandle(e.key)}
              data-focus-input-init
              data-focus-input-prev="code-5"
              id="code-6"
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900  border ${
                isSuccess.six ? "bg-green" : "bg-white"
              } border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${
                isSuccess.six ? "dark:bg-green-700" : "dark:bg-gray-700"
              }   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
              required
            />
          </div>
        </div>
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Please introduce the 6 digit code we sent via email.
        </p>
      </form>
    </>
  );
};
