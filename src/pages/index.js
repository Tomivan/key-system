import React from 'react';
import Navbar from '../components/navbar/navbar.component';
import Main from '../components/main/main.component';
import TrustedConsultant from '../components/trusted-consultant/trusted-consultant.component';
import Offerings from '../components/offerings/offerings.component';
import Represent from '../components/what-we-represent/what-we-represent.component';
import Compliance from '../components/compliance/compliance.component';
import TrustUs from '../components/trust-us/trust-us.component';
import OurProcess from '../components/process/process.component';
import OurPartners from '../components/partners/partners.component';
import Footer from '../components/footer/footer.component';
import GetStarted from '../components/get-started/get-started.component';

const Pages = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <TrustedConsultant />
            <Offerings />
            <Represent />
            <Compliance />
            <TrustUs />
            <OurProcess />
            <OurPartners />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default Pages;