import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import http from "../http"
import "../css/home.css";

export default function Create() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const submitForm = async () => {
        try {
            const response = await http.post('/users', inputs);
            navigate('/');
        } catch (error) {
            // Handle the error
            console.error('Error submitting the form:', error);
        }
    };


    return (
        <div className="container create">
            <marquee className="breadcrumb mb-4 w-25 " id="marquee">
                Create page
                <svg width="24" height="24" className="ms-5" xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd" clipRule="evenodd">
                    <path
                        d="M9 23h-5.991c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2v-1h-2c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2v-1h-2c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h18.008c.552 0 1 .448 1 1s-.448 1-1 1h-2.001v1h2.001c.552 0 1 .448 1 1s-.448 1-1 1h-2.001v1h2.001c.552 0 1 .448 1 1s-.448 1-1 1h-6.003v-6h-6.014v6zm13.172-9h-20.302l10.124-8.971 10.178 8.971zm-10.169-13s9.046 7.911 11.672 10.244c.413.367.45.999.083 1.412-.367.413-.996.445-1.412.083-2.421-2.105-10.343-9.063-10.343-9.063s-7.899 6.893-10.327 9.051c-.413.367-1.046.329-1.413-.083-.367-.413-.329-1.045.083-1.412 2.626-2.333 11.657-10.232 11.657-10.232zm.01 7c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2.001-.896-2.001-2s.896-2 2.001-2zm7.003-5h2.984v5.128l-2.984-2.59v-2.538z" />
                </svg>
            </marquee>
            <div className="mb-3">
                <label >Name</label>
                <input type="text" className="form-control"
                    name="name"
                    value={inputs.name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label >Email address</label>
                <input type="email" className="form-control"
                    name="email"
                    value={inputs.email || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control"
                    name="password"
                    value={inputs.password || ''}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-info">Submit</button>

        </div>
    )
}