import React, { useEffect, useState } from 'react'
import { getExpenseById, getIncomeById, updateExpense, updateIncome } from '../services/ApiService'
import { useNavigate, useParams } from 'react-router-dom'

const DataUpdate = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState(new Date)
    const [description, setDescription] = useState('')
    const navigate =useNavigate()
    const { id } = useParams();



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


    useEffect(() => {
        if(props.update == 'Income'){
            getIncomeById(id).then((res) => {
                setTitle(res.data.title)
                setAmount(res.data.amount)
                setDate(res.data.date)
                setCategory(res.data.category)
                setDescription(res.data.description)
            })
        }
        else{
            getExpenseById(id).then((res) => {
                setTitle(res.data.title)
                setAmount(res.data.amount)
                setDate(res.data.date)
                setCategory(res.data.category)
                setDescription(res.data.description)
            })
        }

    }, [])


    function handleUpdateCall(e) {
        e.preventDefault();

        const Data = { title, amount, date, category, description }

        if (props.update == 'Income') {
            updateIncome(id, Data)
                .then((response) => {
                    console.log(response.data)
                }
                )
                .catch((e) => console.log(e))
                navigate("/income")
        }
        else {
            updateExpense(id, Data)
                .then((response) => {
                    console.log(response.data)
                }
                )
                .catch((e) => console.log(e))
                navigate("/expense")
        }
    }


    return (
        <>

            <div className=' flex-grow mx-10 rounded-md' style={{ border: "2px solid gray" }} >
                <div className='text-center w-full text-xl pt-6 font-semibold'>Update {props.update}</div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                onClick={handleUpdateCall}
                                className="flex mb-10 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update
                            </button>
                        </div>
                    </form>


                </div>
            </div>

        </>
    )
}

export default DataUpdate