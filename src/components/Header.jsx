import React from 'react'
import styled from 'styled-components'
import { Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <Container>
                
                <a>
                    <img src="./images/Salon De Beaute(red).png"/>
                </a>
                <Menu>
                    <p><a href="#">Home</a></p>
                    <p><a href="/Staff.jsx">Staff</a></p>
                    <p><a href="#">Services</a></p>
                    <p><a href="#">Contact</a></p>
                    <p><a href="#">Journal</a></p>
                    
                </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0 20px;
    background-color: white;
    width:100%

`

const Menu = styled.div`
    display:flex;
    align-items: center;

    p {
        font-size: 20px;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
        color: #954C4C;
        }
    

`
