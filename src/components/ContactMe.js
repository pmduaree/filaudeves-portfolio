import React from "react"
import style from '../styles/ContactMe.module.css'

const ContactMe = () => {

  return (
    <form action="https://formspree.io/hello@filaudeves.com" method="POST">
      <div>
        <label>Email:</label>
        <input className="u-full-width" type={'email'} placeholder={"example@mail.com"} id={"email"} name={"from"}/>
      </div>
      <div>
        <label>Subject:</label>
        <input className="u-full-width" type={'text'} placeholder={"Subject"} id={"email"} name={"subject"}/>
      </div>
      <div>
        <textarea className={["u-full-width", style.textarea].join(' ')} placeholder="Enter your message here"
                  id="exampleMessage" name={"message"}/>
      </div>
      <input className={["button-primary", style.button].join(' ')} type="submit" value="Submit"/>
    </form>
  )
};


export default ContactMe;
