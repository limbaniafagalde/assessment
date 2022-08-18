import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiFootball } from "react-icons/bi"
import { useStateContext } from "../../context/GlobalState";

//Adding framer-motion
const {motion} = require('framer-motion');

const CrudForm = () => {

    const { addTeam, formData, setFormData, resetForm, teams } =  useStateContext();


    useEffect(() => {
        
        resetForm();
        
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault(); //no refresh

        if (formData.country !== "" && formData.headCoach !== ""  && formData.captain !== "" ) {

            const validation = teams.find( t => t.country === formData.country);
            if(validation){
                alert("Please add an non existing team")
            }else{

                formData.id = Date.now()
                addTeam(formData) //adding new row
                resetForm()
            }

        } else{
            alert("Please complete all the inputs.");
        }
        
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <AddForm 
                animate= {{opacity: 1, scale: 1}}
                initial= {{opacity: 0, scale: 0.75}}             
                transition= {{duration: 0.5}}
                onSubmit = {handleSubmit}
            >
                <h3><BiFootball className="icon"/> Add a new team!</h3>
                <label htmlFor="country">National Team</label>
                <input type="text" name="country" onChange={handleChange} value={formData.country} />
                <label htmlFor="headCoach">Head Coach</label>
                <input type="text" name="headCoach" onChange={handleChange} value={formData.headCoach} />      
                <label htmlFor="captain">Captain</label>
                <input type="text" name="captain" onChange={handleChange} value={formData.captain} />
                <Button>
                    <input className="button" type="submit" value="Send" />
                </Button>

            </AddForm>        
        </>
        
    )
}

export default CrudForm;


const AddForm = styled(motion.form)`

    h3{
        margin:1rem 0;
        font-size: 1.5rem;
    }

    .icon{
        font-size: 3rem;
    }

    label{
      font-weight: 600;
    }

    input:not(.button) {
      margin-top: 0.5rem;
      margin-bottom: 1.2rem;
      border: 1px solid #a1ac88;
      border-radius: 4px;
      height: 38px;
      line-height: 38px;
      padding-left: 5px;

    }
`;

const Button = styled.div`
//background: white;
padding: 5% 33%;

input{
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px;
    border-radius: 5%;
    background: #464d70;
    color: white;
    transition: all 0.5s ease;
    font-weight: 600;

    &:hover{
        background-color: black;
        color: white;
    }
}
    
`;
