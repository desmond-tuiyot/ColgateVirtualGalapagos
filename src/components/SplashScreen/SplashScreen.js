import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import SplashVideo from "../../assets/videos/homepage/splashvideo.mp4"
import classes from "./SplashScreen.css"


const splashScreen = () => {
	return (
		<Fragment>
			<video autoPlay muted loop className={classes.SplashScreen}>
				<source src={SplashVideo} type="video/mp4"/>
			</video>
			<Link to="/home">
				<div className={classes.Arrow}>
					<div className={classes.ArrowTop}></div>
					<div className={classes.ArrowBottom}></div>
				</div>
			</Link>
		</Fragment>
	)
}

export default splashScreen