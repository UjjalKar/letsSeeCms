import React from "react"
import StackGrid, { transitions } from "react-stack-grid"
import sizeMe from "react-sizeme"
const { scaleDown } = transitions
const Grid = ({ children, className, style }) => (
  <StackGrid
    gutterWidth={10}
    gutterHeight={10}
    style={style}
    columnWidth="33.33%"
    appear={scaleDown.appear}
    appeared={scaleDown.appeared}
    enter={scaleDown.enter}
    entered={scaleDown.entered}
    leaved={scaleDown.leaved}
  >
    {children}
  </StackGrid>
)
export default Grid
