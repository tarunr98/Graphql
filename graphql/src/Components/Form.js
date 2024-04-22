import React, { useState } from 'react'
import { CREATE_CHARITY_MUTATION } from '../GraphQLS/Mutations.js';
import { useMutation } from '@apollo/client';
import './Form.css';

function Form() {
    const [charityName, setCharityName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [createUser, { error }] = useMutation(CREATE_CHARITY_MUTATION);
    const addCharity = () => {
        createUser({
            variables: {
                charityName: charityName,
                phone: phone,
                email: email,
                address: address
            }
        })
        if(error){
            console.log(error);
        }
    }

  return (
    <div class="form-container">
        <div class="form-row">
            <label for="charityName">Charity Name:</label>
            <input type="text" id="charityName" placeholder="Enter charity name" required onChange={(e) => { setCharityName(e.target.value) }} />
        </div>
        <div class="form-row">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" placeholder="Enter phone number" required onChange={(e) => { setPhone(e.target.value) }} />
        </div>
        <div class="form-row">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email address" required onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div class="form-row">
            <label for="address">Address:</label>
            <input type="text" id="address" placeholder="Enter address" required onChange={(e) => { setAddress(e.target.value) }} />
        </div>
        <div class="form-row">
            <button onClick={addCharity}>Create Charity</button>
        </div>
    </div>
  )
}

export default Form
