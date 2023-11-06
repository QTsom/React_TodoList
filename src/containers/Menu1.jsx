import Layout from "components/common/Layout";
import styled from "styled-components";

import checkedIcon from "../assets/img/icon/icon_check.png"

const MenuPage1 = () => {
    return (
        <Layout>    
            <MenuContainer>
                <div className="checkbox-wrap">
                    <div className="checkbox-wrap__title">
                        <h2>약관 체크</h2>
                        <p>필수값은 꼭 선택되어 있어야 합니다.</p>
                    </div>

                    <div className="checkbox-wrap__content">
                        <div className="checkbox-wrap__all-check">
                           < input type="checkbox" id="allCheck" />
                            <label htmlFor="allCheck">전체동의</label>
                        </div>

                        <ul className="checkbox-wrap__list">
                            <li className="checkbox-wrap__item">
                                <input type="checkbox" id="check1" />
                                <label htmlFor="check1">(필수) 이용약관 동의</label>
                            </li>
                            <li className="checkbox-wrap__item">
                                <input type="checkbox" id="check2" />
                                <label htmlFor="check2">(필수) 개인정보처리방침 동의</label>
                            </li>
                            <li className="checkbox-wrap__item">
                                <input type="checkbox" id="check3" />
                                <label htmlFor="check3">(선택) 마케팅 수신 동의</label>
                            </li>
                        </ul>

                        <div className="button-wrap">
                            <button className="complete-button" disabled>확인</button>
                        </div>
                    </div>
                </div>
            </MenuContainer>
        </Layout>
    );   
}

export default MenuPage1;

const MenuContainer = styled.div`
    .checkbox-wrap {
        padding: 40px 0;

        &__title {
            margin-bottom: 100px;
            text-align: center;
            font-size: 28px;
            color: #f891a2;
            
            h2 {
                margin-bottom: 10px;
            }

            p {
                font-size: 22px;
            }
        }

        &__content {
            max-width: 600px;
            width: 100%;
            padding: 20px;
            margin: 0 auto;
            background-color: #fff1f4;
            border: 10px double #f891a2;

            > * {
                color: #f891a2;
            }
            input[type="checkbox"] { 
                display: none;
            
                & + label {
                    padding: 5px 0 3px 25px;
                    font-size: 20px;
                    background: url(${checkedIcon}) left center / 20px no-repeat;
                    filter: brightness(0.4);
                    opacity: 0.4;
                    cursor: pointer;
                }
                &:checked + label {
                    font-weight: 700;
                    background: url(${checkedIcon}) left center / 20px no-repeat;
                    filter: brightness(1);
                    opacity: 1;
                }
            }
        }
        &__all-check {
            margin-bottom: 25px;
        }
        &__list {
            margin-bottom: 30px;
        }
        &__item {
            &:not(:last-of-type) {
                margin-bottom: 15px;
            }
        }
        
        .button-wrap {
            text-align: center;

            .complete-button {
                width: 100px;
                height: 30px;
                font-size: 18px;
                background-color: #f891a2;
                border-radius: 5px;
                color: #fff1f4;
                
                &:disabled {
                    background-color: #a0a0a0;
                }
            }
        }
    }
`