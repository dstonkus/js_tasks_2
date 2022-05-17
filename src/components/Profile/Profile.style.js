import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #eeeeee;
  h1 {
    margin-top: 0px;
  }

  border-radius: 15px;
  margin: 55px 25px 0px 25px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CommentSectionContainer = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h3 {
    margin-top: 0px;
  }
`;

export const WriteCommentContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
  }
  textarea {
    min-width: 120px;
    width: 220px;
    max-width: 400px;
    min-height: 80px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  max-width: 80px;
  padding: 5px 25px;
  align-self: center;
  border-radius: 3px;
  font-size: 15px;

  color: #090909;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;

  cursor: pointer;

  :hover {
    border: 1px solid white;
    background-color: #e6e6e6;
  }
`;
export const CardContainer = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
