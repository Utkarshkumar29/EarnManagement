import styled from 'styled-components'

export const RoadmapContainer=styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width:600px)
    {
        position: relative;
        top: -100px;
    }

    @media (max-width:450px)
    {
        top: -150px;
    }

    @media (max-width:400px)
    {
        top: -200px;
    }
`

export const RoadmapWrapper=styled.div`
    width: 100%;
    max-width: 1600px;
`

export const Box1Container=styled.div`
    display: flex;
    
`

export const Box11=styled.div`
    max-width: 275px;
    width: 100%;
    min-height: 300px;
    border: 2px solid #333;
    border-left: none;
    border-bottom: none;
    border-radius:0 40px;

    @media (max-width:900px)
    {
        max-width: 250px;
    }

    @media (max-width:785px)
    {
        max-width: 170px;
    }

    @media (max-width:600px)
    {
        max-width: 120px;
    }

    @media (max-width:500px)
    {
        max-width: 70px;
    }
`

export const RoadTextContainer=styled.div`
    position: relative;
    top: 100px;
    left: 40px;
    padding-right: 30px;
    max-width: 300px;
    width: 100%;
    white-space: nowrap;

    @media (max-width:600px)
    {
        white-space: normal;
        left: 20px;
        max-width: 300px;
    }

    @media (max-width:400px)
    {
        max-width: 220px;
    }
`

export const RoadmapHeading=styled.p`
    font-size: 80px;
    font-weight: 500;
    line-height: 88px;
    letter-spacing: 0.2px;
    width: 100%;
    white-space: nowrap;

    @media (max-width:700px)
    {
        font-size: 65px;
        line-height: 55px;
    }

    @media (max-width:500px)
    {
        font-size: 45px;
    }
`

export const RoadmapDescription=styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.2px;
    width: 100%;

    @media (max-width:700px)
    {
        font-size: 14px;
    }

    @media (max-width:700px)
    {
        font-size: 12px;
    }
`

export const Box12=styled.div`
    max-width: 500px;
    width: 100%;
`

export const Box2Container=styled.div`
    display: flex;
`

export const Box21=styled.div`
    max-width: 275px;
    width: 100%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;

    @media (max-width:900px)
    {
        max-width: 250px;
    }

    @media (max-width:785px)
    {
        max-width: 170px;
    }

    @media (max-width:600px)
    {
        max-width: 120px;
    }

    @media (max-width:500px)
    {
        max-width: 70px;
    }

    @media (max-width:400px)
    {
        max-width: 70px;
    }
`

export const WhiteBox=styled.div`
    max-width: 214px;
    width: 100%;
    min-height: 179px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 100px;
    transition: all 1s ease-in-out 0.4s;

    @media (max-width:750px)
    {
        max-width: 180px;
        width: 100%;
        min-height: 140px;
        left: 90px;
    }

    @media (max-width:600px)
    {
        min-width: 180px;
        width: 100%;
        min-height: 130px;
        border-radius: 35px;
    }

    @media (max-width:500px)
    {
        min-width: 120px;
        width: 100%;
        min-height: 100px;
        left: 60px;
        border-radius: 35px;
    }

    @media (max-width:380px)
    {
        min-width: 100px;
        width: 100%;
        min-height: 90px;
        left:  50px;
        border-radius: 20px;
    }
    

    &::after
    {
        content: "";
        max-width: 100px;
        width: 100%;
        min-height: 100px;
        border-radius: 100px;
        background: linear-gradient(rgb(21, 196, 198) 0%, rgb(12, 121, 244) 100%);
        position: absolute;
        border: 5px solid skyblue;
        transition: all 1s ease-in-out 0.4s;

        @media (max-width:750px)
        {
            max-width: 50px;
            width: 100%;
            min-height: 50px;
        }

        @media (max-width:380px)
        {
            max-width: 30px;
            width: 100%;
            min-height: 30px;
        }
    }
`

export const Box22=styled.div`
    max-width: 600px;
    width: 100%;
    border: 2px solid #333;
    border-right: none;
    border-top: none;
    border-radius:0 40px;
    position: relative;
    left: -1.5px;

    @media (max-width:1115px)
    {
        max-width: 300px;
    }

    @media (max-width:785px)
    {
        max-width: 250px;
    }

    @media (max-width:600px)
    {
        max-width: 190px;
    }

    @media (max-width:320px)
    {
        max-width: 150px;
    }
`

export const TextWrapper=styled.div`
    position: absolute;
    direction: ${props => props.direction};
    padding-right: ${props => props.paddingRight};
    padding-left: ${props => props.paddingLeft};
    top: ${props=>props.top};

    @media (max-width:600px)
    {
        padding-right: ${props=>props.side600};
        padding-left: ${props=>props.distance600};
        left: ${props=>props.left600};
        
    }

    @media (max-width:500px)
    {
        padding-right: ${props=>props.side500};
        padding-left: ${props=>props.distance500};
        left: ${props=>props.left500};
        
    }

    @media (max-width:380px)
    {
        padding-right: ${props=>props.side380};
        padding-left: ${props=>props.distance380};
        left: ${props=>props.left380};
    }

    @media (max-width:320px)
    {
        max-width: ${props=>props.maxWidth320};
    }
`

