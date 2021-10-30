import React, { useState } from "react"

import './Events.css'
import eventsList from "../../data/eventsList"

export default () =>{
    const [toogle, setToogle] = React.useState(true);
    const [altura, setAltura] = React.useState('100px');
    
    React.useEffect(() => {
        setAltura((state) => toogle ? '100px': '165px');
    }, [toogle]);

    function getEventsList(){
        return eventsList.map(e =>{
            return(
                <div className="card" style={{height: altura}}>
                    <div className="content">
                        <h3>{e.title}</h3>
                        <span>Dia: {e.start}</span>
                        <span>Hora: {e.hour}</span>
                        <span>Tipo de Doação: {e.donation}</span>
                        <span>Contato: {e.phone}</span>
                    </div>
                    <i class="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i>
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