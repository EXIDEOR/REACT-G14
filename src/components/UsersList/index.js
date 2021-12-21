import React from "react";
import UserCard from "../UserCard";

function UserList({ users }) {
  return (
    <div className="userList">
      {users.map(
        ({ id, firstName, lastName, gender, occupation, birthdate }) => {
          return (
            <userCard
              key={id}
              firstName={firstName}
              lastName={lastName}
              gender={gender}
              occupation={occupation}
              birthdate={birthdate}
            />
          );
        }
      )}
    </div>
  );
}

export default UserList;
