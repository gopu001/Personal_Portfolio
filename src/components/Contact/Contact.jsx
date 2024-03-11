import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import linkedIn from "../../assets/linkedin1.png";
import github from "../../assets/github1.png";
import thankyouImg from "../../assets/accept.png";
import xBtn from "../../assets/xButton.png";
// import './style.scss'

//template_r60jewp

//service_h1uakdp

//gcBiDN2czo_WFBIdD

function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setError(validationErrors);
    setisSubmit(true);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_h1uakdp",
          "template_r60jewp",
          {
            from_name: form.fullname,
            to_name: "Nikhil",
            from_email: form.email,
            to_email: "gopunikhil001@gmail.com",
            message: form.message,
          },
          "gcBiDN2czo_WFBIdD"
        )
        .then(() => {
          setShowAlert(true);
          setForm(initialValues);
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong");
        });
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(form);
    }
  }, [error]);

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!values.fullname || values.fullname.length < 4) {
      error.fullname = "Fullname is required and must be atleast 3 characters!";
    }
    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "Enter valid email address!";
    }
    if (!values.message) {
      error.message = "Message box should not be empty!";
    } else if (values.message.length < 11) {
      error.message = "Message should be atleast 10 characters!";
    }
    return error;
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div name="Contact" className="contact">
      <div className="mainContainer">
        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
          <div className="frontPart">
            <div className="contactMe">
              <h2>
                Contact <span>Me</span>
              </h2>
            </div>
            <div className="frontPartDetails">
              <div className="topPart">
                <h2>Nikhil Gopu.</h2>
              </div>
              <div className="middlePart">
                <h2>Turning your ideas into impactful websites.</h2>
              </div>
              <div className="lastPart">
                <p>
                  Feel free to reach out! Whether you want to hire, have a
                  project in mind, a question, or just want to say hello, I'd
                  love to hear from you.
                </p>
              </div>
              <div className="links">
                <a href="" target="_blank">
                  {" "}
                  <img src={linkedIn} alt="" />{" "}
                </a>
                <a href="" target="_blank">
                  {" "}
                  <img src={github} alt="" />{" "}
                </a>
              </div>
              <div className="flipButton">
                <button onClick={flipCard}>Flip me to connect me</button>
              </div>
            </div>
          </div>

          <div className="backPart">
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="inputs">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                />
                <p>{error.fullname}</p>
              </div>

              <div className="inputs">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ex:gopunikhil@gmail.com"
                  required
                />
                <p>{error.email}</p>
              </div>

              <div className="inputs">
                <label>Message</label>
                <textarea
                  rows="5"
                  name="message"
                  onChange={handleChange}
                  value={form.message}
                  placeholder="What do you want to ping me?"
                />
                <p>{error.message}</p>
              </div>

              <button type="submit">Submit</button>
            </form>
            <button onClick={flipCard}>Flip Me to Know Me </button>

            {showAlert && (
              <div className="submitAlert">
                <img src={thankyouImg} alt="" />
                <p>
                  Thank you for contacting. We will get back to you as soon as
                  possible.
                </p>

                <button onClick={() => setShowAlert(false)}>Close</button>
              </div>
            )}
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default Contact;
