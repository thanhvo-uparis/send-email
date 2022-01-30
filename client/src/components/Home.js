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
        </div>
    );
}
 
export default Home;