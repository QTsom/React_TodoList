import React, { useState } from 'react';
import styled from "styled-components";
import Layout from "components/common/Layout";
import FirstContainer from "components/First";
import SecondContainer from "components/Second";
import ThirdContainer from "components/Third";

const HomePage = () => {
    const [content, setContent] = useState('firstBtn');

    const handleClickButton = e => {
        const {name} = e.target;
        setContent(name);
    }

    const selectComponent = {
        firstBtn: <FirstContainer />,
        secondBtn: <SecondContainer />,
        thirdBtn: <ThirdContainer />
    }

    const tabList = [
        {
            id: 1,
            btnName: 'firstBtn',
        },
        {
            id: 2,
            btnName: 'secondBtn',
        },
        {
            id: 3,
            btnName: 'thirdBtn',
        },
    ]


    return (
        <Layout>
            <HomeContainer className="homeContainer">
                <section className='tab-wrap'>
                    <div className='tab-wrap__list'>
                        {tabList.map((btn, btnItem) => (
                            <div key={btnItem} className='tab-wrap__item'>
                                <button type='button' onClick={handleClickButton} name={btn.btnName} className='tab-wrap__btn'>{btn.btnName}</button>
                            </div>
                        ))}
                    </div>
                    
                    {content && <article>{selectComponent[content]}</article>}
                </section>

            </HomeContainer>
        </Layout>
    )
}

export default HomePage;

const HomeContainer = styled.div `

    .tab-wrap {
        border: 1px solid #f891a2;
    }
`