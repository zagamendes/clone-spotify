import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Login from "./components/login"
import Dashboard from "./components/dashboard"
import UserProvider from "./hooks/useAuth"
const code = new URLSearchParams(window.location.search).get("code")

function App () {
    return code ? <UserProvider code={code} ><Dashboard /></UserProvider> : <Login/>
}

export default App
