import React from "react"
import { Container, Row } from "react-bootstrap"
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=260418c1d2f24e039473b58c493d7aac&response_type=code&redirect_uri=https://clonespotify2474.web.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    return (
        <Container fluid className="bg-black d-flex flex-column justify-content-center" style={{ height: "100vh", alignItems: "center" }}>
            <Row><img src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"/></Row>
            <Row>
                <a href={AUTH_URL} className="btn btn-success t-white t-center font-weight-bolder text-uppercase" style={{ fontWeight: "bolder" }}>Entrar com spotify</a>

            </Row>

        </Container>
    )
}

export default Login
