import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./index.css"

function Footer() {
    return(
        <div className="footer-card">
            <div className="footer-items">
            <RiInstagramFill className="footer-icon"/>
            <FaLinkedin className="footer-icon"/>
            <IoIosMail className="footer-icon"/>
            </div>
            <p className="footer-text">Copyright © 2024.  All rights reserved</p>
        </div>
    )
}
export default Footer