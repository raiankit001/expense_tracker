import React, { useEffect, useState } from 'react'
import { deleteExpense, deleteIncome } from '../services/ApiService'
import deleteBtn from '../assets/deleteBtn.png'
import editBtn   from '../assets/editBtn.png'
import { useNavigate } from 'react-router-dom'

const ListPastTransectionComponent = (props) => {

   

    const [word,setWord] = useState('')
    const [activity,setActivity] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{

        const word = setWord(props.relatedToComponent.toLowerCase().slice(0, -1))

        props.listOf()
        .then((response)=>{
            setActivity(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[handleDeleteCall])        


    function handleDeleteCall(id){
        if(word =='income'){
            deleteIncome(id)
        }
        else{
            deleteExpense(id)
        }
    }

    function handleUpdateCall(id){
        navigate(`/${word}/update/${id}`)
    }

    return (
        <>
            <div className='text-center w-full text-xl p-6 font-semibold'>Past {props.relatedToComponent}</div>
                    {
                        activity.map(activity => 
                            <ul key={activity.id} className='shadow hover:shadow-2xl flex  m-5 text-center'>
                                <li className='p-2'>{activity.date}</li>
                                <li className='p-2 font-semibold'>{activity.title}</li>
                                <li className='p-2'>$ {activity.amount}</li>
                                <li className='p-2'>( {activity.category} )</li>
                                <li className='p-2'>{activity.description.length>25 ? activity.description.trim(25)+"..." : activity.description}</li>
                                <li className='flex '>
                                    <button className='w-10 mx-1' onClick={()=> handleDeleteCall(activity.id)}><img  src={deleteBtn} alt="Delete" /></button>
                                    <button className='w-10 mx-1' onClick={()=> handleUpdateCall(activity.id)}><img src={editBtn}  alt="Edit" /></button>
                                </li>
                            </ul>
                        )
                    }
        </>
    )
}

export default ListPastTransectionComponent