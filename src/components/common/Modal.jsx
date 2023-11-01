import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const Modal = ({width, title, element, setModal}) => {

    const disableModal = () => {
        setModal(false);
    }

    return (
        <ModalContainer width={width}>
            <div className="modal">
                <div className="modal__inner">
                    <h2 className="modal__title">{title}</h2>
                    <p className="modal__paragraph">{element}</p>

                    <div className="modal__button-wrap">
                        <button type="button" className="close-button" onClick={disableModal}>닫기</button>
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
     .modal {
        /* display: none; */
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 0 20px;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 100;

        &__inner {
            position: relative;
            max-width: ${(props) => props.width}px;
            width: 100%;
            top: 50%;
            left: 50%;
            padding-bottom: 20px;
            transform: translate(-50%, -50%);
            background-color: #fff1f4;
            border-radius: 10px;
            overflow: hidden;
        }

        &__title {
            padding: 10px;
            font-size: 28px;
            color: #fff1f4;
            text-align: center;
            background-color: #f891a2;
        }

        &__paragraph {
            padding: 30px 20px;
            word-break: break-all;
            font-size: 24px;
            text-align: center;
        }

        &__button-wrap {
            text-align: center;

            .close-button {
                padding: 3px 10px;
                font-size: 18px;
                color: #fff1f4;
                border-radius: 4px;
                background-color: #f891a2;
            }
        }
    }
    
`

export default Modal;