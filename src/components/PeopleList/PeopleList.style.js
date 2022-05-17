import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Profile = styled.div`
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

export const StyledDiv = styled.div`
  padding: 30px;
  height: 100px;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
  color: black;
`;

export const PeopleContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const Text = styled.h3`
  text-align: center;
`;

export const SearchInput = styled.div`
  text-align: center;
  margin-bottom: 10px;
  input {
    width: 200px;
    text-align: center;
  }
`;
