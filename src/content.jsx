import { useRef } from "react";

function Content({data}) {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  
  const audioSrc = data[0].phonetics.reduce((src, phonetic) => {
    if (src) {
      return src; 
    } else if (phonetic.audio !== "") {
      return phonetic.audio; 
    } else {
      return null;
    }
  }, null);

  return (
    <div className="content">
      <div>
        <h1>{data[0].word}</h1>
        <h1>{data[0].phonetic}</h1>
        {audioSrc && <audio ref={audioRef} src={audioSrc}></audio>}
        {audioSrc && <img onClick={playAudio} src="./src/assets/images/icon-play.svg"></img>}
      </div>
    </div>
  );
}

export default Content;