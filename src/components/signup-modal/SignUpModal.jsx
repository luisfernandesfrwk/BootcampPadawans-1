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
                        <form className="form-cadastro">
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Nome da ONG" />
                                </label>
                                <input type="text" placeholder="Nome da ONG" name="nome" required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="CNPJ" />
                                </label>
                                <input type="text" placeholder="CNPJ" name="cnpj" required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Email" />
                                </label>
                                <input type="text" placeholder="Email" name="email" required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Telefone" />
                                </label>
                                <input type="text" placeholder="Telefone" name="telefone" required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Endereço" />
                                </label>
                                <input type="text" placeholder="Endereço" name="endereço" required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Foto" />
                                </label>
                                <label className="foto-label">Insira uma foto da instituição</label>
                                <label htmlFor="foto" className="foto-upload">Escolher Arquivo</label>
                                <input type="file" accept=".jpg, .jpeg, .png" 
                                placeholder="Foto da Instituição" className="foto" id="foto" name="foto" 
                                required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Senha" />
                                </label>
                                <input type="text" placeholder="Senha" name="senha" required/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Confirme a Senha" />
                                </label>
                                <input type="text" placeholder="Confirme a Senha" 
                                name="confirmaSenha" required/>
                            </div>

                            <button className="btn-cadastro" type="submit">Criar Conta</button>
                        </form>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
