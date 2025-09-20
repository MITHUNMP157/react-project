import React, { useState } from "react";
import userData from "./data/userData";

const Profile = () => {
  const [loginStatus, setLoginStatus] = useState({});

  const handleAccessClick = (id) => {
    setLoginStatus((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
    console.log(id, loginStatus);
  };
  const onlineUsers = userData.filter((data) => loginStatus[data.id]);

  return (
    <div className="container bg-light">
      <div className="row mb-2">
        <div className="col">
          {onlineUsers.length === 0 ? (
            <b>
              Online User IDs :
              <span className="text-secondary"> No User Online</span>
            </b>
          ) : (
            <div className="mb-3">
              {onlineUsers.map((user) => (
                <span key={user.id} className="me-2">
                  <b>Online User IDs : </b>
                  {user.id}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container mt-5">
        <h1>Profile</h1>
        <div className="row">
          {userData.map((data) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={data.id}>
              <div
                className="card mb-2"
                style={{ width: "18rem", height: "420px" }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <img
                      className="m-2 me-0"
                      src={data.img}
                      alt={data.name}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div>
                    {loginStatus[data.id] ? (
                      <span className="badge rounded-pill text-bg-success m-2  ">
                        <span className="blink-text">Online</span>
                      </span>
                    ) : (
                      <span className="badge rounded-pill text-bg-danger m-2">
                        Offline
                      </span>
                    )}
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <b>Name :</b> {data.name}
                  </div>
                  <div className="card-title">
                    <b>Job Title :</b> {data.jobTitle}
                  </div>
                  <div className="card-title">
                    <b>Skills :</b>
                    <ul style={{ listStyleType: "none" }}>
                      {data.skills.map((skill, key) => (
                        <li key={key}>
                          <b>-</b> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {loginStatus[data.id] ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleAccessClick(data.id)}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAccessClick(data.id)}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
