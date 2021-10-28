import React from "react"
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'

import './Calendar.css'

export default () =>
    <section>
        <h1>Agenda</h1>

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
                    <li><a href="" id="btnCriar">Criar Evento</a></li>
                    <li><a href="" id="btnCadastradas">ONGs Cadastradas</a></li>
                </ul>
            </div>

        </div>
    </section>
