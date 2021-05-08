import React, {useRef, useState, useEffect} from 'react';
import * as tfjs from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import * as fingerpose from 'fingerpose';
import {Text, Heading, Button, Image, Stack, Container, Box, VStack, ChakraProvider} from '@chakra-ui/react';
import './app.css';
import '@tensorflow/tfjs-backend-webgl';
import {RiCameraFill, RiCameraOffFill} from "react-icons/ri";
import signs from '../signlang';

export default function App() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    var time = Date.now();

    async function runHandpose() {
        const net = await handpose.load();

        setInterval(() => {
            detect(net);
        }, 10);
    }

    const fingerJoints = {
        thumb:[0,1,2,3,4],
        index:[0,5,6,7,8],
        mid:[0,9,10,11,12],
        ring:[0,13,14,15,16],
        pinky:[0,17,18,19,20]
    };
    
    function drawHand(prediction, context) {
        if(prediction.length > 0){
            prediction.forEach((prediction) =>{
                const landmarks = prediction.landmarks;

                for(let j = 0; j<Object.keys(fingerJoints).length; j++){
                    let finger = Object.keys(fingerJoints)[j];
                    for(let k=0; k<fingerJoints[finger].length -1; k++){
                        const firstJointIndex = fingerJoints[finger][k];
                        const secondJointIndex = fingerJoints[finger][k+1];

                        context.beginPath();
                        context.moveTo(
                            landmarks[firstJointIndex][0],
                            landmarks[firstJointIndex][1]);
                            context.lineTo(
                                landmarks[secondJointIndex][0],
                                landmarks[secondJointIndex][1]
                            );
                        context.strokeStyle = "gold";
                        context.lineWidth = 2;
                        context.stroke();
                    }
                }
    
                for(let i = 0; i<landmarks.length; i++){
                    const x = landmarks[i][0];
    
                    const y = landmarks[i][1];
    
                    context.beginPath();
                    context.arc(x,y, 5, 0, 3*Math.PI);
    
                    context.fillStyle = "navy";
                    context.fill();
                }
            })
        }
    }

    async function detect(net) {
        if(typeof webcamRef.current != "undefined" && webcamRef.current != null && webcamRef.current.video.readyState == 4){
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const hands = await net.estimateHands(video);

            if(hands.length > 0 && (Date.now() - time >= 1500)){
                const GE = new fingerpose.GestureEstimator([
                    signs.aSign, signs.bSign, signs.cSign, signs.dSign, signs.eSign, 
                    signs.fSign, signs.gSign, signs.hSign, signs.iSign, signs.jSign, 
                    signs.kSign, signs.lSign, signs.mSign, signs.nSign, signs.oSign, 
                    signs.pSign, signs.qSign, signs.rSign, signs.sSign, signs.tSign, 
                    signs.uSign, signs.vSign, signs.wSign, signs.xSign, signs.ySign, 
                    signs.zSign
                ]);
                const estimates  = await GE.estimate(hands[0].landmarks, 6.5);

                const gestureConfidence = estimates.gestures.map((p) => p.confidence);
                const chosenGesture = gestureConfidence.indexOf(Math.max.apply(undefined, gestureConfidence));
                if (estimates.gestures[chosenGesture] != null){
                    document.querySelector('#translated').innerText = `${estimates.gestures[chosenGesture].name}`;
                    window.speechSynthesis.cancel();
                    var msg = new SpeechSynthesisUtterance();
                    msg.text = estimates.gestures[chosenGesture].name;
                    window.speechSynthesis.speak(msg);
                }
                time = Date.now();
            }
            const context = canvasRef.current.getContext("2d");
            drawHand(hands, context);
        }
    };

    useEffect(() => {
        runHandpose();
    },[]);

    return (
        <ChakraProvider>
            <Box bgColor="#29ffb0">'
                <Box id="webcam-container">
                    <Webcam id="webcam" ref={webcamRef}/>
                    <div stye={{position: "absolute", marginLeft: "auto", marginRight: "auto", right: "calc(50% - 50px)", bottom: 100, textAlign: "-webkit-center",}}>
                        <Text color="white" id="translated" fontSize="4xl">Gesture</Text>
                    </div>
                </Box>
                <canvas id="gesture-canvas" ref={canvasRef} style={{}}/>
            </Box>
        </ChakraProvider>
    )
}

