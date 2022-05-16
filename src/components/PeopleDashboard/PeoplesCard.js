import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
`;

const Text = styled.h3`
  text-align: center;
`;

const SearchInput = styled.div`
  text-align: center;
  margin-bottom: 10px;
  input {
    width: 200px;
    text-align: center;
  }
`;

const PeopleContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
`;

const Profile = styled.div`
  background-color: #e1e1e1;
  margin: 10px 20px 10px 20px;
  width: 100%;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  transition: 0.1s;

  :hover {
    border: 1px solid white;
    background-color: #eeeeee;
  }
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
  color: black;
`;

const StyledDiv = styled.div`
  padding: 30px;
  height: 100px;
`;

const PeoplesCard = ({ peopleData }) => {
  const [query, setQuery] = useState('');

  console.log(query);
  return (
    <>
      <div>
        <Header>People List</Header>
        <SearchInput>
          <input
            placeholder="Search by Name or Surname"
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchInput>
        <Text>Press on card to read more</Text>
        <PeopleContainer>
          {peopleData.length === 0 && (
            <>
              <div className="lds-dual-ring"></div>
            </>
          )}

          {peopleData
            .filter((el) => {
              if (query === '') {
                return el;
              } else if (
                el.first.toLowerCase().includes(query.toLowerCase()) ||
                el.last.toLowerCase().includes(query.toLowerCase())
              ) {
                return el;
              }
            })
            .map((el, i, a) => (
              <Profile key={i}>
                <ProfileLink to={`/profile/${i}`}>
                  <StyledDiv>
                    <div>Name: {el.first}</div>
                    <div>Surname: {el.last}</div>
                  </StyledDiv>
                </ProfileLink>
              </Profile>
            ))}
        </PeopleContainer>
      </div>
    </>
  );
};

export default PeoplesCard;
