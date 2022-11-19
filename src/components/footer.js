import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="first-1">
          <p>
            The centre for distant learning (CDEC), established at the ICT
            Centre, MNIT Jaipur, aims to impart quality education, in the
            easiest manner, with equitable access to learners across the nation
          </p>
          <img src="images/cdec.png" alt="" className="first" />
          <div className="first-2">
            <span>connect with us :</span>
            <div class="images">
              <a href="#">
                <img src="images/INSTAGRAM.png" className="insta" />
              </a>
              <a href="#">
                <img src="images/Vector.png" className="facebook" />
              </a>
              <a href="#">
                <img src="images/Vector(1).png" className="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88787.09781777443!2d75.78996933524299!3d26.857592645057334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66fe2879c7f%3A0xdfc843bf9b6f869a!2sMalaviya%20National%20Institute%20of%20Technology%20Jaipur%20(MNIT)!5e0!3m2!1sen!2sin!4v1668872851497!5m2!1sen!2sin"
            width="300"
            height="300"
            allowfullscreen
            loading="lazy"
            className="embed"
          />
        </div>
        <div>
          <h3>Contact:</h3>
          <div class="grid">
            <img src="images/Vector(4).png" className="list" />
            <div className="list">
              MNIT Prabha Bhawan, Naya Bass, Jhalana Gram, Malviya Nagar,
              Jaipur, Rajasthan 302017
            </div>
            <img src="images/Vector(2).png" className="list" />
            <a href="#" className="mail">
              <div className="list">cdec@mnit.ac.in</div>
            </a>
            <img src="images/Vector(3).png" className="list" />
            <div className="list">TIMINGS : 10:00AM - 06:00PM</div>
          </div>
        </div>
      </div>
      <div className="container-1">
        &#169;Copyright | 2022 CDEC MNIT Jaipur | All Rights Reserved. Privacy
        Policy Terms of Service
      </div>
    </footer>
  );
}
