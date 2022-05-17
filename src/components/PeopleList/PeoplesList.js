import React, { useState } from 'react';
import PeoplesCards from './PeoplesCards';
import { Header, Text, SearchInput } from './PeopleList.style';

const PeoplesList = ({ peopleData }) => {
  const [query, setQuery] = useState('');

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
        <Text>Click on card to read more</Text>
        <PeoplesCards peopleData={peopleData} query={query} />
      </div>
    </>
  );
};

export default PeoplesList;
