import React, {createContext, useContext, useState, useEffect} from "react";

//Create context
const CrudContext = createContext();

//children represents the app.js
export const GlobalState = ( {children} ) =>{

    /*States*/
    const [teams, setTeams] = useState(() => {
        const saveTeams = window.localStorage.getItem("teamsData");
        if(saveTeams) {
            return JSON.parse(saveTeams);
        }else{
            return[]
        }
    });

    const [editData, setEditData] = useState(null);

    const [formData, setFormData] = useState({
        id: null,
        country:"", 
        headCoach:"",
        captain: ""
    });

    /*Use Effects*/
    useEffect(() => {
        window.localStorage.setItem("teamsData", JSON.stringify(teams))
    }, [teams])


    /*Functions*/

    //Insert data
    const addTeam = (team) => {

        setTeams([
            ...teams,
            team //the object from the form
        ])

    }

    //Edit data
    const editTeam = (team) => {
        const newTeams = teams.map((current) => current.id === team.id ? team : current)
        setTeams(newTeams);
        setEditData(null);
        
    }
    
    //Delete data
    const deleteTeam = (id) => {
        const isDelete = window.confirm("Are you sure you want to delete this element?")
        if(isDelete){
            const newTeams = teams.filter((current) => current.id !== id);
            setTeams(newTeams);
        }

    }

    //Reset form
    const resetForm = () =>{
        setFormData({
            id: null,
            country:"", 
            headCoach:"",
            captain: ""
        })
    }

    return(
        <CrudContext.Provider 
        value ={ { 
            teams,
            setTeams,
            editData, 
            setEditData,
            addTeam,
            editTeam,
            deleteTeam,
            formData, 
            setFormData,
            resetForm
            } }>

        {children}


    </CrudContext.Provider>
    )

}





export const useStateContext = () => useContext(CrudContext);   