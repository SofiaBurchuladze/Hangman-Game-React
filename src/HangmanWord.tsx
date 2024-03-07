import React from 'react'

type HangManWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export default function HangmanWord({ guessedLetters,wordToGuess }:HangManWordProps ) {

  return (
    <div style={{
        display:'flex',
        gap: '1rem',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace'

    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{
                borderBottom:'.1em solid black',
            }}>
                <span style={{
                    visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
                }} key={index}>{letter}</span>
            </span>
        ))}

    </div>
  )
}
