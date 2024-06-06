import React, { useEffect, useState } from 'react'
import { getAllStats, getChartStats } from '../services/ApiService'
import Chart from '../components/Chart'




const Dashboard = () => {

  const [stats, setStats] = useState({})
  const [chartStats, setChartStats] = useState({})


  useEffect(() => {
    getAllStats().then((res) => {setStats(res.data)}).catch(error => {console.log(error)})
    getChartStats().then((res) => {setChartStats(res.data)}).catch(error => {console.log(error)})
  }, [])


  return (
    <>
    <div className='mx-10 bg-gray-800 p-5 rounded-lg m-3' >
      <div className='flex justify-between px-10'>
        <div className='text-center  text-2xl font-bold p-4 rounded-md cursor-default shadow-xl'>Total Income : <span className='text-green-500'>$ {stats.income}</span></div>
        <div className='text-center  text-2xl font-bold p-4 rounded-md cursor-default shadow-xl'>Total Expense : <span className='text-red-500'>$ {stats.expense}</span></div>
        <div className='text-center  text-4xl underline decoration-sky-500 underline-offset-8 font-bold p-4 rounded-md cursor-default shadow-xl'>Total Balance : <span className='text-sky-500'>$ {stats.balance}</span></div>
      </div>
    </div>
    <div className='mx-10 bg-gray-800 p-2 rounded-lg m-2' >
      <div className='flex justify-between px-10'>
        <div className='text-center  text-lg font-bold p-4 rounded-md cursor-default shadow-xl'>Minimum Income : <span className='text-green-500'>$ {stats.minIncome}</span></div>
        <div className='text-center  text-lg font-bold p-4 rounded-md cursor-default shadow-xl'>Maximum Income : <span className='text-green-500'>$ {stats.maxIncome}</span></div>
        <div className='text-center  text-lg font-bold p-4 rounded-md cursor-default shadow-xl'>Minimum Expense : <span className='text-red-500'>$ {stats.minExpense}</span></div>
        <div className='text-center  text-lg font-bold p-4 rounded-md cursor-default shadow-xl'>Maximum Expense : <span className='text-red-500'>$ {stats.maxExpense}</span></div>
      </div>
    </div>
    <div className='mx-10 bg-gray-800 p-2 rounded-lg m-2' >
      <div className='text-center px-10'>
        <h2>Income Chart</h2>
        <Chart chartStats={chartStats}/>
      </div>
    </div>
    </>

  )
}

export default Dashboard