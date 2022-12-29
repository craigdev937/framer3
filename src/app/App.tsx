import React from "react";
import "./App.css";
import { motion } from "framer-motion";

export const App = (): JSX.Element => {
    const [xValue, setXValue] = React.useState(0);
    const [rotateValue, setRotateValue] = React.useState(0);
    function handleClick() {
        setXValue(Math.random() * 500 - 250);
        setRotateValue(Math.random() * 360);
    };
    return (
        <React.Fragment>
            <motion.main 
                className="square"                
                animate={{
                    x: xValue,
                    rotate: rotateValue,
                }}
                transition={{
                    duration: 2,
                    type: "spring",
                    bounce: 0.6
                }}
                onClick={handleClick}
            />
        </React.Fragment>
    );
};



