import styled from 'styled-components'

export const FooterContainer=styled.div`
    width: 100%;
    text-align: center;

    @media (max-width:600px)
    {
        position: relative;
        top: -150px;
        max-height: 550px;
    }

    @media (max-width:500px)
    {
        position: relative;
        top: -150px;
        max-height: 510px;
    }
`

export const FooterWrapper=styled.div`
    max-width: 1600px;
    width: 100%;
    min-height: 200px;
    border-top: 2px solid #333;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 250px;

    @media (max-width:1150px)
    {
        min-height: 300px;
    }

    @media (max-width:950px)
    {
        flex-direction: column;
        gap: 100px;
    }

    @media (max-width:500px)
    {
        
    }
`

export const InfoWrapper=styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    position: relative;
    top: 100px;

    @media (max-width:950px)
    {
        position: relative;
        top: 100px;
    }

    @media (max-width:500px)
    {
        gap: 50px;
    }

    @media (max-width:350px)
    {
        gap: 30px;
    }
`

export const TipsWrapper=styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
`

export const FingertipHeading=styled.p`
`

export const Fingertipcontent=styled.p`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Content=styled.p`

`

export const LinkContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;
    top: 100px;

    @media (max-width:950px)
    {
        gap: 30px;
    }
`

export const LinkWrapper=styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    @media (max-width:950px)
    {
        align-items: center;
        justify-content: center;
    }
`

export const DiscordWrapper=styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`

export const MobileWrapper=styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`

export const IconWrapper=styled.div`
    display: flex;
    gap: 50px;
    
    @media (max-width:950px)
    {
        align-items: center;
        justify-content: center;
    }
`

export const Circlecontainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const CircleWrapper=styled.div`
    max-width: 100px;
    width: 100%;
    position: relative;
    left: -40px;
    top: 60px;
`

export const Circle=styled.div`
    max-width: 100px;
    width: 100%;
    min-height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 100px;
    color: black;    

    @media (max-width:500px)
    {
        max-width: 70px;
        min-height: 70px;
        font-size: 10px;
        display: flex;
        gap: 5px;
        position: relative;
        left: 67px;

        img
        {
            width: 15px;
        }
    }
`

export const CopyrightWrapper=styled.div`
`

export const Copyright=styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 10px;
    padding-top: 70px;
`   