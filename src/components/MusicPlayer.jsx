import React, { useEffect, useRef } from "react";
import { useMusic } from "../hooks/useMusic";

export const MusicPlayer = () => {
  const { currentTrack, currentTime, formatTime, duration } = useMusic();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetadata = () => {};

    const handleTimeUpdate = () => {};

    const handleEnded = () => {};
  });

  return (
    <div className="music-player">
      <audio ref={audioRef} preload="metadata" crossOrigin="anonymous" />

      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>

      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input
          className="progress-bar"
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime || 0}
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
