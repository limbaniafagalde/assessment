import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../context/GlobalState";

//Animation Variants
const {motion} = require('framer-motion');

//parent
const rows = {
    hidden: {opacity: 1},
    show : {
        opacity: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }
    }
}

//child
const row = {
    hidden : { opacity: 0, scale: 0.8 },  
    show : { opacity: 1, scale: 1, }        
}



const CrudTable = () => {

    const { teams, setEditData, deleteTeam } =  useStateContext();

    return(
        <>
            <Table>
                <Head>
                    <tr>

                        <th>National Team</th>
                        <th>Head Coach</th>
                        <th>Captain</th>                    
                     
                    </tr>
                </Head>
                <Body
                layout variants= {rows} animate= "show" initial = "hidden" 
                >
                {
                    teams.length === 0 
                    ? <td>No items</td>
                    : teams.map((team, index) => {
                    return <Tr key = {index}
                                layout variants = {row}
                            >
                                <td>{team.country}</td>
                                <td>{team.headCoach}</td>
                                <td>{team.captain}</td>
                                <td>

                                    <NavLink to={"/edit/" + team.id} key = {team.id} >
                                         <button onClick={ () => setEditData(team) }>Edit</button>
                                    </NavLink>

                                    <button onClick={ ()=> deleteTeam(team.id) }>Delete</button>

                                </td>
                            </Tr>
                    })
                }

                </Body>
            </Table>
        </>
    )
}

export default CrudTable;

const Table = styled.table`

  padding: 0 10%;
  margin: auto;
  padding: 0;
  background: white;
  overflow-y: scroll;
  
`;


const Head = styled.thead`

    tr{
        min-height: 8vh;
        align-items: center;
        text-align: left;
    }

    th{        
        padding: 0.5rem;
        text-align: left;
    }
`;


const Body = styled(motion.tbody)`

    tr{
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        min-height: 7vh;
        align-items: center;
        padding: 0.5rem;
        text-align: left;
    }
    td{   
        padding: 0.5rem;
        text-align: left;
    }
`;

const Tr = styled(motion.tr)``;