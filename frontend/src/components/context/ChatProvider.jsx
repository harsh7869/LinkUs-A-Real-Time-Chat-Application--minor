import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Cookies from "js-cookie";
=======
>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [selectedChat, setSelectedChat] = useState();
    const [user, setUser] = useState();
    const [notification, setNotification] = useState([]);
    const [chats, setChats] = useState();
    const navigate = useNavigate();
<<<<<<< HEAD
    const endPoint = process.env.REACT_APP_BASE_URL;
    useEffect(() => {
        const fetchUserData = async () => {
            // const User = await JSON.parse(sessionStorage.getItem("User"));
            const User = Cookies.get("token");
            
            if(User !== undefined)

            {
                setUser(JSON.parse(Cookies.get("token")));
            }
            
            
            if (!User) {
=======

    useEffect(() => {
        const fetchUserData = async () => {
            const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
            setUser(userInfo);
            if (!userInfo) {
>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
                navigate("/");
            }
        };
        fetchUserData();
    }, [navigate])
<<<<<<< HEAD
    
=======

>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
    return (
        <ChatContext.Provider
            value={{
                selectedChat,
                setSelectedChat,
                user,
                setUser,
                notification,
                setNotification,
                chats,
                setChats,
<<<<<<< HEAD
                endPoint
=======
>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(ChatContext);
};

export default ChatProvider;
