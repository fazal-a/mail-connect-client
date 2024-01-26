import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    background-color: #f6f8fc;
    //box-shadow: 0 1px 2px rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149);
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 10px 10px;
    height: 100%;
`;

const ComposeButton = styled.button`
    background-color: #4285f4;
    color: #fff;
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    margin-bottom: 1rem;
    cursor: pointer;
`;

const SectionTitle = styled.div`
    font-weight: bold;
    margin: 1rem 1rem 0.5rem 1rem;
`;

const Tag = styled.div`
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            {/* Compose button */}
            <ComposeButton>Compose</ComposeButton>

            {/* Default tags */}
            <SectionTitle>Tags</SectionTitle>
            <Tag>Inbox</Tag>
            <Tag>Sent</Tag>
            <Tag>Drafts</Tag>
            {/* Add more tags as needed */}

            {/* Labels section */}
            <SectionTitle>Labels</SectionTitle>
            <Tag>Work</Tag>
            <Tag>Personal</Tag>
            <Tag>Important</Tag>
            {/* Add more labels as needed */}
        </SidebarContainer>
    );
};

export default Sidebar;
