// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// // import { ADD_CHILD } from "../../../utils/mutations.js";
// import Auth from '../../../utils/auth';

function ChildSignup() {
    // const [formState, setFormState] = useState({
    //     name: '',
    // });
    // // const [addChild, { error, data }] = useMutation(ADD_CHILD);

    // const parentId = Auth.getUser().id; // Get the parent ID from the logged-in user

    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     // try {
    //     //     const { data } = await addChild({
    //     //         variables: {
    //     //             parentId: parentId, // Pass the parent ID as a variable
    //     //             name: formState.name,
    //     //         },
    //     //     });
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    // };


    return (
        <div className="Signup-body backgroundY" >

            <div className="row">

                <img className="imgBook" src='./Photos/Fox.png' alt="A Fox" />
                <div >

                    <h1 className="parTitle Mali">Now for the fun part!</h1>
                    <div className='col '>

                        <form className='col form'>

                            <label className="label" >Your Name!</label>
                            <input
                                className="childform-input"
                                name="name"
                            // value={formState.name}
                            // onChange={handleChange}
                            />

                        </form>
                        {/* <button className="BtnRed" onClick={handleFormSubmit}>All Done!</button> */}
                        <button className="BtnRed" >All Done!</button>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default ChildSignup;