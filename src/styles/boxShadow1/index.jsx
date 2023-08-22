import styled from 'styled-components'

export const Box=styled.div`
    max-width: 214px;
    width: 100%;
    min-height: 133px;
    background: rgba(29, 51, 64, 0.45);
    backdrop-filter: blur(100px);
    border-radius:32px ;
    position: relative;
    left: -110px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out 0.4s;

    &::after
    {
        content: "";
        max-width: 90px;
        width: 100%;
        min-height: 90px;
        border-radius: 100px;
        position: absolute;
        background: linear-gradient(180deg, #778282 0%, #2F3842 100%),
        linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
        border: 5px solid #979595;
        transition: all 0.5s ease-in-out 0.4s;

        @media (max-width:750px)
        {
            max-width: 50px;
            width: 100%;
            min-height: 50px;
        }

        @media (max-width:380px)
        {
            max-width: 20px;
            width: 100%;
            min-height: 20px;
        }
    }

    @media (max-width:1115px)
    {
        min-width: 214px;
    }

    @media (max-width:750px)
    {
        min-width: 170px;
        width: 100%;
        min-height: 140px;
        left:  -85px;
    }

    @media (max-width:500px)
    {
        min-width: 120px;
        width: 100%;
        min-height: 110px;
        left:  -60px;
    }

    @media (max-width:380px)
    {
        min-width: 80px;
        width: 100%;
        min-height: 70px;
        left:  -40px;
        border-radius: 20px;
    }
`