/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { FC, useState, useEffect, createContext } from "react"
import { Row, Container, Col } from "react-bootstrap"

import { useUser } from "../../hooks/useAuth"
import SpotifyWebApi from "spotify-web-api-node"
import Sidebar from "../sidebar"
import Body from "../body"
import Footer from "../footer"
import { Song } from "../../types/userInfo"

const spotifyWebApi = new SpotifyWebApi({ clientId: "260418c1d2f24e039473b58c493d7aac" })
const searchContext = createContext(null)
const Dashboard: FC<any> = () => {
    const { userInfo, setUserInfo } = useUser()

    const [search, setSearch] = useState("")

    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState(null)
    const [discoverWeekly, setDiscoverWeekly] = useState<Song[]>([])

    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setSearch("")
    }

    useEffect(() => {
        if (!userInfo?.accessToken) return
        spotifyWebApi.setAccessToken(userInfo?.accessToken)

        spotifyWebApi.getUserPlaylists().then(({ body }) => {
            setUserInfo({ ...userInfo, playlists: body.items })
        })

        spotifyWebApi.getNewReleases().then(({ body }) => {
            setDiscoverWeekly(body.albums.items)
        })
    }, [userInfo?.accessToken])

    useEffect(() => {
        if (!search) { return setSearchResults([]) }
        let cancel = false
        spotifyWebApi.searchTracks(search)
            .then(({ body }) => {
                if (cancel) { return }

                setSearchResults(body.tracks?.items.map(track => {
                    const smallest = track.album.images
                        .reduce((smallest, image) => {
                            if (smallest.height < image.height) { return smallest }
                            return image
                        }, track.album.images[0])
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallest.url
                    }
                }))
            })
        return () => {
            cancel = true
        }
    }, [search])

    return (
        <Container fluid style={{ padding: 0 }}>

            <searchContext.Provider value={{ playingTrack, search, setSearch, searchResults, chooseTrack }}>
                <Row>
                    <Col xs={4} sm={3} className="p-0">
                        <Sidebar playlists={userInfo?.playlists} />

                    </Col>
                    <Col xs={8} sm={9} className="p-0">
                        <Body discoverWeekly={discoverWeekly} />

                    </Col>
                </Row>
                <Row>
                    <Footer uri={playingTrack} />
                </Row>
            </searchContext.Provider>

        </Container>
    )
}

export default Dashboard
export { searchContext }
