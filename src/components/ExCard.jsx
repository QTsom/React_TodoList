import styled from "styled-components";

const ExCard = () => {
    return (
        <ExCardContainer>
            <div className="car-wrap">
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <h2 className="car-wrap__title">title</h2>
                    <p className="car-wrap__description">description</p>
                </div>

            </div>

        </ExCardContainer>
    )
}

export default ExCard;

const ExCardContainer = styled.div`
    
`