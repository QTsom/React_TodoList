import styled from "styled-components";
import Slider from "react-slick"

import Layout from "components/common/Layout";
import ExCard from "components/ExCard";

const MenuPage2 = () => {

    const settings = {}

    return (
        <Layout>
            <MenuContainer>
                <div className="slider-wrap">
                    <div className="title-box">
                        <h2>슬라이더 라이브러리</h2>
                        <p>리액트 슬라이더, react-slick</p>
                    </div>

                    <Slider {...settings}>
                        {/* ExCard는 예시, 서버에서 배너(이미지)를 배열로 담아주면, map으로 뿌림 */}
                        <ExCard>

                        </ExCard>
                    </Slider>
                </div>
            </MenuContainer>
        </Layout>
    );    
}

export default MenuPage2;

const MenuContainer = styled.div`
    
`