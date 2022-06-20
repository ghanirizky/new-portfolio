import React from 'react'

interface AboveDivProps{
    isBreakPoint: boolean,
    classView: string
}

const AboveDiv = (props: AboveDivProps) => {

const {isBreakPoint, classView} = props
  return (
    <>
        {!isBreakPoint &&  (<div style={{height: "86px"}} id={classView}></div>)}
    </>
  )
}

export default AboveDiv