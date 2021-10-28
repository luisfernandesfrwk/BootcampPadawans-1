import React from 'react'

import './Nav.css'

export default () => 
        <nav>
            <h1><i class="fas fa-globe-americas"></i> ONGarniza</h1>

            <div className='notLog'> 
                <ul>
                    <li> <a href=''>Cadastro ONGs</a> </li>
                    <li> <a href=''>Acesso ONGs</a> </li>
                </ul>
            </div>

            <div className='logged'>
                <h1>Olá, ONG X</h1>
                <span>Sair</span>
            </div>
        </nav>