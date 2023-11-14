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
            description: 'first slick description',
            thumbnail: slickImg,
        },
        {
            id: 2,
            title: 'second slick',
            description: 'second slick description',
            thumbnail: slickImg2,
        },
        {
            id: 3,
            title: 'third slick',
            description: 'third slick description',
            thumbnail: slickImg3,
        }
    ]


    return (
        <Layout>
            <Slider {...settings}>
                {cardList.map((card, cardItem) => (
                    <ExCard key={cardItem}>
                        <div className="car-wrap">
                            <div>
                                <img src={card.thumbnail} alt="썸네일" />
                            </div>
                            <div>
                                <h2 className="car-wrap__title">{card.title}</h2>
                                <p className="car-wrap__description">{card.description}</p>
                            </div>
                        </div>
                    </ExCard>
                ))}
            </Slider>
        </Layout>
    );   
}

export default MenuPage3;

const ExCard = styled.div`
    
`