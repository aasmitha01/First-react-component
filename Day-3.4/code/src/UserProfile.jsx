import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Aasmitha";
  const age = 18;

  return (
    <div>
      <h3>User Profile</h3>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