export const Year=styled.p`
    font-size: 70px;
    font-weight: 100;

    @media (max-width:900px)
    {
        font-size: 65px;
    }

    @media (max-width:500px)
    {
        font-size: 60px;
    }

    @media (max-width:320px) 
    {
        font-size: 40px;
    }
`

export const Quater=styled.p`
    font-size: 33px;
    font-weight: 500;   
    color: rgba(21, 196, 198, 1);

    @media (max-width:900px)
    {
        font-size: 29px;
    }

    @media (max-width:550px)
    {
        font-size: 25px;
        font-weight: 500;
    }

    @media (max-width:320px) 
    {
        font-size: 23px;
    }
`

export const Q1Description=styled.p`
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.39);

    @media (max-width:500px)
    {
        font-size: 15px;
    }

    @media (max-width:550px)
    {
        font-size: 14px;
    }

    @media (max-width:320px) 
    {
        font-size: 12px;
        width: 100px;
    }
`

export const Box23=styled.div`

`

export const Box3Container=styled.div`
    max-height: 250px;
`

export const Box3Wrapper=styled.div`
    display: flex;
    gap: 0px;
`

export const Box3=styled.div`
    display: flex;
    align-items: center;

    &:nth-child(1)
    {
        width: 100%;
        flex: 2;
        max-width: 888px;
    }

    &:nth-child(2)
    {
        max-width: 1500px;
        width: 100%;
        flex:1;
        border: 2px solid #333;
        border-left:none;
        border-radius:0 40px 40px 0;
        position: relative;
        top: -2px;
        left:-150px;
        display:flex;
        justify-content:flex-end;

        @media (max-width:840px)
        {
            left: -50px;
        }

        @media (max-width:600px)
        {
            max-width: 300px;
            left: -100px;
        }

        @media (max-width:480px)
        {
            left: -60px;
        }

        @media (max-width:380px)
        {
            left: -45px;
        }

        @media (max-width:320px)
        {
            left: -36px;
        }
    }

    &:nth-child(3)
    {
        max-width: 100px;
        width:100%;
        min-height: 250px;

        @media (max-width:600px)
        {
            max-width: 10px;
            left: -100px;
        }
    }
`   

export const Box4Container=styled.div`
    max-height: 250px;
`

export const Box4Wrapper=styled.div`
    display: flex;    
`

export const Box4=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center; 

    &:nth-child(1)
    {
        max-width: 300px;
        width: 100%;
        min-height: 250px;

        @media (max-width:600px)
        {
            max-width: 200px;
        }   

        @media (max-width:480px)
        {
            max-width: 170px;
        }  
        
        @media (max-width:480px)
        {
            max-width: 170px;
        }   
    }

    &:nth-child(2)
    {
        max-width: 600px;
        width: 100%;
        flex:1;
        border: 2px solid #333;
        border-right: none;
        border-radius: 40px 0 0 40px;
        position: relative;
        top:100px;
        left: -20px;
        padding-right:200px;

        @media (max-width:1115px)
        {
            max-width: 350px;
            left: -50px;
        }

        @media (max-width:785px)
        {
            max-width: 250px;
            left: -130px;
        }

        @media (max-width:600px)
        {
            max-width: 200px;
            left: -70px;
        }

        @media (max-width:480px)
        {
            left: -100px;
        }

        @media (max-width:380px)
        {
            left: -115px;
        }

        @media (max-width:320px)
        {
            left: -72px;
            max-width: 190px;
        }
    }
`

export const CircleContainer=styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 100px;
    position: absolute;
    left: 800px;
    
    @media (max-width:1300px)
    {
        position: relative;
        left: 70px;
        top: 80px;
    }

    @media (max-width:850px)
    {
        left: -30px;
    }

    @media (max-width:670px)
    {
        left: 70px;
        max-width: 260px;
    }

    @media (max-width:400px)
    {
        left: 0px;
    }
    `

export const BlackCircle=styled.img`
    background: radial-gradient(55.76% 58.76% at 50% 50%, rgba(0, 56, 255, 0.24) 0%, rgba(0, 133, 255, 0) 100%);

    @media (max-width:670px)
    {
        max-width: 300px;
        width: 100%;
    }
`

export const CircleWrapper=styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:1300px)
    {
        max-height: 0px;
    }
`

export const Circle=styled.div`
    max-width: 230.74px;
    width: 100%;
    min-height: 230.74px;
    background: linear-gradient(172.31deg, #0067AA 5.95%, #003482 53.61%, #020F66 97.92%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    position: relative;
    top: -355px;
    left: -12px;

    @media (max-width:1300px)
    {
        top: -242px;
    }

    @media (max-width:670px)
    {
        max-width: 130px;
        min-height: 130px;
        top: -135px;
        left: 2px;
    }
    @media (max-width:325px)
    {
        top: -130px;
        max-width: 122px;
        min-height: 122px;
    }

    &::after
    {
        content: "";
        max-width: 200px;
        width: 100%;
        min-height: 200px;
        background-color: black;
        z-index: 4;
        position: absolute;
        border-radius: 100px;

        @media (max-width:670px)
        {
            max-width: 110px;
            width: 100%;
            min-height: 110px;
        }

        @media (max-width:325px)
        {
            max-width: 100px;
            min-height: 100px;
        }   
    }

    img
    {
        z-index: 100;
        max-width: 220px;
        width: 100%;
        max-height: 220px;

        @media (max-width:670px)
        {
            max-width: 110px;
            width: 100%;
            max-height: 110px;
        }
    }
`