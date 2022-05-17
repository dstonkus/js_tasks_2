import React from 'react';
import {
  PeopleContainer,
  Profile,
  ProfileLink,
  StyledDiv,
} from './PeopleList.style';

const PeoplesCards = ({ peopleData, query }) => {
  return (
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
        .map((el, i) => (
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
  );
};

export default PeoplesCards;
