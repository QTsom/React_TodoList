import Slider from "react-slick";
import Layout from "components/common/Layout";
import ExCard from "components/ExCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MenuPage3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Layout>
            <Slider {...settings}>
                <ExCard>h1</ExCard>
                <ExCard>bye</ExCard>
                <ExCard>hello</ExCard>
            </Slider>
        </Layout>
    );   
}

export default MenuPage3;