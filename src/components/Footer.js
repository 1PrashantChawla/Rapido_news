import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const footerStyle = {
    
      width: "100%",
      backgroundColor: "red",
      color: 'white',
      textAlign: "center",
      position:"fixed",
      zIndex:-1,
left:0,
bottom:0,
right:0
    };
    return (
     
      <div>
          <footer  style={footerStyle}>
  <p>Made By:Prashant Chawla</p>
 
</footer>
      </div>
    )
  }
}

export default Footer