import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";
import { selectSolar } from "../features/solar/solarSlice";

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const isMobile = useMediaQuery('(max-width:768px)');
    const cars = useSelector(selectCars)
    const solar = useSelector(selectSolar)
    return (
        <Container>
            <a href="#">
                <img src="./images/logo.svg" alt="tesla-logo" />
            </a>
            <Menu>
                {cars.map((menuItem, index) => (
                    <a key={index} href={`#`} className="text-md font-bold">
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
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <div className="flex items-center justify-end">
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </div>
                {isMobile && (
                    cars.map((menuItem, index) => (
                        <li key={index}><a href={`#${menuItem.id}`}>{menuItem.title}</a></li>
                    ))
                )}
                {
                    solar.map((menuItem, index) => (
                        <li key={index}><a href={`#${menuItem.id}`}>{menuItem.title}</a></li>
                    ))
                }
            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    background-color:white;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
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

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-weight: 500;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

export default Header