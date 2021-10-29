import React, { useState } from "react";

import "./SignUpModal.css";

export default function SignUpModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button id="btnNav" onClick={toggleModal}>Cadastro ONGs</button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Cadastro ONGs</h2>
                        <div className="form-criar-conta">
                            <label>
                                Nome da ONG
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

                            <button className="criar-conta">Criar Evento</button>
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