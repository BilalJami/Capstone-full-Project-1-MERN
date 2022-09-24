// import React from "react";
// import { useState } from "react";
// import "../components/signup.css";

// function Signup() {
//   // States for registration
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "" || password === "") {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? "" : "none",
//         }}
//       >
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? "" : "none",
//         }}
//       >
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <center className="center">
//       <div className="container ">
//         <div>
//           <h1>User Registration</h1>
//         </div>

//         {/* Calling to the methods */}
//         <div className="messages">
//           {errorMessage()}
//           {successMessage()}
//         </div>

//         <form className="form">
//           <p>it's quick and easy</p>
//           {/* Labels and inputs for form data */}
//           {/* <label className="label">Type your Username</label> */}
//           <br />
//           <input
//             onChange={handleName}
//             className="input"
//             value={name}
//             type="text"
//             placeholder="Enter your username"
//           />
//           <br />
//           {/* <label className="label">Type your Email</label> */}
//           <br />
//           <input
//             onChange={handleEmail}
//             className="input"
//             value={email}
//             type="email"
//             placeholder="Enter your email"
//           />
//           <br />
//           <br />
//           {/* <label className="label">Password</label><br /> */}
//           <input
//             onChange={handlePassword}
//             className="input"
//             value={password}
//             type="password"
//             placeholder="Enter your password"
//           />
//           <br />
//           <br />
//           <label className="fotget">
//             Note: Please save your login password securely. This application
//             does not give you the option to forget.
//           </label>
//           <br />
//           <br />
//           <button
//             onClick={handleSubmit}
//             className="btn btn-success"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </center>
//   );
// }

// export default Signup;
