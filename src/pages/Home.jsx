import logo from '../assets/logo.png'
import add from '../assets/add.png'
import pic1 from '../assets/pic1.png'


const Home = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div>
                    <img src={pic1} className='absolute w-1/6 left-32' alt="" />
                    <img src={add} className='absolute w-1/6 left-96 top-40' alt="" />
                    <img src={logo} className='absolute w-1/6 left-72 bottom-32 -rotate-12 '  alt="" />
                </div>

                <div className='m-10  w-1/2 bg-gray-800 p-5 rounded-lg ' >
                    <div>Introducing the Income and Expense Tracker, a full-stack web application meticulously designed to simplify personal finance management. This application boasts a user-friendly interface crafted with ReactJS and styled using Tailwind CSS, ensuring a seamless and visually appealing user experience. Users can effortlessly navigate through the application thanks to the integration of React Router, which provides smooth transitions between various sections. One of the standout features is the graphical representation of income and expenses, offering users insightful visualizations through charts and graphs to better understand their financial habits. The application also highlights the minimum and maximum income and expense entries, providing a clear snapshot of financial extremes.
                        <br />
                        <br />

                        Furthermore, the application keeps users informed with a comprehensive one-month transaction history, allowing them to track their financial activities in detail. The backend, powered by Spring Boot and JPA, seamlessly manages data storage, retrieval, updates, and deletions in a robust MySQL database. This ensures that all financial records are securely maintained and can be efficiently manipulated as needed. The Income and Expense Tracker is not just a tool for recording financial transactions; it's a comprehensive solution that empowers users to take control of their finances with ease and confidence.</div>
                </div>
            </div>
        </>
    )
}

export default Home