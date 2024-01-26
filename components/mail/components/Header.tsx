import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #f6f8fc;
    color: #3c4043;
    display: flex;
    align-items: center;
    padding: 0.5rem;
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

const CenterSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchBox = styled.input`
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    margin: 0 1rem;
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
  margin: 0 0.5rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LeftSection>
                {/* Burger menu button */}
                <Icon>&#9776;</Icon>
                {/* Gmail icon */}
                <Icon>Gmail</Icon>
            </LeftSection>

            <CenterSection>
                {/* Gmail search box */}
                <SearchBox placeholder="Search in Gmail" />
            </CenterSection>

            <RightSection>
                {/* Support, Settings, App icons */}
                <Icon>Support</Icon>
                <Icon>Settings</Icon>
                <Icon>Apps</Icon>
                {/* Profile icon */}
                <Icon>Profile</Icon>
            </RightSection>
        </HeaderContainer>
    );
};

export default Header;
