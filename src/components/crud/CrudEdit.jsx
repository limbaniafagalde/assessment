import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { BiFootball } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/GlobalState";

//Adding framer-motion
const {motion} = require('framer-motion');


const CrudEdit = () => {

    const { editData, editTeam, formData, setFormData, resetForm } =  useStateContext();

    let navigate = useNavigate();

    useEffect(() => {
        if(editData !== null){
            setFormData(editData);
        }else{
            resetForm();
        }
    }, [editData])



    const handleSubmit = (e) => {
        e.preventDefault(); //no refresh

        if (formData.country !== "" && formData.headCoach !== ""  && formData.captain !== "" ) {
            
            if(editData !== null){
                editTeam(formData);
                resetForm();
                navigate("/");
                
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
            <EditForm 
                animate= {{opacity: 1, scale: 1}}
                initial= {{opacity: 0, scale: 0.75}}             
                transition= {{duration: 0.5}}
                onSubmit = {handleSubmit}
            >

                <h3><BiFootball className="icon"/> Edit the team!</h3>
    
                <label htmlFor="country">National Team</label>
                <input type="text" name="country" onChange={ handleChange } value={formData.country} />
    
                <label htmlFor="headCoach">Head Coach</label>
                <input type="text" name="headCoach" onChange={ handleChange } value={formData.headCoach} />      
    
                <label htmlFor="captain">Captain</label>
                <input type="text" name="captain" onChange={ handleChange } value={formData.captain} />
    
                <Button>
    
                    <Link to="/">
                         <input className="cancel" type="button" value="Cancel" />
                    </Link>

                    <input className="button" type="submit" value="Update" />

                </Button>

            </EditForm>        
        </>
        
    )
}

export default CrudEdit;


const EditForm = styled(motion.form)`

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

    input:not(.button, .cancel) {
      margin-top: 0.5rem;
      margin-bottom: 1.2rem;
      border: 1px solid #a1ac88;
      border-radius: 4px;
      height: 38px;
      line-height: 38px;
      padding-left: 5px;
      font-size: 1rem;
    
    }
`;

const Button = styled.div`
    display: flex;
    //background: white;
    padding: 1rem 0rem;

    input, Link{
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 1rem;
        margin: 0 2.5rem;
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

    
    .cancel{
        background: white;
        color:black;
        border: 1px solid black;
    }
    
`;
