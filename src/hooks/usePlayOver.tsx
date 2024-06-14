import useSound from "use-sound";
const soundOver = require("../assets/mixkit-arcade-retro-game-over-213.wav");

export const usePlayOver = () => {
  const [play] = useSound(soundOver);
  return {
    onPlayerOver: play,
  };
};
