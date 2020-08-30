import React, { Component } from 'react'
import classes from "./test.css"
import Arrow from "../../assets/VolcanoModule/Images/TestArrow.png"
import TerrainMap from "../../assets/VolcanoModule/Images/TerrainMap-Labelled.png"
import AudioPlayer from 'react-h5-audio-player'
import 'style-loader!css-loader!react-h5-audio-player/lib/styles.css'
import Back from "../../assets/VolcanoModule/Images/backArrow.png"
import Next from "../../assets/VolcanoModule/Images/nextArrow.png"
import sampleaudio from "../../assets/VolcanoModule/Audio/Volcano_Compare360.mp3"

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             footerIndex: 0,
             flippy: false,
             opacityIndex: 1,
        }
    }
revealFooter() {
    if (this.state.footerIndex < 80 && this.state.flippy) {
        this.setState((prevState) => ({footerIndex: prevState.footerIndex + 1, opacityIndex: prevState.opacityIndex - 0.02}));
        setTimeout(() => this.revealFooter(), 1); console.log("goingdown")
    }
    else if (this.state.footerIndex > 0 && this.state.flippy == false) {
        this.setState((prevState) => ({footerIndex: prevState.footerIndex - 1, opacityIndex: prevState.opacityIndex + 0.02}));
        setTimeout(() => this.revealFooter(), 1); console.log("goingup")
    }
}
flipper() {
    if (this.state.flippy) {
        this.setState({flippy: false})
    }
    else {
        this.setState({flippy: true})
    }
}
    render() {
        const {footerIndex, opacityIndex} = this.state
        return (
            <div className={classes.test1}>
                <div className={classes.test9}> 
                    <img className={classes.test8} src={TerrainMap} /> 
                </div> 
                <div style={{width: "100%", height: "10px"}} /> {/* this is just used as a buffer */}
                <div className={classes.test2} style={{marginBottom: `${-footerIndex}px`}}>
                    <button style={{opacity: `${1 - opacityIndex}`}} className={classes.test13}>Back</button>
                    <button style={{opacity: `${1 - opacityIndex}`}} className={classes.test12}>Next</button>
                    <div className={classes.test3} onClick={() => {this.flipper(); setTimeout(() => this.revealFooter(), 1)}}>
                        Toggle Footer
                        <img className={classes.test4} src={Arrow} style={{opacity: `${1 - opacityIndex}`}} />
                        <img className={classes.test5} src={Arrow} style={{opacity: `${1 - opacityIndex}`}} />
                        <img className={classes.test6} src={Arrow} style={{opacity: `${opacityIndex}`}} />
                        <img className={classes.test7} src={Arrow} style={{opacity: `${opacityIndex}`}} />
                    </div>
                    <audio controls controlsList="nodownload" className={classes.test14} src={sampleaudio} />
                    <img className={classes.test10} src={Back} />
                    <img className={classes.test11} src={Next} />
                </div>
            </div>
        )
    }
}

export default Test
