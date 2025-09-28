import styled from "styled-components"

const Section = ({ data }) => {
    const { id, title, description, backgroundImg, leftBtnText, rightBtnText } = data;
    return (
        <Wrap id={id} className="flex flex-col justify-end items-center" bgImage={backgroundImg}>
            <ItemText >
                <h1 className="text-5xl font-bold !text-white">{title}</h1>
                <p className="font-medium text-xl !mt-3 !text-white">{description}</p>
            </ItemText>
            <div>
                <ButtonGroup className="flex flex-col md:flex-row gap-3">
                    {leftBtnText && (
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    )}
                    {rightBtnText && (
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    )}
                </ButtonGroup>
                <DownArrow src="./images/down-arrow.svg" alt="down-arrow" />
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    background-image: ${props => `url('/images/${props.bgImage}')`};
`

const ItemText = styled.div`
    position: absolute;
    top:25vh;
    left: 64px;
    text-aligin: center;

    @media (max-width:768px){
        left: 20px;
        top: 20vh;
    }

    @media (max-width:1248px){
        left: 36px;
    }
`

const ButtonGroup = styled.div`
    margin-bottom: 5vh;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height:40px;
    width: 256px;
    color: white;
    border-radius: 100px;
    opacity: 0.80;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    margin: 20px auto;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

export default Section