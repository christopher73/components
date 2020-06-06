import { css } from 'styled-components'
import px2vw from '../utils/px2vw'
import { device } from '../utils/screenSizes'

export const Button2 = css`
    border-radius: 35px;
    text-decoration: none;
    background-color: #fff;
    color: rgba(219, 100, 38);
    font-weight: lighter;
    text-transform: uppercase;
    border: 2px solid rgba(219, 100, 38);
    text-align: center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    &:hover {
        color: white;
        border: 1.6px solid rgb(226, 125, 117);
        background-color: rgb(226, 125, 117);
    }
    @media ${device.larger} {
        padding: 10px ${px2vw(15)};
        font-size: ${px2vw(15)};
        width: ${px2vw(100)};
    }
    @media ${device.large} {
        padding: 10px ${px2vw(15)};
        font-size: ${px2vw(15)};
        width: ${px2vw(100)};
    }
    @media ${device.medium} {
        padding: 5px ${px2vw(20)};
        font-size: ${px2vw(30)};
        width: ${px2vw(200)};
    }
    @media ${device.small} {
        padding: 5px ${px2vw(20)};
        font-size: ${px2vw(40)};
        width: ${px2vw(400)};
    }
`
