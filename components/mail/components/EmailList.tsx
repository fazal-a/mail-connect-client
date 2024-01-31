import React from 'react';
import styled from 'styled-components';

const MainEmailContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const Pagination = styled.div`
  font-size: 0.8rem;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Tag = styled.div`
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: #f1f1f1;
`;

const EmailListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
`;

const EmailInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SelectIcon = styled.div`
  margin-right: 0.5rem;
`;

const StarIcon = styled.div`
  margin-right: 0.5rem;
  color: #ffd700; /* Yellow color for starred */
`;

const SenderName = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const TimeReceived = styled.div`
  font-size: 0.8rem;
  color: #888;
`;

const MainEmailSection = ({threads}) => {
    return (
        <MainEmailContainer>
            <TopSection>
                <IconsContainer>
                    <Icon>Select</Icon>
                    <Icon>Refresh</Icon>
                    <Icon>More</Icon>
                </IconsContainer>
                <Pagination>1-50 emails</Pagination>
            </TopSection>

            <TagsContainer>
                <Tag>Primary</Tag>
                <Tag>Promotions</Tag>
                <Tag>Social</Tag>
            </TagsContainer>

            <EmailListContainer>
                {/* Example Email Row */}
                <EmailRow>
                    <EmailInfo>
                        <SelectIcon>Select</SelectIcon>
                        <StarIcon>Star</StarIcon>
                        <SenderName>John Doe</SenderName>
                        <div>Email message snippet...</div>
                    </EmailInfo>
                    <TimeReceived>2:30 PM</TimeReceived>
                </EmailRow>
                {threads.map ((thread: any) =>{
                   return (<EmailRow key={thread?.id}>
                        <EmailInfo>
                            <SelectIcon>Select</SelectIcon>
                            <StarIcon>Star</StarIcon>
                            <SenderName>{thread?.id}</SenderName>
                            <div>{thread?.messages[0]?.snippet}</div>
                        </EmailInfo>
                        <TimeReceived>2:30 PM</TimeReceived>
                    </EmailRow>)
                })}


                {/* Add more email rows as needed */}
            </EmailListContainer>
        </MainEmailContainer>
    );
};

export default MainEmailSection;
