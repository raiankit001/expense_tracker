import React, { useEffect, useState } from 'react'

const Chart = (props) => {
    const [chartStats, setChartStats] = useState({})

    useEffect(()=>{
        setChartStats(props.chartStats)
    },[])

    const chartData={
        labels:[
            
        ]
    }

  return (
    <div>Chart</div>
  )
}

export default Chart