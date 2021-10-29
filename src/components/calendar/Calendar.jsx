import React from "react"
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
<<<<<<< HEAD
import CreateEventModal from "../create-event-modal/CreateEventModal.jsx"
=======
>>>>>>> a9c3d75aab1850a543cd3744950bcefcad9422d2

import './Calendar.css'

export default () =>
    <section>
<<<<<<< HEAD
=======
        <h1>Agenda</h1>

>>>>>>> a9c3d75aab1850a543cd3744950bcefcad9422d2
        <div className="content">
            <div id="calendar">
                <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
<<<<<<< HEAD
                contentHeight="65vh"
=======
                height="65vh"
>>>>>>> a9c3d75aab1850a543cd3744950bcefcad9422d2
                locale="pt-BR"
                />
            </div>

            <div className="options">
                <ul>
<<<<<<< HEAD
                    <li><CreateEventModal/></li>
                    <li><button id="btnONG">ONGs Cadastradas</button></li>
=======
                    <li><a href="" id="btnCriar">Criar Evento</a></li>
                    <li><a href="" id="btnCadastradas">ONGs Cadastradas</a></li>
>>>>>>> a9c3d75aab1850a543cd3744950bcefcad9422d2
                </ul>
            </div>

        </div>
    </section>
