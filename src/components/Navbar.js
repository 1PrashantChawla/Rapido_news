import React, { Component } from 'react'


import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
    constructor() {
        // Constructoe tab run karta hai jab class ka koi object banta hai
        super();
    
        this.state = 
        {
            text:"Rapid News"
        }
    
    
    
        }
      
    render() {
        return (
            <div>
                <nav className="navbar-dark navbar navbar-expand-lg bg-dark   ">
                    <div className="container-fluid">
                    <img  src='newsTitleLogo.png' width={50} className="mx-2 border rounded"   to="/Home" />
                          <Link className="navbar-brand"   to="/">Rapid News </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"     to="/"> Home </Link></li>
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/Business">Business  </Link></li> 
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/Entertainment">Entertainment  </Link></li> 
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/General">General  </Link></li> 
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/Health">Health  </Link></li> 
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/Science">Science  </Link></li> 
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/Sports">Sports  </Link></li> 
                                <li className="nav-item">  <Link className="nav-link " aria-current="page"   to="/Technology">Technology  </Link></li> 
                               
                                
                            </ul>
                          
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    }
}
// HUME ROUTE KARTE SAMAY YE ERROR AAYA KI JAB HUM EKK PAGE SE DUSRE PAGE PE JAA RAHE THE TO RELOAD KARNA PAD RHA THA USS CATEGORY KE PAGE KO ACCESS KARNE KE LIE 
// LINK TO  ISTEMAL KARNE SE PAGE RELOAD NHI HOTA ISLIE YE ERRIR AA RHA THA ISKO SOLVE KARNE KE LIE WE DID BELOW MENTIONED THING
// JAB COMPONENT ALREADY MOUNTED HAI TO HUME USKO REMOUNT KARNA HAI TO EK KEY DDENI PADEGI TAAKI USKO LAGE KI NEW COMPONENT BHEJA JAA RA HAI