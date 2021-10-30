import React, { useState } from "react";

import "./CreateEventModal.css";

import iconeNomeDoEvento from "../../assets/imagens/CriarEvento/name2-icon 2.png"; 
import iconeData from "../../assets/imagens/CriarEvento/data-icon 2.png";
import iconeDoar from "../../assets/imagens/CriarEvento/doar-icon 2.png";
import iconeFone from "../../assets/imagens/CriarEvento/fone-icon 3.png";
import iconeHora from "../../assets/imagens/CriarEvento/Design sem nome 2.png";
import iconeLocal from "../../assets/imagens/CriarEvento/place-icon 2.png";
import iconeEmail from "../../assets/imagens/CriarEvento/email-icon 2.png";
import iconeDescricao from "../../assets/imagens/CriarEvento/name-icon 2.png";
import iconeCnpj from "../../assets/imagens/CriarEvento/cnpj2-icon 4.png";

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
                    <div className="modal-content-evento">
                        <h2>Criar Evento</h2>
                        <div className="form-criar-evento">
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Nome do Evento" />
                                </label>
                                <input type="text" placeholder="Nome do Evento"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeCnpj} alt="CNPJ" />
                                </label>
                                <input type="text" placeholder="CNPJ"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeLocal} alt="Local" className = "local" />
                                </label>
                                <input type="text" placeholder="Local" />
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeHora} alt="horário"/>
                                </label>
                                <input type="text" placeholder="Horário"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeData} alt="data"/>
                                </label>
                                <input type="date" placeholder="Data"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeEmail} alt="Email" />
                                </label>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeFone} alt="Telefone"/>
                                </label>
                                <input type="text" placeholder="Telefone"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeDoar} alt="Doações"/>
                                </label>
                                <input type="text" placeholder="Doações"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeDescricao} alt="Descrição"/>
                                </label>
                                <input type="text" placeholder="Descrição"/>
                            </div>
                    
                        <button className="btn-evento">Fazer Agendamento</button>
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