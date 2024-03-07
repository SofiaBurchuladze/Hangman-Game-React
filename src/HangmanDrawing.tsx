import React from 'react';

const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: '50px',
        right: '-30px',
    }}
    ></div>
)
const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        position: 'absolute',
        top: '110px',
        right: 0,
        background: 'black',
    }}
    ></div>
)

const RIGHT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '-100px',
        rotate: '-30deg',
        transform: 'left bottom'
    }}
    ></div>
)
const LEFT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '10px',
        rotate: '30deg',
        transform: 'right bottom'
    }}
    ></div>
)

const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }}
    ></div>
)

const LEFT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: 0,
        rotate: '60deg',
        transformOrigin: 'right bottom'
    }}
    ></div>
)


type HangmanDrawingProps = {
    numberOfGuesses: number
}

const BODY_PARTS =[HEAD, BODY, LEFT_ARM, LEFT_LEG, RIGHT_ARM, RIGHT_LEG]
 

export default function HangmanDrawing({ numberOfGuesses }:HangmanDrawingProps) {
  return (
    
    <div style={{
      position: "relative",
    }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
    <div style={{
        height: '50px', 
        width: '10px',
        background: 'black',
        top: 0,
        right: 0,
        position: 'absolute',
      }} />
    <div style={{
        height: '10px', 
        width: '200px',
        background: 'black',
        marginLeft: '100px',
      }} />
      <div style={{
        height: '400px', 
        width: '10px',
        background: 'black',
        marginLeft: '100px',
      }} />
      <div style={{
        height: "10px",
        width: '200px',
        background: 'black'
      }} />

    </div>
  )
}
