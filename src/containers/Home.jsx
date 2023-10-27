import React, { useState } from 'react';
import styled from "styled-components";
import Layout from "components/common/Layout";
import FirstContainer from "components/First";
import SecondContainer from "components/Second";
import ThirdContainer from "components/Third";

const HomePage = () => {
    const [content, setContent] = useState('FIRST');

    const handleClickButton = e => {
        const {name} = e.target;
        setContent(name);
    }

    const selectComponent = {
        FIRST: <FirstContainer />,
        SECOND: <SecondContainer />,
        THIRD: <ThirdContainer />
    }

    const tabList = [
        {
            id: 1,
            btnName: 'FIRST',
        },
        {
            id: 2,
            btnName: 'SECOND',
        },
        {
            id: 3,
            btnName: 'THIRD',
        },
    ]


    return (
        <Layout>
            <HomeContainer className="homeContainer">
                <section className='tab-wrap'>
                    <div className='tab-wrap__list'>
                        {tabList.map((btn, btnItem) => (
                            <div key={btnItem} className='tab-wrap__item'>
                                <button type='button' onClick={handleClickButton} name={btn.btnName} className={`tab-wrap__btn ${content === btn.btnName ? "active" : ""}`}>
                                    {btn.btnName}
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {content && <article>{selectComponent[content]}</article>}
                </section>

                <section className='newsContainer'>
                    <h2 className='title'>
                        News Area
                    </h2>
                    <p>리스트들을 구경해 보세요.</p>

                    <ul>
                        <li>
                            <div>
                                <img src="" alt="" />
                            </div>

                            <div>
                                <h3></h3>
                                <p></p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                </section>
                
                <section>
                </section>

            </HomeContainer>
        </Layout>
    )
}

export default HomePage;

const HomeContainer = styled.div `

    section {
        padding: 20px;
        margin: 70px 0;
        border: 10px double #f891a2;
        
        article {
            width: 50%;
            padding: 20px;
            border: 2px solid #f891a2;
            background-color: #fff1f4;
            text-align: center;
            p {
                width: 120px;
                animation: typing 1s steps(8), blink .5s step-end infinite alternate;
                white-space: nowrap;
                overflow: hidden;
                margin: 0 auto;
                border-right: 2px solid #f891a2;
                font-size: 21px;
            }

            @keyframes typing {
                from {
                    width: 0
                }
            }
                
            @keyframes blink {
                50% {
                    border-color: transparent
                }
            }
        }
 }
    .tab-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        &__list {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        &__btn {
            position: relative;
            width: 65px;
            height: 27px;
            font-size: 18px;
            color: #f1f1f1;
            border-radius: 8px;
            overflow: hidden;
            z-index: 5;

            &:hover {
                font-weight: 600;
                color: #f891a2;
            }
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                height: 27px;
                width: 100%;
                background-color: #f891a2;
                z-index: -2;
            }
            
            &.active {
                font-weight: 600;
                color: #f891a2;
            }
            &.active::before {
                background-color: #fff;
            }
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: -100%;
                display: block;
                height: 27px;
                width: 100%;
                background-color: #fff;
                transition: 0.4s all;
                z-index: -1;
                border-radius: 8px;
            }
            &:hover::after {
                left: 0;
            }
        }
    }
`