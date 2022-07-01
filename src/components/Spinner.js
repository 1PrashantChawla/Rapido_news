import React, { Component } from 'react'
import ring from './loading.gif'


export class Spinner extends Component {
    render() {
        return (
            <div >
                <img src={ring}  style={{width:"30px"}} alt="" />
            </div>
        )
    }
}

export default Spinner