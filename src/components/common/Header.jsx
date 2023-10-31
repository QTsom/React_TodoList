import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import linkBackgroundImg from "../../assets/img/icon/icon_heart.png"

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    // y축이 0일 때만 헤더 나타나게
    // const handleScroll = () => {
    //     if (window.scrollY > 0) {
    //         setScrolling(true);
    //     } else {
    //         setScrolling(false);
    //     }
    // }
    
    const handleWheel = (event) => {
        if (event.deltaY > 0) {
          setScrolling(true); // 마우스 휠 아래로 스크롤할 때
        } else {
          setScrolling(false); // 마우스 휠 위로 스크롤할 때
        }
    }

    useEffect(()=> {
        // window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleWheel);
        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <HeaderContainer className={`header ${scrolling ? 'scrolling' : ''}`}>
            <div className="header-inner">
                <h1 className="logo">
                    <Link to="/" className="logo__link">HOME</Link>
                </h1>

                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to="/Menu1" className="navigation__link">NAV 1</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/Menu2" className="navigation__link">NAV 2</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/Menu3" className="navigation__link">NAV 3</Link>
                        </li>
                    </ul>
                </nav>

                <div className="button-wrapper">
                    <button type="button" className="button-wrapper__menu-btn">MENU</button>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 1px 0px 8px 4px #fb607a;
    background-color: #f891a2;
    transition: all 0.3s;
    z-index: 20;

    &.scrolling {
        top: -80px;
        box-shadow: none;
    }
    
    .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1280px;
        width: 100%;
        height: 80px;
        padding: 0 20px;
        margin: 0 auto;

        & > * {
            width: 100%;
        }
    }

    .logo {
        &__link {
            max-width: 100px;
            width: 100%;
            font-size: 40px;
            color: #FFF;
            transition: 0.2s all;
            
            &:hover {
                font-size: 45px;
                transform: rotate(-15deg);
                text-shadow: 5px 5px 4px #fc3455;
            }
        }
    }

    .navigation {
        height: 100%;

        &__list {
            display: flex;
            align-items: center;
            justify-content: center;
            /* gap: 20px; */
            height: 100%;
        }
        
        &__item {
            display: flex;
            align-items: center;
            height: 100%;
            transition: 0.5s all;
            background-position: center center;
            
            /* background: url(${linkBackgroundImg}) top 10px center / 20px no-repeat; */
            
            &:hover {
                transform: rotateY(360deg);
                background: url(${linkBackgroundImg}) top 10px center / 20px no-repeat;
            }
        }
        
        &__link {
            padding: 20px 15px;
            font-size: 24px;
            font-weight: 400;
            color: #FFF;
            
            &:hover {
                font-weight: 600;
                color: #770014;
            }
        }
    }

    .button-wrapper {
        text-align: right;

        &__menu-btn {
            font-size: 28px;
            color: #fff;
            transition: 0.2s all;
            
            &:hover {
                font-size: 34px;
                transform: rotate(10deg);
                text-shadow: 5px 5px 4px #fc3455;
            }
        }
    }
`