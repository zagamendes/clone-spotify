import React, { useContext } from "react"
import "./header.css"
import { Avatar } from "@mui/material"
import { Form } from "react-bootstrap"
import { useUser } from "../../hooks/useAuth"
import { searchContext } from "../dashboard"
import TrackSearchResult from "../tracksearchresult"
const Header = () => {
    const { userInfo } = useUser()
    const { search, setSearch, searchResults, chooseTrack } = useContext(searchContext)

    return (
        <div className="header">
            <div className="header-left">
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group className="sticky-top" controlId="formBasicEmail">

                        <Form.Control type="search" placeholder="buscar por músicas/artistas" value={search} onChange={e => setSearch(e.target.value)} />
                        <div className="flex-grow-1 bg-black" style={{ overflowY: "auto", position: "absolute", zIndex: 10 }}>
                            {searchResults?.map(track => (
                                <TrackSearchResult key={track.uri} track={track} chooseTrack={chooseTrack} />
                            ))}
                        </div>
                    </Form.Group>
                </Form>

            </div>
            <div className="header-right">
                <Avatar src={userInfo?.images ? userInfo?.images[0].url : ""} />
                <h4>{ userInfo ? userInfo.display_name : ""}</h4>
            </div>

        </div>
    )
}

export default Header
