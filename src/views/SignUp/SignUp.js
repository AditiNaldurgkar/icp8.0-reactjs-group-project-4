import React, { useState } from "react";

onst userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);


function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });