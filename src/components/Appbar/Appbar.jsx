import React from 'react';
import styled from 'styled-components';
import ProfileAvatar from '../../assets/avatar.png'

const Appbar = () => {
    return (
        <Nav>
            <div className="nav__links">
                <a href="#Trips">Trips</a>
                <a href="#Recently-Viewed">Recently Viewed</a>
                <a href="#Bookings">Bookings</a>
            </div>
            <div className="nav__profile">
                <a href="#Profile"><img src={ProfileAvatar} alt="Profile Avatar" /></a>
            </div>
        </Nav>
    )
};


const Nav = styled.nav`
padding: 20px 100px;
display: flex;
justify-content: flex-end;
align-items: center;

.nav{
    
    &__links{
        a{
            text-decoration: none;
            text-transform: uppercase;
            padding: 8px 16px;
            color:#3E4457;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;

            &:hover{
                color: #395ED4;
            }
        }
    }
    &__profile{
        margin-left: 16px;
        img{
            height: 50px;
            border-radius: 300px;
        }
    }
}


`

export default Appbar;
