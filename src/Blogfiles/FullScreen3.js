import React, { Component } from 'react'
import '../Style/FullScreen3.css'
import {Link} from "react-router-dom";


export class FullScreen3 extends Component {
    render() {
        return(
            <div className="fullscreen3">
            <div className="sson">
                <div className="os">
                    <h1>Blog</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Blog</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default FullScreen3
