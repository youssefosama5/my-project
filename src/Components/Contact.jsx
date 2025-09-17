import "./Contact.css"
import Cinema from "../assets/Cinema.jpg"
export default function Contact() {
    return (
        <>
        
            <div className="Contact" id="contact">
                <h2>Contact Us</h2>
                <div className="Contact-us">
                    <h3>Send Us a Message</h3>
        <p>
          Have a question or feedback? we'd love to hear from you! Please fill
          out the form below.
        </p>
                    <form action="">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Name" id="Name" />
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Email" id="Email" />
                        <label htmlFor="Subject">Subject</label>
                        <input type="text" placeholder="Subject" id="Subject"/>
                        <label htmlFor="Message">Your Message</label>
                        <textarea placeholder="Type your message here..." id="Message" />
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="details">
                     <h3>Our Details</h3>
        <p>
          Reach out to us through our direct contact options or connect with us
          on social media.
        </p>
                    <div className="our-details">
          <h4><i className="fa-solid fa-location-dot"></i> Visit Us</h4>
          <p>Cinema City, 10 Nile Avenue, Zamalek, Cairo, Egypt</p>
        </div>
        <div className="our-details">
          <h4> <i className="fa-solid fa-phone"></i> Call Us</h4>
          <p>(+20)15555555555</p>
        </div>
        <div className="our-details">
          <h4><i className="fa-solid fa-envelope"></i> Email Us</h4>
          <p>cinemacity@gmail.com</p>
        </div>
        <img src={Cinema} alt="The look of cinema" />
                </div>
            </div>
        </>
    )
}