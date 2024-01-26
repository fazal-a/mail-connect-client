import React from 'react';
import styled from "styled-components";

const LayoutWrapper = styled.div`
    font-family: 'Poppins', sans-serif;
`
interface LayoutProps {
    children?: React.ReactNode;
    currentPage?: string; // Optional prop for dynamic navigation
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, title }) => {
    return(
        <LayoutWrapper>{children}</LayoutWrapper>
    )
}
export default Layout;
