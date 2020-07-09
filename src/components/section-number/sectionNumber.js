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

  &[isselected='true'] {
    font-weight: 900;
    font-size: 1.4em;
    background-color: black;
    color: white;
  }
`

export default function SectionNumber(props) {
  const { numberVal, numberVisible } = props
  const { selected } = useContext(SelectedContext)
  const [currentlySelected, setCurrentlySelected] = useState(false)
  const [numVisible, setNumVisible] = useState(numberVisible)
  const [wrongAnswerVal, setWrongAnswerVal] = useState(0)
  const [wrongAnswerBool, setWrongAnswerBool] = useState(false)
  const [correctAnswerBool, setCorrectAnswerBool] = useState(false)
  const [clickable, setClickable] = useState(true)

  function checkAnswer() {
    if (clickable) {
      if (selected.selectedNum === numberVal) {
        setCorrectAnswerBool(true)
      } else {
        setWrongAnswerVal(selected.selectedNum)
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
      setCurrentlySelected(true)
    } else setCurrentlySelected(false)
  }, [numVisible, selected.selectedNum, numberVal])

  useEffect(() => {
    if (correctAnswerBool) {
      setNumVisible(true)
    }
  }, [correctAnswerBool])

  return (
    <div
      css={numberCss}
      onClick={checkAnswer}
      isselected={currentlySelected.toString()}
      wrong={wrongAnswerBool.toString()}
      correct={correctAnswerBool.toString()}
    >
      {numVisible ? numberVal : wrongAnswerBool ? wrongAnswerVal : ' '}
    </div>
  )
}
