import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import CriarEventos from '../criar-eventos/CriarEventos';

import './Calendar.css'

    function Calendar(){
       const [modalIsOpen, setIsOpen] = useState(true);
       return(

        <section>
        <h1>Agenda</h1>
        <CriarEventos modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/> 

        <div className="content">
            <div id="calendar">
                <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                height="65vh"
                locale="pt-BR"
                />
            </div>

            <div className="options">
                <ul>
                    <li><a onClick={()=>{setIsOpen(true)}} href="" id="btnCriar">Criar Evento</a></li>
                    {console.log(modalIsOpen)}
                    <li><a href="" id="btnCadastradas">ONGs Cadastradas</a></li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Calendar;