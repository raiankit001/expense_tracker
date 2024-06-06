import axios from "axios";

const INCOME_REST_API_BASE_URL = "http://localhost:8080/api/income/"



export const getAllIncome = () => axios.get(INCOME_REST_API_BASE_URL);

export const getIncomeById = (id) => axios.get(INCOME_REST_API_BASE_URL+id);

export const saveIncomeOnServer = (income) => axios.post(INCOME_REST_API_BASE_URL,income);

export const updateIncome = (id,income) => axios.put(INCOME_REST_API_BASE_URL+id,income);

export const deleteIncome = (id) => axios.delete(INCOME_REST_API_BASE_URL+id);








const EXPENSE_REST_API_BASE_URL = "http://localhost:8080/api/expense/"

export const getAllExpense = () => axios.get(EXPENSE_REST_API_BASE_URL);

export const getExpenseById = (id) => axios.get(EXPENSE_REST_API_BASE_URL+id);

export const saveExpenseOnServer = (expense) => axios.post(EXPENSE_REST_API_BASE_URL,expense);

export const updateExpense = (id,expense) => axios.put(EXPENSE_REST_API_BASE_URL+id,expense);

export const deleteExpense = (id) => axios.delete(EXPENSE_REST_API_BASE_URL+id);











const STATS_REST_API_BASE_URL = "http://localhost:8080/api/stats/"


export const getAllStats = () => axios.get(STATS_REST_API_BASE_URL);

export const getChartStats = () => axios.get(STATS_REST_API_BASE_URL+"chart");