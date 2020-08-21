import React, {useState} from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { State } from 'xstate';

const FormPage = () => {


const [formState, setFormState] = useState({
name: "",
email: ""

})

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const handleChange = e => {
  setFormState({
    ...formState,
    [e.target.name]: e.target.value,

  })
}


const handleSubmit = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...formState })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  e.preventDefault();
}


return (
  <Layout >
  <div style={{ background: '#fff' , marginTop: '200px'}}>

  
    <div className="wrapper">
      <h2 className="section-headline">Application Form</h2>

   <form 
   name="contact" 
   method="post" 
   data-netlify="true" 
   data-netlify-honeypot="bot-field" 
   onSubmit={handleSubmit}>

      <input type="hidden" name="form-name" value="contact" />


<label htmlFor="name">Name</label>

<input
id="name"
name="name"
type="text"
onChange={handleChange}
value={formState.name}
placeholder="Enter Your Name"/>

<label htmlFor="email">Email</label>

<input
id="email"
name="email"
type="email"
onChange={handleChange}
value={formState.email}
placeholder="Enter Your Email"/>
<button type="submit">Submit</button>
   </form>
    </div>
  </div>
</Layout>
)
}

export default FormPage