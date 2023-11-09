import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Footer = () => {
    
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <FooterContainer>
            <div className="footer-line">
                <div className="footer-inner">
                    <div className="top-box">
                        <h2>FOOTER</h2>

                        <ul className="sns">
                            <li className="sns__item" onClick={() => setIsModalActive(true)}>INSTAGRAM</li>
                            <li className="sns__item" onClick={() => setIsModalActive(true)}>KAKAOTALK</li>
                            <li className="sns__item" onClick={() => setIsModalActive(true)}>BLOG</li>
                        </ul>
                    </div>

                    <p>footer 영역입니다.</p>
                </div>
            </div>
            

            {isModalActive && (<Modal
                    modal={isModalActive}
                    setModal={setIsModalActive}
                    width={600}
                    title={'알림'}
                    element={'아직 관련 링크가 연결이 안 되어 있어요.'}
            />)}
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer `
    background-color: #f891a2;
    padding: 20px;

    .top-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    h2 {
        font-size: 40px;
        color: #FFF;
    }
    .footer-line {
        border: 4px dotted #fec7d3;
    }
    .footer-inner {
        max-width: 1280px;
        width: 100%;
        padding: 40px 20px;
        margin: 0 auto;
    }
    .sns {
        display: flex;
        align-items: center;
        gap: 30px;

        &__item {
            position: relative;
            font-size: 20px;
            font-weight: 400;
            color: #fff1f4;
            cursor: pointer;

            &:hover {
                border-bottom: 1px solid #fff1f4;
            }

            &:hover::after {
                top: -70px;
                opacity: 1;
            }
        }
    }
    p {
        font-size: 18px;
        color: #fff1f4;
    }
`