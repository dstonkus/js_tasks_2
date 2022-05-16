import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import peopleApi from '../../api/peopleApi';

const { getPeopleList } = peopleApi;

const Header = styled.h1`
  text-align: center;
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
  margin: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
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

const PeopleCard = () => {
  const [peopleData, setPeopleData] = useState([]);
  const getPeopleData = async () => {
    const data = await getPeopleList();

    if (data.status === 200) {
      setPeopleData(data.data);
    }
  };

  useEffect(() => {
    getPeopleData();
  }, []);

  console.log(peopleData);
  return (
    <>
      <div>
        <Header>People List</Header>
        <PeopleContainer>
          {peopleData.length === 0 && (
            <>
              <div className="lds-dual-ring"></div>
            </>
          )}
          {peopleData.map((el, i) => (
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

export default PeopleCard;
