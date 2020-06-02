import React, { Component } from 'react'
import { Image1, magnifyingGlass, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, } from "../../assets/VolcanoModule/Images"
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"
import classes from "./VolcanoModule.css"
import logo from "../../assets/images/homepage/logo.png"

class VolcanoeModule extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slideIndex: 0,
             revealHidden: {visibility: "hidden"},
             progressIndex: 0,
             completed: {visibility: "hidden"},
             notCompleted: {visibility: "visible"},
        }
    }

nextSlide() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex +1}
    })
}
prevSlide()  {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex -1}
    })
}
optionalSlide() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex +50}
    })
}
prevoptionalSlide() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex -50}
    })
}
renderHidden() {
    this.setState({revealHidden: {visibility: "visible"}})
}
hideHidden() {
    this.setState({revealHidden: {visibility: "hidden"}})
}
updateProgress() {
    this.setState({progressIndex: this.state.slideIndex + 2})
}
backTrack() {
    if (this.state.progressIndex > this.state.slideIndex) {
       this.setState({completed: {visibility: "visible"}, notCompleted: {visibility: "hidden"}})
    }
    else if (this.state.slideIndex >= this.state.progressIndex) {
        this.setState({completed: {visibility: "hidden"}, notCompleted: {visibility: "visible"}})
    }
}
forwardTrack() {
    if (this.state.progressIndex - 2 > this.state.slideIndex) {
        this.setState({completed: {visibility: "visible"}, notCompleted: {visibility: "hidden"}})
     }
     else if (this.state.slideIndex == this.state.progressIndex - 2) {
         this.setState({completed: {visibility: "hidden"}, notCompleted: {visibility: "visible"}})
     }
}

    render() {
        const {slideIndex, hidden, completed, notCompleted} = this.state
        if (slideIndex == 0) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "auto", width: "70%"}} src={logo} />
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide()}}>Enter Volcano Module</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); this.forwardTrack()}}>Enter Volcano Module :)</button>
                </div>
            )
        }
        else if (slideIndex == 1) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={Vista1} />
                    <button className={classes.buttonClassback} onClick={() => {this.prevSlide(); this.backTrack()}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide()}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); this.forwardTrack()}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 2) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={Image1} />
                    <img style={{position: "absolute", height: "auto", width: "5%", zIndex: "1", left: "0", top: "0"}} src={magnifyingGlass}
                    onClick={() => this.optionalSlide()}/>
                    <button className={classes.buttonClassback} onClick={() => {this.prevSlide(); this.backTrack()}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide()}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 52) {
            const splitImage = "https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=70e85972-9c07-11ea-a7cb-0edaf8f81e27"
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={splitImage} />
                    <button className={classes.buttonClassback} onClick={() => this.prevoptionalSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 3) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={Vista1} />
                    <button className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                    <button className={classes.buttonClassnext} onClick={() => {this.nextSlide(); this.hideHidden(); setTimeout(() => this.renderHidden(), 3000)}}>Next</button>
                </div>
            )
        }
        else if (slideIndex == 4) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={Image1} />
                    <img className={classes.temporaryclass} src={magnifyingGlass} src={magnifyingGlass}
                    style={hidden} onClick={() => this.optionalSlide()}/>
                    <button className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                    <button className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                </div>
            )
        }
        else if (slideIndex == 5) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={Image1} />
                    <img className={classes.temporaryclass} src={magnifyingGlass} src={magnifyingGlass}
                    style={hidden} onClick={() => this.optionalSlide()}/>
                    <button className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                    <button className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                </div>
            )
        }
    }
}

export default VolcanoeModule