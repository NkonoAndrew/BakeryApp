import "./ShippingScreen.css"
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../redux/actions/cartActions";

const ShippingScreen = ({history}) => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postalCode}))
        history.push('/payment');
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>

                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                    type="text"
                    id="fullName"
                    placeholder="Enter Full Name"
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    required >

                    </input>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                    type="text"
                    id="address"
                    placeholder="Enter Your Address"
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required >

                    </input>
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input 
                    type="text"
                    id="city"
                    placeholder="City"
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required >

                    </input>
                </div>

                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input 
                    type="text"
                    id="postalCode"
                    placeholder="Enter Postal Code"
                    value={postalCode} 
                    onChange={(e) => setPostalCode(e.target.value)} 
                    required >

                    </input>
                </div>

                <div>
                    <label />
                    <button 
                    className="primary" 
                    type="submit"
                    onClick={submitHandler} 
                    >
                    Continue</button>
                </div>

            </form>
        </div>
    )
}

export default ShippingScreen;
