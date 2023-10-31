import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-line">
                <div className="footer-inner">
                    <div className="top-box">
                        <h2>FOOTER</h2>

                        <ul className="sns">
                            <li className="sns__item">INSTAGRAM</li>
                            <li className="sns__item">KAKAOTALK</li>
                            <li className="sns__item">BLOG</li>
                        </ul>
                    </div>

                    <p>footer 영역이에요.</p>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer `
    background-color: #f891a2;
    padding: 20px;

    .top-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    h2 {
        font-size: 40px;
        color: #FFF;
    }
    .footer-line {
        border: 4px dotted #fec7d3;
    }
    .footer-inner {
        max-width: 1280px;
        width: 100%;
        padding: 40px 20px;
        margin: 0 auto;
    }
    .sns {
        display: flex;
        align-items: center;
        gap: 30px;

        &__item {
            position: relative;
            font-size: 20px;
            font-weight: 400;
            color: #fff1f4;
            cursor: pointer;

            &:hover {
                border-bottom: 1px solid #fff1f4;
            }

            &::after {
                content: "지금은 연결이 안 되어 있어요.";
                position: absolute;
                left: 50%;
                top: -30px;
                transform: translate(-50%);
                width: 80px;
                padding: 10px 15px;
                font-size: 14px;
                font-weight: 600;
                color: #fc3455;
                background-color: #fff1f4;
                border-radius: 15px;
                border: 1px solid #fc3455;
                opacity: 0;
                transition: 0.4s all;
            }
            
            &:hover::after {
                /* display: block; */
                top: -70px;
                opacity: 1;
            }
        }
    }
    p {
        font-size: 18px;
        color: #fff1f4;
    }
`