import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Layout from "components/common/Layout";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slickImg from "../assets/img/contents/slickImg.jpg"
import slickImg2 from "../assets/img/contents/slickImg2.jpg"
import slickImg3 from "../assets/img/contents/slickImg3.jpg"

const MenuPage3 = () => {
    // 상태를 초기화하거나 메서드를 바인딩해야 하는 경우 useState후크를 사용하고 구성 요소 외부에서 메서드를 정의해야 함

    const [slider, setSlider] = useState(null);
    const [playActive, setPlayActive] = useState(true);
    const [pauseActive, setPauseActive] = useState(false);

    const play = () => {
        slider.slickPlay();
        setPlayActive(true);
        setPauseActive(false);
    }

    const pause = () => {
        slider.slickPause();
        setPlayActive(false);
        setPauseActive(true);
    }
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    const cardList = [
        {
            id: 1,
            title: 'first slick',
            description: 'cat very cute.',
            thumbnail: slickImg,
        },
        {
            id: 2,
            title: 'second slick',
            description: 'dogs and cats, two dog, two cat.',
            thumbnail: slickImg2,
        },
        {
            id: 3,
            title: 'third slick',
            description: 'This parrot has red and green feathers.',
            thumbnail: slickImg3,
        }
    ]


    return (
        <Layout>
            <TitleWrap>
                <h2>React Slick</h2>
                <p>react slick을 이용한 슬라이더<br />
                <em>npm i react-slick</em> 후,<br />
                <em>import 'slick-carousel/slick/slick.css';</em> <br />
                <em>import 'slick-carousel/slick/slick-theme.css';</em> 추가
                </p>
            </TitleWrap>
            <SliderWrap>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cardList.map((card, cardItem) => (
                        <ExCard key={cardItem}>
                            <div className="card-wrap">
                                <div className="card-wrap__img">
                                    <img src={card.thumbnail} alt="썸네일" />
                                </div>
                                <div className="card-wrap__contents">
                                    <h2 className="card-wrap__title">{card.title}</h2>
                                    <p className="card-wrap__description">{card.description}</p>
                                </div>
                            </div>
                        </ExCard>
                    ))}
                </Slider>
            </SliderWrap>
            <ControlButtonWrap>
                <button type="button" className={`play-button ${playActive ? "active" : ""}`} onClick={play}>PLAY</button>
                <button type="button" className={`pause-button ${pauseActive ? "active" : ""}`} onClick={pause}>PAUSE</button>
            </ControlButtonWrap>
        </Layout>
    );   
}

export default MenuPage3;

const TitleWrap = styled.div`
    padding: 70px 0;
    text-align: center;
    font-weight: 700;
    color: #f891a2;
    
    h2 {
        margin-bottom: 20px;
        font-size: 50px;
    }
    p {
        line-height: 0.7;
        font-size: 22px;
    }
`
const SliderWrap = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto 50px;
    
    .slick-prev {
        left: -50px;
    }
    .slick-next {
        right: -50px;
    }
    .slick-prev,
    .slick-next {
        width: 50px;
        height: 50px;
    }
    .slick-prev::before,
    .slick-next::before {
        font-size: 35px;
        color: #fb607a;
    }
    .slick-dots li {
        margin: 0 3px;
    }
    .slick-dots li.slick-active button:before {
        color: #fb607a;
    }
    .slick-dots li button:before {
        color: #fff1f4;
        opacity: 1;
    }
`
const ExCard = styled.div`
    width: 100%;

    .card-wrap {
        border-radius: 20px;
        overflow: hidden;
        
        &__contents {
            padding: 20px;
            background-color: #fff1f4;
        }

        &__title {
            font-size: 30px;
            font-weight: 700;
        }
        &__description {
            font-size: 20px;
        }
    }
`

const ControlButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 110px;

    button {
        width:180px;
        height: 45px;
        font-size: 28px;
        color: #fff1f4;
        background-color: #f891a2;
        border: 1px solid #fb607a;
        border-radius: 8px;
        transition: all .3s;
        
        &:hover {
            background-color: #fb607a;
        }
        &.active {
            background-color: #fb607a;
        }
    }
`