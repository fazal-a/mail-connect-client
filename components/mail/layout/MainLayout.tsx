import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainEmailSection from "../components/EmailList";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;

`;

const Content = styled.div`
    flex: 1;
    overflow: auto;
`;

const MainLayout = () => {
    return (
        <Container>
            <Header />
            <MainContainer>
                <Sidebar />
                <Content> <MainEmailSection/></Content>
            </MainContainer>
        </Container>
    );
};

export default MainLayout;
