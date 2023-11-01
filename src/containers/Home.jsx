import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Layout from "components/common/Layout";
import FirstContainer from "components/First";
import SecondContainer from "components/Second";
import ThirdContainer from "components/Third";
import Modal from 'components/common/Modal';

import exImg from '../assets/img/contents/ex_img.jpg';
import exImg2 from '../assets/img/contents/ex_img2.jpg';
import exImg3 from '../assets/img/contents/ex_img3.jpg';

const HomePage = () => {

    const [content, setContent] = useState('FIRST');

    const [toDos, setTodos] = useState([]);
    const [currentText, setCurrentText] = useState("");
    const [toDoId, setTodoId] = useState(0);

    const [isModalActive, setIsModalActive] = useState(false);

    const handleClickButton = e => {
        const {name} = e.target;
        setContent(name);
    }

    const handleChange = e => {
        setCurrentText(e.target.value)
    }
    const handleAdd = () => {
        if (currentText.trim() === "") {
            setIsModalActive(true);
            return;
        }
    
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                content: currentText,
                id: toDoId,
                didIt: false,
            },
        ]);
    
        setTodoId(toDoId + 1);
        setCurrentText("");
    };
    const handleRemove = removeId => {
        const result = toDos.filter((toDo) => {
            return toDo.id !== removeId
        })
        setTodos(result);
    }
    const toggleDidIt = (toggleId) => {
        const result = toDos.map((toDo => {
            return toDo.id === toggleId ? {...toDo, didIt: !toDo.didIt} : toDo
        }))
        setTodos(result);
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

    const dummyList = [
        {
            id: 1,
            title: '뉴스 제목입니다.',
            description: '뉴스 내용입니다.',
            image: exImg,
        },
        {
            id: 2,
            title: '더미 타이틀입니다.',
            description: '더미 디스크립션입니다.',
            image: exImg2,
        },
        {
            id: 3,
            title: '뉴스 제목입니다.',
            description: '내용 긴 거는 두줄 생략 내용 긴 거는 두줄 생략내용 긴 거는 두줄 생략내용 긴 거는 두줄 생략내용 긴 거는 두줄 생략내용 긴 거는 두줄 생략',
            image: exImg3,
        },
        {
            id: 4,
            title: '네 번째 뉴스 제목입니다.',
            description: '네 번째 뉴스 내용입니다.',
            image: exImg2,
        },
        {
            id: 5,
            title: '더미 리스트 다섯 번째 타이틀',
            description: '더미 리스트 다섯 번째 디스크립션',
            image: exImg,
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

                <section className='news-wrap'>
                    <h2 className='news-wrap__title'>
                        News Area
                    </h2>

                    <p>리스트들을 구경해 보세요.</p>

                    <ul className='news-wrap__list'>
                        {dummyList.map((dummy, dummyItem) => (
                            <li className='news-wrap__item' key={dummyItem}>
                                <Link to={`/SubPage/${dummy.id}`}>
                                {/* <Link to="/SubPage"> */}
                                    <div className='news-wrap__img-box'>
                                        <img src={dummy.image} alt="뉴스 이미지" />
                                    </div>

                                    <div className='news-wrap__description-box'>
                                        <h3>{dummy.title}</h3>
                                        <p>{dummy.description}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='to-do-wrap'>
                    <h2 className='to-do-wrap__title'>할 일 목록 추가</h2>
                    <p className='to-do-wrap__description'>to do list를 만들어 봅시다.</p>

                    <div className='add-box'>
                        <input type="text" className='add-box__input' onChange={handleChange} value={currentText} placeholder='할 일을 적으세요.' />
                        <button type='button' className='add-box__button' onClick={handleAdd}>추가</button>
                    </div>

                    <ul className='to-do-wrap__list'>
                        {toDos.map((toDo) => (
                            <li className='to-do-wrap__item' key={toDo.id}>
                                <span onClick={() => toggleDidIt(toDo.id)} className={`doing ${toDo.didIt ? "active" : ""}`}>{toDo.content}</span>
                                <button type='button' onClick={() => handleRemove(toDo.id)} className='delete-button'>삭제</button>
                            </li>
                        ))}
                    </ul>
                </section>
    {/* 데이터 관리에 필요한 네 가지 접근 방법
    - Create : 생성(추기)하기

    - Read : 조회하기(읽기)

    - Update : 수정(변경)하기

    - Delete : 삭제하기 */}
                {isModalActive && 
                    (<Modal 
                        modal={isModalActive}
                        setModal={setIsModalActive}
                        width={500}
                        title={'알림'}
                        element={'할 일을 적어주세요.'}
                    />)
                 }

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
                    width: 0;
                }
            }
                
            @keyframes blink {
                50% {
                    border-color: transparent;
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

    .news-wrap {
        text-align: center;

        &__title {
            font-size: 42px;
            font-weight: 700;
            color: #f891a2;
        }

        > p {
            margin-bottom: 35px;
            font-size: 22px;
            color: #f891a2;
        }

        &__list {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 20px 25px;
        }
        &__item {
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #f891a2;
            opacity: 0.7;
            > a {
                height: 100%;
            }
            &:hover {
                border: 2px solid #f891a2;
                opacity: 1;

                .news-wrap__img-box img{
                    transform: scale(1.2);
                }
            }
        }
        &__img-box {
            aspect-ratio: 13/7;
            overflow: hidden;

            img {
                transition: 0.3s;
            }
        }
        &__description-box {
            height: 100%;
            padding: 15px 20px;
            background-color: #fff1f4;
            color: #f891a2;
            
            h3 {
                margin-bottom: 10px;
                font-size: 24px;
            }
            p {
                display: -webkit-box;
                font-size: 18px;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-word;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }

    .to-do-wrap {
        color: #f891a2;

        &__title {
            font-size: 34px;
        }
        &__description {
            margin-bottom: 30px;
            font-size: 22px;
        }

        .add-box {
            display: flex;
            align-items: center;
            gap: 15px;

            &__input {
                height: 30px;
                padding: 0 10px;
                font-size: 16px;
                background-color: #fff1f4;
                border: 1px solid #f891a2;
                border-radius: 5px;

                &::placeholder {
                    color: #f891a2;
                }
            }
            &__button {
                width: 55px;
                height: 28px;
                font-size: 16px;
                color: #fff1f4;
                background-color: #f891a2;
                border-radius: 5px;
                transition: 0.2s;

                &:hover {
                    transform: rotate(15deg);
                }
            }
        }

        &__list {
            margin-top: 20px;
        }

        &__item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 10px;
            font-size: 24px;
            font-weight: 700;

            &::before {
                content: "-";
            }
            .doing {
                cursor: pointer;

                &.active {
                    font-weight: 400;
                    color: #888;
                    text-decoration: line-through;
                    
                }
            }

            .delete-button {
                padding: 2px 5px;
                font-size: 14px;
                color: #f1f1f1;
                background: #f891a2;
                border-radius: 3px;
                transition: 0.2s;

                &:hover {
                    transform: rotate(15deg);
                }
            }
        }
    
    }
`