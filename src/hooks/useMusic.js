import React, { useState } from 'react'

const songs = [
    {
        id: 1,
        title: "Boulovered of Broken Dreams",
        artist: "Green Day",
        url: "/songs/Boulovered of broken dreamz.mp3",
        duration: "4:20"
    },
    {
        id: 2,
        title: "Walking Alone",
        artist: "Green Day",
        url: "/songs/Green_Day_Walking_Alone.mp3",
        duration: "2:45"
    },
    {
        id: 3,
        title: "Invincible",
        artist: "Machine Gun Kelly",
        url: "/songs/Invincible (feat. Ester Dean) - Machine Gun Kelly [Full HTC Commercial Song] - YouTube.mp3",
        duration: "3:28"
    },
    {
        id: 4,
        title: "Iridescent",
        artist: "Linkin Park",
        url: "/songs/Iridescent-LINKINPARK.mp3",
        duration: "4:56"
    },
    {
        id: 5,
        title: "Its My Life",
        artist: "Bon Jovi",
        url: "/songs/Its My Life.mp3",
        duration: "3:46"
    },
    {
        id: 6,
        title: "New Divine",
        artist: "Linkin Park",
        url: "/songs/Linkin_Park_New_Divide.mp3",
        duration: "4:27"
    },
    {
        id: 7,
        title: "Figure",
        artist: "Linkin Park",
        url: "/songs/LP-Figure.09.mp3",
        duration: "3:17"
    },
    {
        id: 8,
        title: "Falling Inside the Black",
        artist: "Skillet",
        url: "/songs/Skillet - Falling Inside the Black.mp3",
        duration: "3:29"
    },
    {
        id: 9,
        title: "Whispers in the Dark",
        artist: "Skillet",
        url: "/songs/Skillet-Whispers In The Dark.mp3",
        duration: "3:24"
    },
    {
        id: 10,
        title: "Wake Me Up When September Ends",
        artist: "Green Day",
        url: "/songs/Wake Me Up When September Ends.mp3",
        duration: "4:45"
    },
];

export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs)
    const [currentTrack, setCurrentTrack] = useState(songs[0])
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)

    const handlePlaySong = (song, index) => {
        setCurrentTrack(song)
        setCurrentTrackIndex(index)
        setIsPlaying(false)
    }

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex
        })
        setIsPlaying(false)
    }

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex
        })
        setIsPlaying(false)
    }

    const formatTime = (time) => {
        if ((isNaN(time)) || time === undefined) return "0:00"

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    const play = () => setIsPlaying(true)
    const pause = () => setIsPlaying(false)

    return { allSongs, setAllSongs, currentTrack, currentTrackIndex, handlePlaySong, currentTime, setCurrentTime, formatTime, duration, setDuration, nextTrack, prevTrack, isPlaying, play, pause, volume, setVolume };
}
