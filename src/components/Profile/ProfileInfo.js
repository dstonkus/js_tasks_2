import { CardContainer } from './Profile.style';

const ProfileInfo = ({ data }) => {
  return (
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
    </>
  );
};

export default ProfileInfo;
