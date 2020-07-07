import React from 'react'
import { css } from '@emotion/core'

import SectionNumber from '../section-number/sectionNumber'

const gridWrapperCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: black 1px solid;
`

export default function SectionGrid(props) {
  const { numArr, visibleArr } = props
  return (
    <div css={gridWrapperCss}>
      <SectionNumber numberVal={numArr[0]} numberVisible={visibleArr[0]} />
      <SectionNumber numberVal={numArr[1]} numberVisible={visibleArr[1]} />
      <SectionNumber numberVal={numArr[2]} numberVisible={visibleArr[2]} />
      <SectionNumber numberVal={numArr[3]} numberVisible={visibleArr[3]} />
      <SectionNumber numberVal={numArr[4]} numberVisible={visibleArr[4]} />
      <SectionNumber numberVal={numArr[5]} numberVisible={visibleArr[5]} />
      <SectionNumber numberVal={numArr[6]} numberVisible={visibleArr[6]} />
      <SectionNumber numberVal={numArr[7]} numberVisible={visibleArr[7]} />
      <SectionNumber numberVal={numArr[8]} numberVisible={visibleArr[8]} />
    </div>
  )
}
