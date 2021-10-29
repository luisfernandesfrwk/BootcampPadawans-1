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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ratione fugit reiciendis deserunt recusandae sed odit tempora numquam
                            repellat sapiente minus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ratione fugit reiciendis deserunt recusandae sed odit tempora numquam
                            repellat sapiente minus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ratione fugit reiciendis deserunt recusandae sed odit tempora numquam
                            repellat sapiente minus.
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}