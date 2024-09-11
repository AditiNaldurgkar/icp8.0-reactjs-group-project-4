import React, { useState } from "react";

const userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);


function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));

    console.log("User signed up and data stored in localStorage:", formData);
  };