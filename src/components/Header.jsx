import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

const menuLinks = [
    {
        title: 'Cyberruck',
        link: '#cybertruck'
    },
    {
        title: 'Model S',
        link: '#model-s'
    },
    {
        title: 'Model Y',
        link: '#model-y'
    },
    {
        title: 'Model 3',
        link: '#model-3'
    },
    {
        title: 'Model X',
        link: '#model-x'
    },
]

const Header = () => {
    return (
        <Container>
            <a href="#">
                <img src="./images/logo.svg" alt="tesla-logo" />
            </a>
            <Menu>
                {menuLinks.map((menuItem, index) => (
                    <a key={index} href={menuItem.link} className="text-md font-bold">
                        {menuItem.title}
                    </a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#" className="text-md font-bold">
                    Shop
                </a>
                <a href="#" className="text-md font-bold">
                    Tesla Account
                </a>
                <CustomMenu />
            </RightMenu>
        </Container>
    )
}

const Container = styled.div`
    background-color:white;
    opacity: 0.80;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    padding: 0 64px;
    top: 0;
    left: 0;
    right: 0;
    
    @media (max-width:768px){
        padding: 0 20px;
    }

    @media (max-width:1248px){
        padding: 0 36px;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;
    
    @media (max-width:768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-transform: uppercase;
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

export default Header