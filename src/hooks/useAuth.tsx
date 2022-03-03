/* eslint-disable no-undef */
import React, { useState, useEffect, useContext, createContext, FC } from "react"
import axios from "axios"

const userInfoContext = createContext<UserInfo>(null)
const useUser = () => useContext(userInfoContext)
const UserProvider:FC<any> = ({ children, code }) => {
    const [userInfo, setUserInfo] = useState <UserResponse|null>(null)

    useEffect(() => {
        axios.post("http://localhost:3001/login", { code })
            .then(({ data }) => {
                setUserInfo(data)
            }).catch(() => {
                // window.location.href = "/"
            })
    }, [userInfo])

    return (
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </userInfoContext.Provider>)
}

export default UserProvider
export { useUser }
