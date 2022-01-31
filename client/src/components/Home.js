import React, {useState, useEffect} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    const loadData =  async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <p>Welcome to my test2</p>
            <Link to="/addUser">
                <button className='btn btn-addUser'>Add User</button>
            </Link>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/update/${user.id}`}><button className='btn btn-edit'>Edit</button></Link>
                                    <Link to={`/delete/${user.id}`}><button className='btn btn-delete'>Delete</button></Link>
                                    <Link to={`/send/${user.id}`}><button className='btn btn-sendEmail'>Send Email</button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default Home;