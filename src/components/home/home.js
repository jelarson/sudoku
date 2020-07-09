import React, { useContext } from 'react'
import { css } from '@emotion/core'
import Timer from 'react-compound-timer'

import { SelectedContext } from '../context/context'
import SectionGrid from '../section-grid/sectionGrid'
import NumberButton from '../number-button/numberButton'

const homeWrapperCss = css`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`
const homeHeaderCss = css`
  width: 100%;
  height: 60px;
  color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 24px;
`

const gameBoardCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const buttonsWrapperCss = css`
  margin-top: 15px;
  display: flex;
`
const timerWrapperCss = css`
  position: absolute;
  top: 30px;
  right: 60px;
`

export default function Home() {
  const { selected } = useContext(SelectedContext)

  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>Sudoku</div>
      <div>Errors: {selected.amountIncorrect}</div>
      <div css={gameBoardCss}>
        <SectionGrid
          numArr={[5, 3, 1, 6, 4, 9, 8, 2, 7]}
          visibleArr={[true, false, false, false, false, true, false, false, false]}
        />
        <SectionGrid
          numArr={[9, 4, 8, 2, 7, 5, 6, 3, 1]}
          visibleArr={[false, false, true, true, false, false, false, false, false]}
        />
        <SectionGrid
          numArr={[6, 7, 2, 8, 3, 1, 5, 4, 9]}
          visibleArr={[false, false, true, true, true, false, false, true, false]}
        />
        <SectionGrid
          numArr={[4, 9, 6, 7, 5, 3, 2, 1, 8]}
          visibleArr={[true, false, false, false, false, false, false, true, true]}
        />
        <SectionGrid
          numArr={[8, 2, 3, 1, 6, 9, 7, 5, 4]}
          visibleArr={[false, true, true, false, true, false, false, false, true]}
        />
        <SectionGrid
          numArr={[1, 5, 7, 2, 8, 4, 3, 9, 6]}
          visibleArr={[false, true, false, false, false, false, true, false, false]}
        />
        <SectionGrid
          numArr={[9, 6, 2, 1, 8, 5, 3, 7, 4]}
          visibleArr={[false, false, true, true, false, true, true, false, true]}
        />
        <SectionGrid
          numArr={[3, 8, 7, 4, 9, 2, 5, 1, 6]}
          visibleArr={[false, false, true, false, true, false, true, false, false]}
        />
        <SectionGrid
          numArr={[4, 1, 5, 7, 6, 3, 9, 2, 8]}
          visibleArr={[false, false, false, false, true, true, false, true, false]}
        />
      </div>
      <div css={buttonsWrapperCss}>
        <NumberButton buttonNum="1" />
        <NumberButton buttonNum="2" />
        <NumberButton buttonNum="3" />
        <NumberButton buttonNum="4" />
        <NumberButton buttonNum="5" />
        <NumberButton buttonNum="6" />
        <NumberButton buttonNum="7" />
        <NumberButton buttonNum="8" />
        <NumberButton buttonNum="9" />
      </div>
      <div css={timerWrapperCss}>
        <Timer formatValue={(value) => `${value < 10 ? `0${value}` : value} units `}>
          <Timer.Hours formatValue={(value) => `${value} hrs. `} />
          <Timer.Minutes formatValue={(value) => `${value} min. `} />
          <Timer.Seconds formatValue={(value) => `${value} s. `} />
        </Timer>
      </div>
    </div>
  )
}
