import React, { useState, useContext, useEffect } from 'react'
import { css } from '@emotion/core'

import { SelectedContext } from '../context/context'

const numberCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
  width: 45px;
  height: 45px;

  &[wrong='true'] {
    color: white;
    background-color: red;
  }

  &[correct='true'] {
    color: green;
    background-color: white;
  }

  &[amISelected='true'] {
    font-weight: 900;
    font-size: 1.4em;
    background-color: black;
    color: white;
  }
`
const correctCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
  width: 45px;
  height: 45px;
  color: green;
`
const wrongCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
  width: 45px;
  height: 45px;
  color: white;
  background-color: red;
`

const selectedNumCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 1px solid;
  width: 45px;
  height: 45px;
  font-weight: 900;
  font-size: 1.4em;
  background-color: black;
  color: white;
`

export default function SectionNumber(props) {
  const { numberVal, numberVisible } = props
  const { selected } = useContext(SelectedContext)
  const [currentlySelected, setCurrentlySelected] = useState(false)
  const [numVisible, setNumVisible] = useState(numberVisible)
  const [wrongAnswerVal, setWrongAnswerVal] = useState(0)
  const [wrongAnswerBool, setWrongAnswerBool] = useState(false)
  const [correctAnswerBool, setCorrectAnswerBool] = useState(false)
  const [boxStyle, setBoxStyle] = useState(numberCss)
  const [clickable, setClickable] = useState(true)

  function checkAnswer() {
    if (clickable) {
      if (selected.selectedNum === numberVal) {
        // setBoxStyle(correctCss)
        setCorrectAnswerBool(true)
      } else {
        setWrongAnswerVal(selected.selectedNum)
        // setBoxStyle(wrongCss)
        setWrongAnswerBool(true)
      }
    }
  }

  useEffect(() => {
    if (correctAnswerBool || numVisible) {
      setClickable(false)
    }
  }, [correctAnswerBool, numVisible])

  useEffect(() => {
    if (numVisible && selected.selectedNum === numberVal) {
      // setBoxStyle(selectedNumCss)
      setCurrentlySelected(true)
    } else setCurrentlySelected(false)
    // } else setBoxStyle(numberCss)
  }, [numVisible, selected.selectedNum, numberVal])

  useEffect(() => {
    if (correctAnswerBool) {
      setNumVisible(true)
    }
  }, [correctAnswerBool])

  // useEffect(() => {
  //   console.log('am I selected? ', currentlySelected)
  // }, [currentlySelected])

  return (
    // <div css={boxStyle} onClick={checkAnswer}>
    <div
      css={numberCss}
      onClick={checkAnswer}
      amISelected={currentlySelected.toString()}
      wrong={wrongAnswerBool.toString()}
      correct={correctAnswerBool.toString()}
    >
      {numVisible ? numberVal : wrongAnswerBool ? wrongAnswerVal : ' '}
    </div>
  )
}
