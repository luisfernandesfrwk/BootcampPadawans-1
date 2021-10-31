import React, { useState, useEffect} from "react"

import './Events.css'
import eventsList from "../../data/eventsList"

export default () =>{
    const [toogle, setToogle] = useState(true);
    const [altura, setAltura] = useState('100px');
    
    useEffect(() => {
        setAltura((state) => toogle ? '100px': '165px');
    }, [toogle]);

    function getEventsList(){
        return eventsList.map(e =>{
            return(
                <div key={e.id} className="card" style={{height: altura}}>
                    <div className="content">
                        <h3>{e.title}</h3>
                        <span>Dia: {e.start}</span>
                        <span>Hora: {e.hour}</span>
                        <span>Tipo de Doação: {e.donation}</span>
                        <span>Contato: {e.phone}</span>
                    </div>
                    <i className="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i>
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