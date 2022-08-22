import { BorderBottom } from '@mui/icons-material'
import autoprefixer from 'autoprefixer'
import React from 'react'
import { Link } from 'react-router-dom'

const ProgressBar = ({id, title, bgcolor,progress,height}) => {
  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 'auto',
    BorderBottom: 1
  }
  
  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
   borderRadius:40,
    textAlign: 'right'
  }
  
  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }
    
return (
  <>
 <Link to={`${id}`}><h4>{title}</h4></Link> 
<div style={Parentdiv}>
  <div title={title} style={Childdiv}>
  
    <span style={progresstext}>{`${progress}%`}</span>
  </div>
</div>
  </>

)

}

export default ProgressBar