import * as functions from "firebase-functions"
import express from "express"
import SpotifyWebAPI from "spotify-web-api-node"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/login", async (req, res) => {
    try {
        const spotifyAPI = new SpotifyWebAPI({
            redirectUri: "https://clonespotify2474.web.app/",
            clientId: "260418c1d2f24e039473b58c493d7aac",
            clientSecret: "76900915192147b9983a4c5bb91487c4"
        })
        const code = req.body.code

        const responseToken = await spotifyAPI.authorizationCodeGrant(code)
        spotifyAPI.setAccessToken(responseToken.body.access_token)
        const { body: responseUser } = await spotifyAPI.getMe()

        const userInfo = {
            accessToken: responseToken.body.access_token,
            refreshToken: responseToken.body.refresh_token,
            expiresIn: responseToken.body.expires_in,
            ...responseUser
        }
        res.json({ ...userInfo })
    } catch (error) {
        throw new Error(error as string)
    }
})

export const api = functions.https.onRequest(app)
