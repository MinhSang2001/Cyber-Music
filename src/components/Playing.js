import React, { useContext } from "react"
import H5AudioPlayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css'
import { Songs } from '../Context'

function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
    return (
        <div>
            <H5AudioPlayer 
                src={song.url}
                layout="stacked-reverse" 
                className="player-music"
                showSkipControls={true}
                showJumpControls={false}
                loop={false}
                onEnded={handleClickNext}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
            />
        </div>
    )
}
export default Playing