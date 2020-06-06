import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneNumber from './PhoneNumber'
import MenuList from './MenuList'
import Logo from './Logo'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useSpring, animated } from 'react-spring'

export default function NavBar({ primaryColor, secondaryColor }) {
    const [isBGon, setIsBGon] = useState(false)
    const [isRotated, setRotate] = useState(false)
    const aniNavBar = useSpring({
        height: `${isRotated ? '100%' : '10vh'}`,
    })
    const aniBar1 = useSpring({
        transform: `rotate(${isRotated ? -45 : 0}deg) translate(${
            isRotated ? -8 : 0
        }px, ${isRotated ? 8 : 0}px)`,
    })
    const aniBar2 = useSpring({ opacity: isRotated ? 0 : 1 })
    const aniBar3 = useSpring({
        transform: `rotate(${isRotated ? 45 : 0}deg) translate(${
            isRotated ? -9 : 0
        }px, ${isRotated ? -9 : 0}px )`,
    })
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y === 0 ? false : true
            if (isShow !== isBGon) setIsBGon(isShow)
        },
        [isBGon]
    )
    return (
        <NavBarContainer
            flexdirection={isRotated ? 'column' : 'row'}
            backgroundcolor={
                isBGon || isRotated ? 'rgba(41,41,46,1)' : 'rgba(41,41,46,0)'
            }
            style={aniNavBar}
        >
            <Logo />
            <MenuList
                rotate={setRotate}
                isVertical={isRotated}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
            />
            <Container>
                {isRotated ? null : (
                    <PhoneNumber
                        placeHolder="(718) 551 - 4894"
                        phoneNumber="718-551-4894"
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    />
                )}
                <BurgerButtonContainer
                    onClick={() => setRotate((state) => !state)}
                >
                    <Bar s={secondaryColor} p={primaryColor} style={aniBar1} />
                    <Bar
                        s={secondaryColor}
                        p={primaryColor}
                        style={{ ...aniBar2, margin: '6px 0' }}
                    />
                    <Bar s={secondaryColor} p={primaryColor} style={aniBar3} />
                </BurgerButtonContainer>
            </Container>
        </NavBarContainer>
    )
}
const NavBarContainer = styled(animated.div)`
    z-index: 99;
    width: 100%;
    display: flex;
    flex-direction: ${({ flexdirection }) => flexdirection};
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ backgroundcolor }) => backgroundcolor};
`

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Bar = styled(animated.div)`
    border: 0.5px solid ${({ s }) => s || '#000'};
    width: 35px;
    height: 5px;
    background-color: ${({ p }) => p || '#fff'};
    transition: 0.1s;
    box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.3);
`
const BurgerButtonContainer = styled.div`
    z-index: 99;
    margin-left: 20px;
    cursor: pointer;
`
