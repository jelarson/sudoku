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
  const [numVisible, setNumVisible] = useState(numberVisible)
  const [wrongAnswerVal, setWrongAnswerVal] = useState(0)
  const [boxStyle, setBoxStyle] = useState(numberCss)
  const [clickable, setClickable] = useState(true)

  function checkAnswer() {
    if (clickable) {
      if (selected.selectedNum === numberVal) {
        setBoxStyle(correctCss)
      } else {
        setWrongAnswerVal(selected.selectedNum)
        setBoxStyle(wrongCss)
      }
    }
  }

  useEffect(() => {
    if (boxStyle === correctCss || numVisible) {
      setClickable(false)
    }
  }, [boxStyle, numVisible])

  useEffect(() => {
    if (numVisible && selected.selectedNum === numberVal) {
      setBoxStyle(selectedNumCss)
    } else setBoxStyle(numberCss)
  }, [numVisible, selected.selectedNum, numberVal])

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
