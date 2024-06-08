import React, { useEffect, useState } from 'react'

const Chart = (props) => {
    const [chartStats, setChartStats] = useState({})
    const [labels, setLabels] = useState([])
    const [datasets, setDatasets] = useState({})

    useEffect(() => {
        setChartStats(props.chartStats)
        setLabels(...labels,chartStats)
    }, [])

    console.log(chartStats.incomeList
    )
    

    
    return (
        <div>Chart
            
        </div>
    )
}

export default Chart