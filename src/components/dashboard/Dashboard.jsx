import React, { useState } from 'react'
import style from './style.module.css'

import { data as DATA } from "../../data"

import { Card } from 'react-bootstrap';

const Dashboard = () => {


    const [agents, setAgents] = useState([])



    let res = DATA.results

    //remove id 000 agent 
    let filteredData = res.filter(item =>
        item.name != "cyr-customer-ossec.local" && item.id != "000"
    )


    //Total agents count
    let Total_Agents = filteredData.length


    //Disconnected Agents
    let Disconnected_Agents = filteredData.filter(el => el.status == "disconnected").length


    //Active Agents
    let Active_Agents = filteredData.filter(el => el.status == "active").length


    //Pending agents
    let Pending_Agents = filteredData.filter(el => el.status == "pending").length


    //Never connected agents
    let Never_Connected_Agents = filteredData.filter(el => el.status == "never_connected").length


    let agentsData = [{
        name: "Total agents",
        count: Total_Agents,
        color: "rgb(0, 107, 180)",
    },
    {
        name: "Active agents",
        count: Active_Agents,
        color: "rgb(0, 120, 113)",
    },
    {
        name: "Disconnected Agents",
        count: Disconnected_Agents,
        color: "rgb(189, 39, 30)",
    },
    {
        name: "Pending agents",
        count: Pending_Agents,
        color: "rgb(254, 197, 20)",
    },
    {
        name: "Never connected agents",
        count: Never_Connected_Agents,
        color: "rgb(100, 106, 119)",
    },
    ]


    return (
        <div className={style.centered}>
            <p>Hello Admin,</p>
            <p>View the staus of your agents and evolution of their latest alerts</p>
            <h1 className=''>Installed Agents bu their Status</h1>


            <div className={style.container}>

                {agentsData?.map((agent, i) => (
                    <Card className={style.card} style={{ width: '16rem' }} key={i}>
                        <div className={style.card_container} >
                            <h1 className={style.title}>{agent.name}</h1>
                            <p className={style.count} style={{ color: agent.color }}>
                                {agent.count}
                            </p>

                        </div>
                    </Card>
                ))}
            </div>

        </div>

    )
}

export default Dashboard