/* eslint-disable no-undef */
import React, { useState, useEffect, useContext, createContext, FC } from "react"
import axios from "axios"
import { UserInfo, UserResponse } from "../types/userInfo"

const userInfoContext = createContext<UserInfo>(null)
const useUser = () => useContext(userInfoContext)
const UserProvider:FC<any> = ({ children, code }) => {
    const [userInfo, setUserInfo] = useState <UserResponse|null>(null)

    useEffect(() => {
        axios.post("/login", { code })
            .then(({ data }) => {
                console.log("data", data)

                setUserInfo(data)
            })
    }, [userInfo?.accessToken])

    return (
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </userInfoContext.Provider>)
}

export default UserProvider
export { useUser }
