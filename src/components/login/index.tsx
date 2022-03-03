import React from "react"
import { Container, Row } from "react-bootstrap"
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=260418c1d2f24e039473b58c493d7aac&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    return (
        <Container fluid className="bg-black">
            <Row><img src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png"/></Row>
            <Row>
                <a href={AUTH_URL} className="btn btn-success t-white t-center">Entrar com spotify</a>

            </Row>

        </Container>
    )
}

export default Login
