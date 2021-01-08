import React, { Component } from 'react'
import FullScreen2 from '../Aboutfiles/FullScreen2'
import Hoverlay from '../Aboutfiles/Hoverlay'
import Shapes from '../Aboutfiles/Shapes'
import Works from '../Aboutfiles/Works'
import Price from '../Aboutfiles/Price'
import Food from '../Aboutfiles/Food'
import Cardes from '../Aboutfiles/Cardes'
import Shadow from '../Aboutfiles/Shadow'


export class About extends Component {
    render() {
        return (
            <div>
                <FullScreen2/>
                <Hoverlay />
                <Shapes />
                <Works />
                <Price />
                <Food />
                <Cardes/>
                <Shadow/>
            </div>
        )
    }
}

export default About
