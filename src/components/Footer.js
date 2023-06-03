import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className="row primary">
                <div className="column about">
                    <h3>Connect</h3>
                    <p>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>   Sienna Towers, Service Road, Bangalore
                    </p>
                    <div className="social">
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-twitter-square"></i>
                        <i className="fa fa-linkedin-square"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </div>
            
                <div className="column link">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>
            
                <div className="column subscribe">
                    <h3>Newsletter</h3>
                    <div>
                    <input type="email" placeholder="Your email id here" />
                    <button>Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="row copyright">
                <div className="footer-menu">
            
                <a href="">Home</a>
                <a href="">F.A.Q</a>
                <a href="">Cookies Policy</a>
                <a href="">Terms Of Service</a>
                <a href="">Support</a>
            
                </div>
                <p>Copyright &copy; 2022</p>
            </div>
            
        </footer>
    </>
  )
}
