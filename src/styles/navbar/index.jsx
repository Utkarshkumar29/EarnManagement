import styled from 'styled-components'

export const Logo=styled.img`
    margin-left: 40px;
    margin-top: 10px;

    @media (max-width:400px)
    {
        margin-left: 30px;
    }

    @media (max-width:350px)
    {
        margin-left: 10px;
    }
`

export const Nav=styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;   
`

export const Menuwrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    margin-top: 30px;

    @media (max-width:700px)
    {
        display: none;
    }
`
export const MenuContent=styled.li`
    list-style: none;
`
export const Linkwrapper=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top:22px;
    margin-right: 30px;
    border: 2px solid #333;
    border-radius: 30px;
    height: 17%;
    width: 70%;
    padding: 15px;
    padding-bottom: 25px;

    @media (max-width:700px)
    {
        display: none;
    }
`

export const Bar=styled.p`
    @media (min-width: 701px)
    {
        display: none;
    }

    @media (max-width:700px)
    {
        position: absolute;
        left: 89%;
        top: 8%;
    }

`
export const HamburgerMenu=styled.div`
    background-color: black;
    max-width: 100%;
    width: 100%;
    height: 800px;
    z-index: 100;
    position: absolute;
    top:-5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    animation: slide 1s ease-out;
    padding-top: 180px;
    gap: 30px;

    @keyframes slide {
        0%
        {
            transform: translateY(-100px);
        }
        100%
        {
            transform: translateY(0px);
        }
    }
`

export const HamContent=styled.div`
    color: #107BEE;
    position: relative;
`
export const Link=styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 40px;
`

export const Cross=styled.div`
    position: absolute;
    top: 10%;
    left: 86%;
    color: #359DFD;
`