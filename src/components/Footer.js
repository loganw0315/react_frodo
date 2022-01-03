import React, { Component } from "react";

export default class Footer extends Component {

    render() {
        return(
           <footer className="footer">
               <footer className="footer-1">
                   <div className="footer-1-left">
                       <h3>Devmountain</h3>
                       Battling bugs and creating engineers since 2012
                   </div>
                   <div className="footer-1-center">
                       <h3>Contact Info</h3>
                       <a href="devmountain email">
                            <img src="(Envelope icon src)" alt="Email icon" />
                           Email Devmountain
                        </a>
                   </div>
                   <div className="footer-1-right">
                       <h3>Follow Us</h3>
                       <div className="follow-us-icons">
                           <a href="(twitter link)">
                                <span className="icon-container">
                                    <img className="icon circle" src="(circle image src)" alt="" />
                                    <img className="twitter-logo" src="(twitter logo src)" alt="" />
                                </span>
                           </a>
                           <a href="(facebook link)">
                                <span className="icon-container">
                                    <img className="icon circle" src="(circle image src)" alt="" />
                                    <img className="facebook-logo" src="(facebook logo src)" alt="" />
                                </span>
                           </a>
                           <a href="(instagram link)">
                                <span className="icon-container">
                                    <img className="icon circle" src="(circle image src)" alt="" />
                                    <img className="instagram-logo" src="(instagram logo src)" alt="" />
                                 </span>
                           </a>
                           <a href="(linkedin link)">
                                <span className="icon-container">
                                    <img className="icon circle" src="(circle image src)" alt="" />
                                    <img className="linkedin-logo" src="(linkedin logo src)" alt="" />
                                </span>
                           </a>
                       </div>
                   </div>
               </footer>
               <footer className="footer-2">
                   <div className="footer-2-link-container">
                       <ul className="footer-2-links">
                           <li>
                               <a href="">Dashboard</a>
                           </li>
                           <li>
                               <a href="">Lectures</a>
                           </li>
                           <li>
                               <a href="">Exercises</a>
                           </li>
                           <li>
                               <a href="">Further Study</a>
                           </li>
                           <li>
                               <a href="">Events</a>
                           </li>
                           <li>
                               <a href="">Lightning Talks</a>
                           </li>
                           <li>
                               <a href="">Announcements</a>
                           </li>
                           <li>
                               <a href="">Resources</a>
                           </li>
                           <li>
                               <a href="">Staff</a>
                           </li>
                           <li>
                               <a href="">Squads</a>
                           </li>
                           <li>
                               <a href="">Advisers</a>
                           </li>
                           <li>
                               <a href="">You</a>
                           </li>
                       </ul>
                   </div>
               </footer>
               <footer className="footer-credits">
                   <div className="footer-credits-container">
                       ❤ Made of love, unicorns, and
                       <a href="(Django-link)">Django</a> 
                       .
                       <b>Engineering:</b>
                       <a href="(staff-link)">Devmountain Education Team</a>
                       .
                       <b>Copyright</b>
                       © 2015-2021 by
                       <a href="(devmountain-link)">Devmountain</a>
                       .
                   </div>
               </footer>
           </footer>
        )
    }
}