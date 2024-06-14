import useSound from "use-sound";
const soundWin = require("../assets/mixkit-instant-win-2021.wav");

export const usePlayWin = () => {
  const [play] = useSound(soundWin);
  return {
    play,
  };
};
