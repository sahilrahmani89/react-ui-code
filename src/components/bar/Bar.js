import React from 'react'
import { barChartData } from '../../mock-data/bar/bardata'
import BarContainer from './BarContainer'
import './bar.css'

const Bar = () => {
  return (
    <div style={{marginTop:'50px'}}>
        <BarContainer data={barChartData}/>
    </div>
  )
}

export default Bar