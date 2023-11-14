import Slider from "react-slick";
import Layout from "components/common/Layout";
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
                <div>h1</div>
                <div>bye</div>
                <div>hello</div>
            </Slider>
        </Layout>
    );   
}

export default MenuPage3;