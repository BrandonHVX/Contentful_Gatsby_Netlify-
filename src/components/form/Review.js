import React from "react";



const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  

  
  
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  
    e.preventDefault();
  }

  




const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email
  } = formData;
  const { go } = navigation;

  return (
    <form 
    name="contact" 
    method="post" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field" 
    onSubmit={handleSubmit}>
      <h3>Review your data</h3>
      <h4>
        Name
        <button onClick={() => go("names")}>Edit</button>
      </h4>
      <div>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
      <div>Nick Name: {`${nickName}`}</div>
      <h4>
        Address
        <button onClick={() => go("address")}>Edit</button>
      </h4>
      <div>
        Address: {`${address}`},
        <br />
        City: {` ${city}`},
        <br />
        State: {`${state}`},
        <br />
        ZIP: {`${zip}`}
      </div>
      <h4>
        Contact
        <button onClick={() => go("contact")}>Edit</button>
      </h4>
      <div>
        Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Review;