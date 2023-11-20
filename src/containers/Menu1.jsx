import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "components/common/Layout";
import styled from "styled-components";

import checkedIcon from "../assets/img/icon/icon_check.png"
import CheckBox from "components/CheckBox";

const MenuPage1 = () => {
    const navigate = useNavigate();

    const checkList = [
        {
            id: 1,
            contents: '개인 정보 동의',
            category: '[필수]',
        },
        {
            id: 2,
            contents: '이용약관 동의',
            category: '[필수]',
        },
        {
            id: 3,
            contents: '마케팅 동의',
            category: '[선택]',
        },
    ];

    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
        if(checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    }

    const handleAllCheck = (checked) => {
        if(checked) {
            const idArray = [];
            checkList.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            setCheckItems([]);
        }
    }

    const allRequiredChecked = checkList.filter(item => item.category === '[필수]').every(item => checkItems.includes(item.id));

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
                            <input 
                                type="checkbox"
                                name="all-check"
                                id="allCheck"
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                checked={checkItems.length === checkList.length}
                            />
                            <label htmlFor="allCheck">전체동의</label>
                        </div>
                    
                        <div>
                            {checkList.map((checkItem, index)=> {
                                return(
                                    <CheckBox
                                        key={index}
                                        contents={checkItem.contents}
                                        category={checkItem.category}
                                        name={`check-${checkItem.id}`}
                                        checkId={`check-${checkItem.id}`}
                                        checked={checkItems.includes(checkItem.id)}
                                        onChange={(e) => handleSingleCheck(e.target.checked, checkItem.id)}
                                    />
                                )
                            })}
                        </div>

                        <div className="button-wrap">
                            <button 
                                className="complete-button"
                                disabled={!allRequiredChecked}
                                onClick={() => {navigate('/')}}
                            >확인</button>
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