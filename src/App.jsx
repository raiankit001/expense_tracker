// import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import NavbarMain from './components/NavbarMain'
import DataUpdate from './components/DataUpdate'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expense from './pages/Expense'
import { saveIncomeOnServer } from './services/ApiService'

function App() {

  const formatDate = (date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
};

function saveIncome(e) {
  e.preventDefault()

  const income = { title, amount, date, category, description }

  saveIncomeOnServer(income)
      .then((response) => {
          console.log(response.data)
      })
}

  return (

    

    <>
      <div style={{ minHeight: "100vh" }} className='bg-gray-700'>
        <BrowserRouter>
          <NavbarMain />
          <div className='p-3 text-white'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/income" element={<Income formatDate={formatDate} saveIncome={saveIncome}/>} />
            <Route path="/expense" element={<Expense formatDate={formatDate}/>} />
            <Route path="/income/update/:id" element={<DataUpdate update={"Income"} formatDate={formatDate} saveIncome={saveIncome}/>} />
            <Route path="/expense/update/:id" element={<DataUpdate update={"Expense"} formatDate={formatDate}/>} />
          </Routes>
          </div>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
