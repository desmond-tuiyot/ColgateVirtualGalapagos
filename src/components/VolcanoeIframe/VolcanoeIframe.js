import React, {Fragment} from 'react'
import Iframe from "react-iframe"
import classes from "./VolcanoeIframe.css"

function VolcanoeIframe(props) {
    if (props.splitScreen) {
        return (
            <Fragment>
                <div style={{position: "absolute", height: "100%", width: "50%", left: "0"}}>
                    <Iframe position="absolute" width="100%" height="100%" src={props.src1} />
                </div>
                <div style={{position: "absolute", height: "100%", width: "50%", right: "0"}}>
                    <Iframe position="absolute" width="100%" height="100%" src={props.src2} />
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <Iframe position="absolute" width="100%" height="100%" className={classes.Iframe} src={props.src} />
        )
    }
}
export default VolcanoeIframe
