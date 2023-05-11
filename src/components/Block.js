import React from 'react'
import { useState } from 'react';

function Block({color}) {

    const [state, setState] = useState(true);

    let styles = {
        backgroundColor: color,
    }

    let blockStyles = {
        border: `${1}px solid ${color}`
    }

  return (
    <div className="block" style={blockStyles} onClick={() => {setState(!state)}}>
        <div className={state? "color" : "color scale"} style={styles}></div>
    </div>
  )
}

export default Block

