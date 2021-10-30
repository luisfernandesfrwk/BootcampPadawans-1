import React, { useState } from "react";
import iconeNomeDoEvento from "../../assets/imagens/CriarEvento/name2-icon 2.png"; 

import "./LoginModal.css";

export default function LoginModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button id="btnNav" onClick={toggleModal}>Acesso ONGs</button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-login">
                        <h2>Login</h2>
                        
                        <div className="form-login">
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="CNPJ" />
                                </label>
                                <input type="text" placeholder="CNPJ"/>
                            </div>
                            
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Senha" />
                                </label>
                                <input type="text" placeholder="Senha"/>
                            </div>

                            <button className="btn-login">Entrar</button>

                            <div className="login-options">
                                <button>Esqueci Minha Senha</button>
                                <button>Cadastre-Se</button>
                            </div>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}