import React, { useState, useContext } from 'react'
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

export default function SectionNumber(props) {
  const { numberVal, numberVisible } = props
  const [numVisible, setNumVisible] = useState(numberVisible)
  const { selected } = useContext(SelectedContext)

  function checkAnswer() {
    console.log(numberVal)
    if (selected.selectedNum === numberVal) {
      console.log('you got it right!')
      setNumVisible(true)
    } else {
      console.log('you got it wrong')
    }
  }

  return (
    <div css={numberCss} onClick={checkAnswer}>
      {numVisible ? numberVal : ' '}
    </div>
  )
}
