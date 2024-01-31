import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainEmailSection from "../components/EmailList";
import {Content, MainContainer,Container} from "./MainLayout.styles";


const initialThreadsState = [
    {
        historyId:  "123",
        id: "123",
        messages:[{}]
    }
]

const MainLayout = () => {
    const [threads, setThreads] = useState(initialThreadsState)

    useEffect(() => {
        const fetchThreadsData = async () => {
            console.log("I am in fetchThreadsData" )
            const tokenData = localStorage.getItem("tokenData");
            console.log("tokensString::",tokenData )
            const tokens = JSON.parse(tokenData)
            console.log("tokens::",tokens)
            if (tokens) {
                try {
                    const fetchThreadsAPIResponse = await fetch('/api/fetchThreads', {
                        method: 'GET'
                    });

                    const threadsData = await fetchThreadsAPIResponse.json();
                    if(threadsData){
                        console.log("threadsData::,",threadsData);
                        setThreads(threadsData);
                        localStorage.setItem("threadsData", JSON.stringify(threadsData))
                    }
                } catch (error) {
                    console.error('Error fetching threadsData:', error);
                }
            }
        }
        fetchThreadsData()
    }, []); // Run once when the component mounts


    return (
        <Container>
            <Header />
            <MainContainer>
                <Sidebar />
                <Content> <MainEmailSection threads={threads}/></Content>
            </MainContainer>
        </Container>
    );
};

export default MainLayout;
