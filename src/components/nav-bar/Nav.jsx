import React from 'react'
import SignUpModal from '../signup-modal/SignUpModal'
import LoginModal from '../login-modal/LoginModal'

import './Nav.css'

export default () => 
        <nav>
            <h1><i className="fas fa-globe-americas"></i> ONGarniza</h1>

            <div className='notLog'> 
                <ul>
                    <li><SignUpModal/></li>
                    <li><LoginModal/></li>
                </ul>
            </div>

            <div className='logged'>
                <h1>Olá, ONG X</h1>
                <span>Sair</span>
            </div>
        </nav>