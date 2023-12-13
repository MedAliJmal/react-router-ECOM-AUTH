import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user.isLoggedIn);
  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <img
            src={user.profileImg}
            alt="profpic"
            style={{
              margin: "25px",
              width: "200px",
              height: "auto",
              borderRadius: "10%",
              border: "2px solid white",
            }}
          />
          <div
            style={{
              margin: "25px",
              padding: "25px",
              border: "2px solid white",
              borderRadius: "30px",
              width: "700px",
            }}
          >
            <h1>{user.name}</h1>
            <h3>{user.birthDate}</h3>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Profile;
