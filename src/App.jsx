import React from "react"

import Nav from "./components/nav-bar/Nav.jsx"
import Events from "./components/events-list/Events.jsx"
import Calendar from "./components/calendar/Calendar.jsx"

import './App.css'

export default () =>
    <>
    <Nav></Nav>
    <div className='content'>
        <Events></Events>
        <Calendar></Calendar>
    </div>
    </>