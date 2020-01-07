import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

// class loginform extends Component {
//   render() {
//     return (
//       <Container className="App">
//         <h2>Sign In</h2>
//         <Form className="form">
//           <Col>
//             <FormGroup>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="exampleEmail"
//                 placeholder="myemail@email.com"
//               />
//             </FormGroup>
//           </Col>
//           <Col>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="examplePassword"
//                 placeholder="********"
//               />
//             </FormGroup>
//           </Col>
//           <Button>Submit</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const loginform = (props) => {
//   return (
//     <Form inline>
//       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <Label for="exampleEmail" className="mr-sm-2">Email</Label>
//         <Input type="email" name="email" id="exampleEmail" placeholder="refugeelogin@idk.cool" />
//       </FormGroup>
//       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <Label for="examplePassword" className="mr-sm-2">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//   );
// }

// form without boot/reactstrap:

// const AdminLogin = props => {
//   const [users, setUsers] = useState({
//     username: "",
//     email: ""
//   });

//   const handleChanges = e => {
//     setUsers({
//       ...users, [e.target.name]: e.target.value
//     })
//     console.log(e.target.name);
//   };

//   const addNewAdmin = user => {
//     const newAdmin ={
//       id: Date.now(),
//       username: user.username,
//       email: user.email
//     }
//     setUsers([...users, newAdmin])
//   }

//   const submitForm = e => {
//     e.preventDefault();
//     addNewAdmin(users);
//     setUsers({username: "", email: ""})
//   };

//   return (
//     <div className="admin-login">
//       <h4>Admin Login: </h4>
//     <form onSubmit={submitForm} className="admin-loginForm">
//       <label htmlFor="username">Username: </label>
//       <input id="username" type="text" placeholder="Username" onChange={handleChanges} name="username" value={users.username}
//       />
//       <label htmlFor="email">Email: </label>
//       <input id="email" type="text" placeholder="Email" onChange={handleChanges} name="email" value={users.email}
//       />
//       <button type="submit">Login</button>
//     </form>
//     </div>

//   )
// }

const AdminLogin = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  useEffect(() => {
    axios
      .post("https://testing-refugee-stories.herokuapp.com/auth/login")
      .then(response => {
        console.log("success", response);
      })
      .catch(error => console.log(error.response));
  }, []);

  return (
    <form className="admin-login" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Email: </label>
      <input
        name="username"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}

      <label htmlFor="password">Password: </label>
      <input
        name="password"
        ref={register({
          required: "Required",
          message: "invalid password",
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
    </form>
  );
};

// export default loginform;
export default AdminLogin;
