import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contact-bg-container">
        <div className="contact-container">
          <div className="contact-card">
            <h1>Chandra Mouli Tarigopula</h1>
            <p>Email: tarigopulachandramouli3235@gmail.com</p>
            <p>PhoneNumber: 7997214502</p>
            <p>Upparlapalli, Bathalapalli, Anantapur, Andhra Pradesh</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ContactUs;
