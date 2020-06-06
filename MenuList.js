import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../utils/screenSizes'
import { Button2 } from './Button2'
import DropDown from './DropDown'
import px2vw from '../utils/px2vw'
export default function MenuList({
    rotate,
    primaryColor,
    secondaryColor,
    isVertical,
}) {
    return (
        <UL isvertical={isVertical ? true : false}>
            <LI s={secondaryColor} p={primaryColor}>
                <Link
                    onClick={() =>
                        isVertical ? rotate((state) => !state) : null
                    }
                    to="/"
                >
                    Home
                </Link>
            </LI>
            <LI s={secondaryColor} p={primaryColor}>
                <DropDown
                    subLinks={{
                        title: 'News',
                        subLinks: [
                            {
                                title: 'recent news',
                                linkTo: '/',
                            },
                            {
                                title: 'podcast',
                                linkTo: '/',
                            },
                        ],
                    }}
                />
            </LI>
            <LI s={secondaryColor} p={primaryColor}>
                <DropDown
                    subLinks={{
                        title: 'Events',
                        subLinks: [
                            {
                                title: 'middway in the community',
                                linkTo: '/',
                            },
                            {
                                title: 'submit an event',
                                linkTo: '/',
                            },
                        ],
                    }}
                />
            </LI>
            <LI s={secondaryColor} p={primaryColor}>
                <DropDown
                    subLinks={{
                        title: 'About',
                        subLinks: [
                            { title: 'mission', linkTo: '/' },
                            { title: 'values', linkTo: '/' },
                            { title: 'career', linkTo: '/' },
                            { title: 'contact us', linkTo: '/contact' },
                        ],
                    }}
                />
            </LI>
            <LI>
                <LoginButton s={secondaryColor} p={primaryColor}>
                    Sign In / register
                </LoginButton>
            </LI>
        </UL>
    )
}
const UL = styled.ul`
    flex-direction: ${({ isvertical }) => (isvertical ? 'column' : 'row')};
    padding: 0px;
    justify-content: ${({ isvertical }) =>
        isvertical ? 'space-around' : 'space-between'};
    align-items: center;
    margin: 0px;
    @media ${device.larger} {
        display: flex;
    }
    @media ${device.large} {
        display: ${({ isvertical }) => (isvertical ? 'flex' : 'none')};
    }
    @media ${device.medium} {
        display: ${({ isvertical }) => (isvertical ? 'flex' : 'none')};
    }
    @media ${device.small} {
        display: ${({ isvertical }) => (isvertical ? 'flex' : 'none')};
    }
`
const LI = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    list-style-type: none;
    /* margin-bottom: ${({ isvertical }) => (isvertical ? 'auto' : '15px')}; */
    a {
      text-align:center;
        border-radius: 35px;
        text-decoration: none;
        padding: 5px;
        color: ${({ p }) => p || '#000'};
        margin: 1.7rem;
        text-transform: uppercase;
        font-size: 1rem;
        background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 50%,
            #ddd 50%
        );
        background-position: -0% 0;
        background-size: 200% auto;
        line-height: 1.15em;
        transition: background-position 0.5s ease-out;
        &:hover {
            background-position: -99.99% 0;
            color: ${({ s }) => s};
        }
    }
`
const LoginButton = styled.button`
    background: none;
    border: 2px solid rgba(219, 100, 38);
    border-radius: 35px;
    text-decoration: none;
    padding: 10px 5px;
    color: ${({ s }) => s || '#000'};
    margin: 1.7rem;
    text-transform: uppercase;
    font-size: 1rem;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 50%,
        rgba(219, 100, 38, 0.2) 50%
    );
    background-position: -0% 0;
    background-size: 200% auto;
    line-height: 1.15em;
    transition: background-position 0.5s ease-out;
    &:hover {
        background-position: -99.99% 0;
        color: #fff;
    }
    @media ${device.larger} {
        font-size: ${px2vw(15)};
    }
    @media ${device.large} {
        font-size: ${px2vw(15)};
    }
    @media ${device.medium} {
        font-size: ${px2vw(30)};
    }
    @media ${device.small} {
        font-size: ${px2vw(40)};
    }
`
