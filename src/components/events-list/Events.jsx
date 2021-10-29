import React from "react"

import './Events.css'
import eventsList from "../../data/eventsList"

export default () =>{
    function getEventsList(){
        return eventsList.map(e =>{
            return(
                <div className="card">
                    <div className="content">
                        <h3>{e.title}</h3>
                        <span>Dia: {e.start}</span>
                        <span>Hora: {e.hour}</span>
                        <span>Tipo de Doação: {e.donation}</span>
                        <span>Contato: {e.phone}</span>
                    </div>
                    <i class="fas fa-sort-down"></i>
                </div>
            )
        })
    }

    return(
        <aside>
            <h1>Próximos Eventos</h1>
            {getEventsList()}
        </aside>
    )
}