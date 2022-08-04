import React, { Component } from 'react'
import ring from './loading.gif'


export class Spinner extends Component {
    render() {
        return (
         

            <div className="p-5 text-center " style={{ height: "40px" }}>
                <img src={ring}  style={{width:"30px"}} alt="" />
            </div>
           
        )
    }
}

export default Spinner