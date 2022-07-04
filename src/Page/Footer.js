import React from 'react'
import Styles from "../assets/css/Footer.module.css";
import { TiContacts } from "react-icons/ti";
import { FaGlobeAsia, FaPhoneAlt, FaFax,FaEnvelope, } from "react-icons/fa";


const Footer = () => {
  return (
    <section className={Styles.containerBox}>

        <div className={Styles.container}>
        <TiContacts className={Styles.icon}/>
            <span>सम्पर्क विवरण</span>
        </div>

        <div className={Styles.footerBox}>
            <span><b> नेपाल प्रतिलिपि अधिकार रजिष्ट्रारको कार्यालय </b></span>
            <ul>
                <li>नारायणहिटी,काठमाडौं, नेपाल</li>
                <li>फोन नं. : +९७७-१-४५३९३०५, ४५३९३०९, ४५२५४९७</li>
                <li>फ्याक्स नं.: ९७७–१–४४३११४४</li>
                <li>पोष्ट बक्स नं.: ४३०</li>
                <li>ईमेल:info@nepalcopyright.gov.np</li>
                <li>वेव : nepalcopyright.gov.np</li>
            </ul>

            <p className={Styles.notice}>कुनै जिज्ञासा भएमा निम्‍न नम्बरमा सम्पर्क गर्नहुन अनुरोध छ ।</p>
        </div>
        
    </section>
  )
 
}

export default Footer