import React, { useContext, useEffect, useState } from 'react'
import { css } from '@emotion/core'

import { SelectedContext } from '../context/context'

const buttonCss = css`
  width: 47.5px;
  height: 47.5px;
  background-color: grey;
  outline: none;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`
const selectedButtonCss = css`
  width: 47.5px;
  height: 47.5px;
  background-color: black;
  color: white;
  outline: none;
  border: 1px solid black;
`

export default function NumberButton(props) {
  const { buttonNum } = props
  const { selected, actions } = useContext(SelectedContext)
  const [selectedButton, setSelectedButton] = useState(false)

  useEffect(() => {
    if (String(selected.selectedNum) === buttonNum) {
      setSelectedButton(true)
    } else {
      setSelectedButton(false)
    }
  }, [selected, buttonNum])

  function buttonClick() {
    actions.setSelectedNum(Number(buttonNum))
  }

  return (
    <button type="button" css={selectedButton ? selectedButtonCss : buttonCss} onClick={buttonClick}>
      {buttonNum}
    </button>
  )
}
