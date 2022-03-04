import React, { FC } from "react"

const TrackSearchResult:FC<any> = ({ track, chooseTrack }) => {
    const handlePlay = () => {
        chooseTrack(track)
    }
    return (
        <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer", width: "40vw" }} onClick={() => handlePlay()}>
            <img src={track.albumUrl} className="img-fluid" />
            <div className="m-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult
