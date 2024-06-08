import React, { useEffect, useState } from 'react'
import ListIncomeComponent from '../components/ListPastTransectionComponent'
import { getAllIncome ,getAllStats } from '../services/ApiService'





const Income = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState(new Date)
    const [description, setDescription] = useState('')

    const [stats, setStats] = useState({})


    function handleTitleChange(e) {
        setTitle(e.target.value)
    }
    function handleAmountChange(e) {
        setAmount(e.target.value)
    }
    function handleDateChange(e) {
        setDate(e.target.value)
    }
    function handleCategoryChange(e) {
        setCategory(e.target.value)
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function saveIncome(e) {
        e.preventDefault()
        const income = { title, amount, date, category, description }
        saveIncomeOnServer(income)
            .then((response) => {
                console.log(response.data)
            })
      }


    useEffect(() => {
        getAllStats().then((res) => {
            setStats(res.data)
        })
            .catch(error => {
                console.log(error)
            })
    }, [])




    return (
        <div className='mx-10 bg-gray-800 p-5 rounded-lg' >
            <div className='text-center w-full text-2xl font-bold hover:ring ring-offset-0 p-4 rounded-md cursor-default' style={{ boxShadow: '2px 2px 10px black' }}>Total Income :
                <span className='text-green-500'>$ {stats.income}</span>
            </div>


            <div className='flex flex-wrap'>

                <div className='w-1/2 p-1 flex-grow md:m-10 rounded-md shadow-2xl'  >
                    <div className='text-center text-xl pt-6 font-semibold shadow-xl pb-2'>Post new Income</div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        value={title}
                                        onChange={handleTitleChange}
                                        required
                                        className="p-1 focus:outline-none focus:border-sky-500  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-1inset focus:ring-1indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium leading-6 text-white">
                                    Amount ($)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        required
                                        className="p-1 focus:outline-none focus:border-sky-500  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-1inset focus:ring-1indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium leading-6 text-white">
                                    Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={props.formatDate(date)}
                                        onChange={handleDateChange}
                                        required
                                        className="p-1 focus:outline-none focus:border-sky-500  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-1inset focus:ring-1indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        type="textarea"
                                        row="2"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        required
                                        className="p-1 focus:outline-none focus:border-sky-500  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-1inset focus:ring-1indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-white">
                                    Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="category"
                                        name="category"
                                        value={category}
                                        onChange={handleCategoryChange}
                                        className="p-1 focus:outline-none focus:border-sky-500  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-1inset focus:ring-1indigo-600 sm:text-sm sm:leading-6">
                                        <option defaultValue={'other'}>Select The Category</option>
                                        <option value="salary">{"Salary"}</option>
                                        <option value="trading">Trading</option>
                                        <option value="freelancing">Freelancing</option>
                                        <option value="youtube">Youtube</option>
                                        <option value="bank_transfer">Bank Transfer</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={props.saveIncome}
                                    className="flex mb-10 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Save Income
                                </button>
                            </div>
                        </form>


                    </div>
                </div>









                <div className='w-1/2 flex-grow m-10 rounded-md shadow-2xl'  >
                    <div>
                        <ListIncomeComponent 
                            relatedToComponent={"Incomes"}
                            
                            listOf={getAllIncome} />
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Income