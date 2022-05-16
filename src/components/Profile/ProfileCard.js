import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #dfdfdf;
  h1 {
    margin-top: 0px;
  }

  border: 1px solid black;
  border-radius: 15px;
  margin: 35px 25px 0px 25px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CommentSectionContainer = styled.div`
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

const WriteCommentContainer = styled.div`
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

const StyledButton = styled.button`
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
const CardContainer = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProfileCard = ({ peopleData }) => {
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState('');
  let { userId } = useParams();
  const data = peopleData[userId];

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem(`comment${userId}`));
    if (sessionData !== null) {
      setAllComments(sessionData);
    }
  }, [userId]);

  const handleClick = () => {
    setAllComments((prevState) => [comment, ...prevState]);
    sessionStorage.setItem(`comment${userId}`, JSON.stringify(allComments));
  };

  return (
    <Wrapper>
      <ProfileContainer>
        {peopleData.length === 0 ? (
          <>
            <div className="lds-dual-ring"></div>
          </>
        ) : (
          <>
            <CardContainer>
              <h1>Profile section</h1>
              <div>
                <p>
                  👤 Full Name: {data.first} {data.last}
                </p>
              </div>
              <div>
                <p>💵 Account Balance: {data.balance}</p>
                <p>🏠 Home Address: {data.address}</p>
              </div>
              <div>
                <p>💾 Date Created: {data.created}</p>
                <p>📧 Email: {data.email}</p>
              </div>
            </CardContainer>

            <>
              <>
                <CommentSectionContainer>
                  <h1>Comment section</h1>
                  <WriteCommentContainer>
                    <label>
                      <h3>Write comment:</h3>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </label>
                    <StyledButton
                      type="submit"
                      value="Submit"
                      onClick={handleClick}
                    >
                      Post
                    </StyledButton>
                  </WriteCommentContainer>

                  <div>
                    <h3>Comments</h3>
                    <div>
                      {allComments.length === 0 ? (
                        <b>Empty</b>
                      ) : (
                        allComments.map((c, i) => <p key={i}>{c}</p>)
                      )}
                    </div>
                  </div>
                </CommentSectionContainer>
              </>
            </>
          </>
        )}
      </ProfileContainer>
    </Wrapper>
  );
};

export default ProfileCard;
