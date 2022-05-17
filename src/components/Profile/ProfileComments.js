import {
  CommentSectionContainer,
  WriteCommentContainer,
  StyledButton,
} from './Profile.style';

const ProfileComments = ({ handleClick, setComment, allComments, comment }) => {
  return (
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
          <StyledButton type="submit" value="Submit" onClick={handleClick}>
            Post
          </StyledButton>
        </WriteCommentContainer>

        <div>
          <h3>Comments</h3>
          <div>
            {allComments.length === 0 ? (
              <b>Empty 🥲</b>
            ) : (
              allComments.map((c, i) => <p key={i}>{c}</p>)
            )}
          </div>
        </div>
      </CommentSectionContainer>
    </>
  );
};
export default ProfileComments;
