import React, { FC, useContext } from "react"
import { searchContext } from "../dashboard"
import "./songRow.css"
const SongRow:FC<any> = ({ song }) => {
    if (!song) return null
    const { chooseTrack } = useContext(searchContext)

    return (
        <div className="song-row" onClick={() => chooseTrack(song)}>
            <img src={song.images[song.images.length - 1].url} />
            <div className="song-info">
                <h4>{song.name}</h4>
                <p>{song.artists.map(artist => {
                    return artist.name
                }).join(", ")}</p>
            </div>

        </div>
    )
}

export default SongRow
