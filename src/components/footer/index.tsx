/* eslint-disable no-unused-vars */
import React, { FC, useContext } from "react"
import "./footer.css"
import SpotifyWebPlayer from "react-spotify-web-playback/lib"
import { useUser } from "../../hooks/useAuth"
import { searchContext } from "../dashboard"

const Footer:FC<any> = ({ uri }) => {
    const { userInfo } = useUser()

    if (!uri) return null

    return (
        <div className="footer">
            <SpotifyWebPlayer
                styles={{
                    activeColor: "#fff",
                    bgColor: "#000",
                    color: "#fff",
                    loaderColor: "#fff",
                    sliderColor: "#1cb954",
                    trackArtistColor: "#ccc",
                    trackNameColor: "#fff"
                }}

                token={userInfo?.accessToken}
                uris={[uri.uri]}
                play={true}
            />
        </div>
    )
}

export default Footer
