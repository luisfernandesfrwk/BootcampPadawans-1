import React, { useState } from "react";

import "./CreateEventModal.css";
import iconeNomeDoEvento from "../../assets/imagens/CriarEvento/name2-icon 1.png" 

export default function CreateEventModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button onClick={toggleModal} id="btnCriar">Criar Evento</button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Criar Evento</h2>
                        <div className="form-criar-evento">
                        <label>
                            <img src={iconeNomeDoEvento} alt="Nome do Evento" />
                        </label>
                        <input type="text" />
                        <label>
                            CNPJ
                        </label>
                        <input type="text" />
                        <label>
                            EMAIL
                        </label>
                        <input type="text" />
                        <label>
                            NUMERO
                        </label>
                        <input type="text" />
                        <label>
                            ENDEREÇO
                        </label>
                        <input type="text" />
                        <label>
                            FOTO
                        </label>
                        <input type="text" />
                        <label>
                            SENHA
                        </label>
                        <input type="text" />
                        <label>
                            CONFIRME SENHA
                        </label>
                        <input type="text" />

                        <button className="criar-conta">Criar Conta</button>
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