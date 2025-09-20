import React, { useEffect, useState } from "react";

const localDataStorage = () => {
  try {
    const storedData = localStorage.getItem("formDataList");
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error("Failed to load data from localStorage", error);
    return [];
  }
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(localDataStorage());
  useEffect(() => {
    localStorage.setItem("formDataList", JSON.stringify(submittedData));
  }, [submittedData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleDelete = (formDeleteData) => {
    const updateData = submittedData.filter((data) => data !== formDeleteData);
    setSubmittedData(updateData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4">
            <h3 className="text-center">Register Form</h3>
            <form onSubmit={handleFormSubmit} class="row g-3">
              <div style={{ marginBottom: "5px" }}>
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div style={{ marginBottom: "5px" }}>
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {submittedData.length === 0 ? (
        <div className="container text-center">
          <div className="row justify-content-center mb-5">
            <div className="col-md-3 col-lg-4">
              <marquee>
                <b>"No registration data has been submitted. </b>
              </marquee>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <table
            style={{ textAlign: "center" }}
            className="table table-bordered border-secondary"
          >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(data)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
