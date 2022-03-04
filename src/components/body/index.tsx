import React, { FC } from "react"
import Header from "../header"
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import "./body.css"
import SongRow from "../songRow"
import { Song } from "../../types/userInfo"
interface bodyProps{
    discoverWeekly:Song[]
}
const Body:FC<bodyProps> = ({ discoverWeekly }) => {
    return (
        <div className="body">
            <Header/>
            <div className="body-info">
                <img src="https://community.spotify.com/t5/image/serverpage/image-id/30771i040597211FA3701F?v=v2" alt="" />
                <div className="body-infoText">
                    <strong>Playlists</strong>
                    <h2>Descobertas da semana</h2>
                    <p>Olha só que a gente separou para você essa semana! </p>
                </div>

            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledWhiteIcon className="play-icon"/>
                    <FavoriteIcon/>
                    <MoreHorizIcon/>
                </div>
                {discoverWeekly.map(item => {
                    return <SongRow key={item.id} song={item} />
                })}
            </div>

        </div>
    )
}

export default Body
