import React from "react";
import Lottie from "lottie-web";
import animation from './loadertry2.json'
import { useEffect } from "react";

const KurenaiLoader = () => {
    const animationContainer = React.createRef();
    useEffect(() => {
        Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation,
        renderer: "svg",
        loop: true,
        autoplay: true,
    })
    }, [])
    
    return (
        <div style={{width: '150px', height: '150px'}} ref={animationContainer}></div>
    )
}


export default KurenaiLoader;