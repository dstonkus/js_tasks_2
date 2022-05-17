import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { ProfileContainer, Wrapper } from './Profile.style';
import ProfileInfo from './ProfileInfo';
import ProfileComments from './ProfileComments';

const Profile = ({ peopleData }) => {
  const { userId } = useParams();
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState(
    () => JSON.parse(sessionStorage.getItem(`comment${userId}`)) || []
  );

  const data = peopleData[userId];

  const handleClick = () => {
    if (comment.trim().length !== 0) {
      setAllComments((prevState) => [comment, ...prevState]);
      setComment('');
    } else {
      alert('Text area is empty!');
    }
  };

  sessionStorage.setItem(`comment${userId}`, JSON.stringify(allComments));

  return (
    <Wrapper>
      <ProfileContainer>
        {peopleData.length === 0 ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <>
            <ProfileInfo data={data} />
            <ProfileComments
              handleClick={handleClick}
              setComment={setComment}
              allComments={allComments}
              comment={comment}
            />
          </>
        )}
      </ProfileContainer>
    </Wrapper>
  );
};

export default Profile;
