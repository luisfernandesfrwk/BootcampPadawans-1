import React, { useState } from "react";
import iconeNomeDoEvento from "../../assets/imagens/CriarEvento/name2-icon 2.png"; 

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
                    <div className="modal-content-cadastro">
                        <h2>Cadastro ONGs</h2>
                        <div className="form-cadastro">
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Nome da ONG" />
                                </label>
                                <input type="text" placeholder="Nome da ONG"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="CNPJ" />
                                </label>
                                <input type="text" placeholder="CNPJ"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Email" />
                                </label>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Numero" />
                                </label>
                                <input type="text" placeholder="Numero"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Endereço" />
                                </label>
                                <input type="text" placeholder="Endereço"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Foto" />
                                </label>
                                <label htmlFor="" className="foto-label">Insira uma foto da instituição</label>
                                <label htmlFor="foto" className="foto-upload">Escolher Arquivo</label>
                                <input type="file" accept=".jpg, .jpeg, .png" 
                                placeholder="Foto da Instituição" className="foto" id="foto"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Senha" />
                                </label>
                                <input type="text" placeholder="Senha"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Confirme a Senha" />
                                </label>
                                <input type="text" placeholder="Confirme a Senha"/>
                            </div>

                            <button className="btn-cadastro">Criar Conta</button>
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
