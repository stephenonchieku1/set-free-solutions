
    import React, { useState } from "react";
import { Input, Form } from "@chakra-ui/react";

const Progress = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the email address stephenonchieku1@gmail.com
    fetch("mailto:stephenonchieku1@gmail.com", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};



export default Progress