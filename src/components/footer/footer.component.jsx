import React from "react";
import Logo from '../../assets/logo.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Facebook from '../../assets/facebook.svg';
import './footer.component.css';

const Footer = () => {
    return(
        <div className="footer">
            <section className="footer-top">
                <div className="footer-left">
                    <img src={Logo} alt='the official keysytem logo' className="" />
                    <p>2025 KeySystem Technology Limited. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <p><strong>SERVICES</strong></p>
                    <div className="service">
                        <div className="service-left">
                            <p>Core refresh</p>
                            <p>Application management services</p>
                            <p>Evolution & enhancement services</p>
                            <p>Solution Assurance & validation</p>
                            <p>Digital Banking & financial inclusion</p>
                            <p>Online/mobile lending solution</p>
                        </div>
                        <div className="service-right">
                            <p>Staff augmentation solutions</p>
                            <p>Risk management & Internal audit solutions</p>
                            <p>Data Warehouse & Business Intelligence (BI)</p>
                            <p>Enterprise Document Management Solutions</p>
                            <p>KeySystem software testing</p>
                            <p>Cybersecurity Solutions</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="footer-left">
                    <div className="footer-left-top">
                        <p><trong>QUICK LINES</trong></p>
                        <p>About Us</p>
                        <p>Sitemap</p>
                    </div>
                    <div className="footer-left-bottom">
                        <img src={Instagram} alt="instagram logo" className="footer-image" />
                        <img src={Twitter} alt="twitter logo" className="footer-image" />
                        <img src={LinkedIn} alt="linkedin logo" className="footer-image" />
                        <img src={Facebook} alt="facebook logo" className="footer-image" />
                    </div>
                </div>
                <div className="footer-right">
                    <p><strong>Contact</strong></p>
                    <div className="contact-top">
                        <div className="country">
                            <p><strong>Nigeria</strong></p>
                            <p>55G Adebisi Omotola Close,<br />
                               Off Samuel Adedoyin Street,<br />
                               Victoria Island</p>
                        </div>
                        <div className="country">
                            <p><strong>United Kingdom</strong></p>
                            <p>39 Kenyon Lane, Off Moston <br /> 
                               Lane,Moston, Manchester,<br /> 
                               United Kingdom, M40 9JG</p>
                        </div>
                    </div>
                    <div className="contact-middle">
                        <div className="country">
                            <p><strong>United Kingdom</strong></p>
                            <p>Tel: +44 161 948 1444</p>
                        </div>
                        <div className="country">
                            <p><strong>United Arab Emirates</strong></p>
                            <p>Tel: +971 50 423 8817</p>
                        </div>
                        <div className="country">
                            <p><strong>Canada</strong></p>
                            <p> Tel:  +1 647 977 1435 </p>
                        </div>
                    </div>
                    <div className="contact-top">
                        <div className="country">
                            <p><strong>Nigeria</strong></p>
                            <p>Tel:  +234 818 444 1404</p>
                        </div>
                        <div className="country">
                            <p><strong>Email</strong></p>
                            <p>enquiries@keysystemltd.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;