import React from "react";

function ContactForm() {
  <section>
    <h1>Contact me</h1>
    <form id="concat-form">
      <div>
        <label htmFor="name">Name:</label>
        <input type="text" name="name"></input>
      </div>
      <div>
        <label htmFor="email">Email address:</label>
        <input type="email" name="email"></input>
      </div>
      <div>
        <label htmFor="message">Message:</label>
        <textarea name="message" rows="5" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>;
}

export default ContactForm;
