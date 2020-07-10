import React, { Component } from 'react'
import { Back, Next, TerrainMap, magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, TerrainOval, TerrainOvalCorrect, TerrainOvalWrong, XImage, DnDAnswers, DnD} from "../../assets/VolcanoModule/Images"
import { introVideo, plateTectonics, mantlePlumes} from "../../assets/VolcanoModule/Videos/index"
import classes from "./SlideContent.css"
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"

class SlideContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        const {slide, videoFinished} = this.props
        if (slide == 0) {
            return (
                <video controls controlsList="nodownload" className={classes.mainContent} onEnded={() => videoFinished()}>
                    <source src={introVideo} type="video/mp4"/>
                </video>
            ) 
        }
        else if (slide == 1) {
            const Vista = "https://virtualgalapagos.colgate.edu/Volcano_360(1)/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 2) {
            const Vista = "https://virtualgalapagos.colgate.edu/Volcano_360(2)/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 3) {
            const Vista = "https://virtualgalapagos.colgate.edu/Volcano_360(3)/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 4) {
            const Vista = "https://virtualgalapagos.colgate.edu/Volcano_360(4)/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 5) {
            const Vista = "https://virtualgalapagos.colgate.edu/Volcano_360(5)/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 6) {
            return (
                <img className={classes.mainContent} src={TerrainMap} />
            )
        }
    }
}

export default SlideContent
