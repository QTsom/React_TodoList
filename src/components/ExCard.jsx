import styled from "styled-components";

const ExCard = () => {
    const cardList = [
        {
            id: 1,
            title: 'first slick',
            description: 'first slick description',
            // thumbnail:
        }
    ]

    return (
        <ExCardContainer>
            <div className="car-wrap">
                <div>
                    {/* thumbnail 위치 */}
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