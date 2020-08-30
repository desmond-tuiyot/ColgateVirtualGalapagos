
import React, { Component } from 'react'
import classes from "./DndLayout.css"
import DndDraggables from "../DndDraggables/DndDraggables"
import DndDroppables from "../DndDroppables/DndDroppables"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import logo from "../../assets/images/homepage/logo.png"

class DndLayout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dnd1: false,  dnd2: false,  dnd3: false,  dnd4: false,  dnd5: false,  dnd6: false,
             dragIndex: 0,
             progressIndex: 0,
             secret: false, secretImage: false,
        }
    }
    render() {
        const {Completed, audioFinished, src, widthRef, volcanoSlide13,} = this.props
        const {dragIndex, progressIndex, secret, secretImage, dnd1, dnd2, dnd3, dnd4, dnd5, dnd6} = this.state
        if (volcanoSlide13) {
            return (
                <DndProvider backend={HTML5Backend}>
                    <div className={classes.slide13flexbox}>
                        <DndDraggables function={() => this.setState({dragIndex: 1})} div={true} Completed={Completed} class={classes.wordBankHeader} secret={secretImage} readyClass={secret? classes.wordBankHeaderready : classes.wordBankHeader} text={"Wordbank"}  />
                        <DndDraggables function={() => this.setState({dragIndex: 1})} div={true} Completed={Completed} class={classes.slide13drag} readyClass={dnd1? classes.invisible: classes.slide13dragready} text={"1.7 Million Years"} />
                        <DndDraggables function={() => this.setState({dragIndex: 2})} div={true} Completed={Completed} class={classes.slide13drag} readyClass={dnd2? classes.invisible: classes.slide13dragready} text={"2.3 Million Years"} />
                        <DndDraggables function={() => this.setState({dragIndex: 3})} div={true} Completed={Completed} class={classes.slide13drag} readyClass={dnd3? classes.invisible: classes.slide13dragready} text={"4 Million Years"} />
                        <DndDraggables function={() => this.setState({dragIndex: 4})} div={true} Completed={Completed} class={classes.slide13drag} readyClass={dnd4? classes.invisible: classes.slide13dragready} text={"3.3 Million Years"} />
                        <DndDraggables function={() => this.setState({dragIndex: 5})} div={true} Completed={Completed} class={classes.slide13drag} readyClass={dnd5? classes.invisible: classes.slide13dragready} text={"700,000 Million Years"} />
                        <DndDraggables function={() => this.setState({dragIndex: 5})} div={true} Completed={Completed} class={classes.slide13drag} readyClass={dnd6? classes.invisible: classes.slide13dragready} text={"700,000 Million Years"} />
                    </div>
                    <div className={classes.Image} style={{backgroundImage: `url(${src})`, width: `${widthRef}px`}}>
                        <img className={secretImage? classes.secretImage : classes.invisible} src={logo} />
                        <DndDroppables dropIndex={6} unlock={() => this.setState({secretImage: true})} progressIndex={progressIndex} dragIndex={dragIndex} div={true} class={secret? classes.slide13infosecret: classes.slide13info} text={secret? "Good job!" : "Drag and drop items from the wordbank onto the map labels!"} />
                        <DndDroppables dropIndex={1} finished={() => {audioFinished(); this.setState({secret: true})}}  progressIndex={progressIndex} dragIndex={dragIndex} unlock={() => this.setState((prevState) => ({dnd1: true, progressIndex: prevState.progressIndex + 1}))} div={true} class={dnd1? classes.slide13drop1done: classes.slide13drop1} text={dnd1? "1.7 Million Years" : ""}/>
                        <DndDroppables dropIndex={2} finished={() => {audioFinished(); this.setState({secret: true})}}  progressIndex={progressIndex} dragIndex={dragIndex} unlock={() => this.setState((prevState) => ({dnd2: true, progressIndex: prevState.progressIndex + 1}))} div={true} class={dnd2? classes.slide13drop2done: classes.slide13drop2} text={dnd2? "2.3 Million Years" : ""}/>
                        <DndDroppables dropIndex={3} finished={() => {audioFinished(); this.setState({secret: true})}}  progressIndex={progressIndex} dragIndex={dragIndex} unlock={() => this.setState((prevState) => ({dnd3: true, progressIndex: prevState.progressIndex + 1}))} div={true} class={dnd3? classes.slide13drop3done: classes.slide13drop3} text={dnd3? "4 Million Years" : ""}/>
                        <DndDroppables dropIndex={4} finished={() => {audioFinished(); this.setState({secret: true})}}  progressIndex={progressIndex} dragIndex={dragIndex} unlock={() => this.setState((prevState) => ({dnd4: true, progressIndex: prevState.progressIndex + 1}))} div={true} class={dnd4? classes.slide13drop4done: classes.slide13drop4} text={dnd4? "3.3 Million Years": ""}/>
                        <DndDroppables dropIndex={5} finished={() => {audioFinished(); this.setState({secret: true})}}  progressIndex={progressIndex} dragIndex={dragIndex} unlock={() => this.setState((prevState) => ({dnd5: true, progressIndex: prevState.progressIndex + 1}))} div={true} class={dnd5? classes.slide13drop5done: classes.slide13drop5} text={dnd5? "700,000 Million Years" : ""}/>
                        <DndDroppables dropIndex={5} finished={() => {audioFinished(); this.setState({secret: true})}}  progressIndex={progressIndex} dragIndex={dragIndex} unlock={() => this.setState((prevState) => ({dnd6: true, progressIndex: prevState.progressIndex + 1}))} div={true} class={dnd6? classes.slide13drop6done: classes.slide13drop6} text={dnd6? "700,000 Million Years" : ""}/>
                    </div>
                </DndProvider>
                )
            }
    }
}

export default DndLayout
