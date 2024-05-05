import React, { useState, useEffect } from "react";
import mp3music from '../../Assets/Images/mp3music.mp3';

const Player = (props) => {
  // const [isTabVisible, setIsTabVisible] = useState(true);
  // useEffect(() => {
  //   const targetAudio = document.getElementsByClassName("audioBtn")[0];
  //   setIsTabVisible(props.state === 'visible'?true:false)
  //   console.log(props.state)
  //   isTabVisible && targetAudio.pause();
  // }, [props.state]);

  const [isPlaying, setIsPlaying] = useState(false);
  let initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    if (isPlaying) {
      targetAudio.pause();
      setIsPlaying(false)
    } else {
      targetAudio.play();
      setIsPlaying(true)
    }
  };
  function ImportAllImages(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  const images = ImportAllImages(require.context('../../Assets/Images/', false, /\.(png|jpe?g|svg)$/));
  return (
    <>
      <img onClick={initAudio} src={images['music_Icon.png']} />
      <audio className="audioBtn" loop={true}>
        <source src={mp3music} loop={true} />
      </audio>
    </>
  );
}
export default Player;