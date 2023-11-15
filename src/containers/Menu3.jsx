import Slider from "react-slick";
import styled from "styled-components";
import Layout from "components/common/Layout";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slickImg from "../assets/img/contents/slickImg.jpg"
import slickImg2 from "../assets/img/contents/slickImg2.jpg"
import slickImg3 from "../assets/img/contents/slickImg3.jpg"

const MenuPage3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
            <SliderWrap>
                <Slider {...settings}>
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
        </Layout>
    );   
}

export default MenuPage3;

const SliderWrap = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 70px auto;
    
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