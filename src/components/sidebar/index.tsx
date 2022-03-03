import React, { FC, useContext } from "react"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"

import "./sidebar.css"
import { searchContext } from "../dashboard"
const Sidebar:FC<any> = ({ playlists }) => {
    const { chooseTrack } = useContext(searchContext)
    if (!playlists) return null

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="img-fluid" />

            </div>
            <div className="sidebar-option"><HomeIcon /> <h4>Home</h4></div>
            <div className="sidebar-option" ><SearchIcon /><h4>Search</h4></div>
            <div className="sidebar-option"><LibraryMusicIcon /><h4>Your library</h4></div>
            <br/>
            <strong className="sidebar-option">Playlists</strong>

            {playlists.map(playlist => (
                <div key={playlist.id} onClick={() => chooseTrack(playlist)} className="sidebar-option"><p>{playlist.name}</p></div>
            ))}

        </div>
    )
}

export default Sidebar
