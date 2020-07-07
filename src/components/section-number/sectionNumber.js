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

export default function SectionNumber(props) {
  const { numberVal, numberVisible } = props
  const [numVisible, setNumVisible] = useState(numberVisible)
  const { selected } = useContext(SelectedContext)
  // const [rightAnswer, setRightAnswer] = useState(false)
  // const [wrongAnswer, setWrongAnswer] = useState(false)
  const [wrongAnswerVal, setWrongAnswerVal] = useState(0)
  const [boxStyle, setBoxStyle] = useState(numberCss)

  function checkAnswer() {
    console.log(numberVal)
    if (selected.selectedNum === numberVal) {
      console.log('you got it right!')
      setBoxStyle(correctCss)
      // setRightAnswer(true)
    } else {
      console.log('you got it wrong')
      setWrongAnswerVal(selected.selectedNum)
      setBoxStyle(wrongCss)
    }
  }

  useEffect(() => {
    if (numVisible && selected.selectedNum === numberVal) {
      // increase font size
    }
  }, [numVisible, selected.selectedNum])

  useEffect(() => {
    if (boxStyle === correctCss) {
      setNumVisible(true)
    }
  }, [boxStyle])

  return (
    <div css={boxStyle} onClick={checkAnswer}>
      {numVisible ? numberVal : boxStyle === wrongCss ? wrongAnswerVal : ' '}
    </div>
  )
}
