import { useRef } from "react";

function Content({data, isDark}) {
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
    <div className="content ml-6 mr-6 mt-6">
      <div className="flex flex-row justify-between">
        <div>
            <h1 style={{color: isDark ? "white" : "black" }}className="text-2xl font-bold">{data[0].word}</h1>
            <h1 className=" text-purple-600 text-base sm:text-lg mt-4">{data[0].phonetic}</h1>
        </div>
        <div className="flex">
            {audioSrc && <audio ref={audioRef} src={audioSrc}></audio>}
            {audioSrc && <img className="w-12 h-12" onClick={playAudio} src="./src/assets/images/icon-play.svg"></img>}
        </div>
      </div>
      <div className="mt-8 flex flex-row">
        <h1 style={{color: isDark ? "white" : "black" }} className=" font-bold italic text-base ">{data[0].meanings[0].partOfSpeech}</h1>
        <hr className="mt-3 bg-gray-700 ml-4 w-screen" />
      </div>
      <h1 className="mt-[21px] text-4 text-gray-600 mb-4">Meaning</h1>
      <div className="list-disc custom-dot-color mr-6">
      {data[0].meanings[0].definitions.map((item,index)=>(
      <div className="mb-3 grid grid-cols-2" key={index}>
        <div className="w-1 h-1 mt-2 rounded-full bg-purple-600"></div>
        <h1 className="ml-[-90%]" style={{color: isDark ? "white" : "black" }}>{item.definition}</h1>
      </div>
  ))}
      </div>
      <div className="mt-[21px] flex">
        <h1 className=" text-4 text-gray-600 mb-4">Synonyms</h1>
        <h1 className="ml-5 text-purple-600 font-bold">{data[0].meanings[0].synonyms}</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Content;