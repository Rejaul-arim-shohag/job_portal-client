import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
export default function Footer() {
    const quickLink = [
        { title: "Privacy Policy", href: "/utilities/privacy" },
        { title: "Terms & Conditions", href: "/utilities/termsConditions" },
        { title: "Refund Policy", href: "/utilities/refund" },
        { title: "About Us", href: "/features/about" },
        { title: "Contact Us", href: "/contact" }
    ]
    return (
        <div data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >
            <footer className='footerSection'>
                <div className='container'>
                    <div className="d-md-flex flex-column flex-md-row gap-3 justify-content-between d-none" >
                        <div className="quickLink footerCard">
                            <h3 className=''>Quick Link</h3>
                            <ul className='linkList d-flex flex-column gap-4'>
                                {
                                    quickLink.map((item, index) => (
                                        <li key={index} className=""><Link to={item.href}>{item.title}</Link></li>
                                    ))
                                }

                            </ul>

                        </div>
                        <div className="footerCard contactUs ">
                            <h3>Address</h3>
                            <p>Address- Plot# 1671, Nandipara, Trimuhoni Bridge, Rampura-Staff Quarter Rd, Dhaka-1214.</p>
                            <p>WhatsApp- 01774004740</p>
                            <p>Mail- rejaulkarim4740@gmail.com</p>
                        </div>
                        <div className=" footerCard aboutUs">
                            <h3>About Us</h3>

                            <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>


                </div>

                <div className="credit">
                    <p>COPYRIGHT © 2022-2023 - ALL RIGHTS RESERVED. BY KARIM JOB PORTAL</p>
                </div>
            </footer>
        </div>

    )
}
