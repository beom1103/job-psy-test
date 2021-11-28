//진행바
import React, {useEffect, useState} from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const ProgressBar = ({count}) => {
  const [bar, setbar] = useState("0")

  useEffect(() => {
    setbar((Math.ceil(count / 28 * 100)) //퍼센트로 나타냄
    )
  }, [count])
  return (
    <>
      
      <Progress
        percent={bar}
        
        theme={{
          error: {
            trailColor: 'pink',
            color: 'red'
          },
          default: {
            trailColor: 'lightblue',
            color: 'blue'
          },
          active: {
            trailColor: 'lightblue',
            color: '#fbc630'
          },
          success: {
            trailColor: 'lime',
            color: 'green'
          }
    
        }}
        />
          
    </>
  )
}

export default ProgressBar
