import React from 'react';
import  './Footer.css'

const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
                        <div className="footer-col">
                            <h4>Our Company</h4>
                            <ul>
                                <li><a href="">About Us</a> </li>
                                <li><a href="">Our Story</a> </li>
                                <li><a href="">Our Products</a> </li>
                                <li><a href="">Privacy Policy</a> </li>
                                <li><a href="">Ongoing Affliate Programs</a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Help</h4>
                            <ul> 
                                <li><a href="">Return Policy</a> </li>
                                <li><a href="">FAQ</a> </li>
                                <li><a href="">Shipping</a> </li>
                                <li><a href="">Order Status</a> </li>
                                <li><a href="">Payment GateWays</a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="">Remote Controlled Toy</a> </li>
                                <li><a href="">JhunJhuni</a> </li>
                                <li><a href="">Push Pop Buble</a> </li>
                                <li><a href="">Musical Guiter </a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us Online</h4>
                            <div className="social-links">
                               <a href=""><i class="fab fa-facebook-f"></i></a> 
                               <a href=""><i class="fab fa-twitter"></i></a> 
                               <a href=""><i class="fab fa-instagram"></i></a> 
                               <a href=""><i class="fab fa-linkedin-in"></i></a> 
                                
                            </div>
                        </div>
                   </div>
               </div>
           </footer>

        
        </div>
    );
};

export default Footer;
