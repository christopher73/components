import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function DropDown({ subLinks }) {
    return (
        <DropDownContainer>
            <span>{subLinks.title}</span>
            <svg
                style={{ width: '10px', marginLeft: '5px' }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sort-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="svg-inline--fa fa-sort-down fa-w-10 fa-lg"
            >
                <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                ></path>
            </svg>
            <DropdownContent className="DropdownContent">
                {subLinks.subLinks.map((link) => (
                    <Link to={link.linkTo}>{link.title}</Link>
                ))}
            </DropdownContent>
        </DropDownContainer>
    )
}
const DropDownContainer = styled.a`
    float: left;
    overflow: hidden;
    :hover .DropdownContent {
        display: block;
    }
`
const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: rgba(41, 41, 46, 1);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }
`
