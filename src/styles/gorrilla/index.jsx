import styled from 'styled-components'

export const HeroContainer=styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const HeroWrapper=styled.div`
    max-width: 1300px;
    width: 100%;
    gap: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:1300px)
    {
        flex-direction: column;
        text-align: center;
    }
`

export const HeroLeft=styled.div`
    max-width: 600px;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Guild=styled.div`
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: column;
    gap:30px;
    

    @media (max-width:1300px)
    {
        gap: 30px;
        top: 40px;
    }
`

export const GuildHeading=styled.p`
    font-size: 80px;
    margin: 0px;
    font-weight: 500;

    @media (max-width:1300px)
    {
        font-size: 70px;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (max-width:500px)
    {
        font-size: 65px;
    }

    @media (max-width:535px)
    {
        font-size: 55px;
    }

    @media (max-width:400px)
    {
        font-size: 45px;
    }
`

export const GuildDescription=styled.div`
    font-size: 20px;
    font-weight: 400;
    margin: 0px;

    @media (max-width:1300px)
    {
        
        padding-left: 10px;
        padding-right: 10px;
    }


    @media (max-width:535px)
    {
        font-size: 13px;
    }

    @media (max-width:400px)
    {
        font-size: 11px;
    }
`
export const InputContainer=styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    
    @media (max-width:1300px)
    {
        justify-content: center;
    }

    @media (max-width:320px)
    {
        padding: 10px;
    }
`

export const InputWrapper=styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid #333;
    border-radius: 40px;
    max-width: 420px;
    width: 100%;
    align-items: center;
    padding: 3px;
    justify-content: space-between;

    @media (max-width:500px)
    {
        max-width: 320px;
        width: 100%;
    }
`

export const Input=styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: white;
    line-height: 40px;
    border-right: 2px solid #333;
    padding-right: 40px;
    padding-left: 20px;

    @media (max-width:500px)
    {
        padding-right: 0px;
        font-size: 10px;
    }
`

export const ArrowContainer=styled.div`
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    width: 50px;
    height: 50px;
    border-radius: 50px;

    @media (max-width:500px)
    {
        left: 22px;
        width: 40px;
        height: 40px;
    }

    @media (max-width:320px)
    {
        left: 3.5px;
        top: -0.5px;
    }
`

export const ArrowImage=styled.img`
    position: relative;
    top: 14px;
    left: 15px;

    @media (max-width:1300px)
    {
        left: 2.5px;
        top: 15px;
    }

    @media (max-width:500px)
    {
        width: 15px;
        top: 13px;
    }
`

export const HeroRight=styled.div`
    
    max-width: 1300px;
    width: 100%;
    min-height: 550px;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
    display: flex;
    flex: 1 1 0%;
    position: relative;
    transition: all 0.5s ease-in-out 0s;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
    
    @media (max-width:1300px)
    {
        max-width: 600px;
        width: 100%;
    }

    @media (max-width:600px)
    {
        max-width: 400px;
        width: 100%;
    }

    img{
           width: 100%;
           height: 100%;
           position: relative;
           transition: all 0.5s ease-in-out 0;

           @media (max-width:1300px)
           {
                max-width: 600px;
                width: 100%;
           }

           @media (max-width:600px)
           {
                object-fit: contain;
                max-width: 400px;
                width: 100%;
           }
    }   
`

export const TextWrapper=styled.div`
    position: absolute;
    max-width: 200px;
    width: 100%;

    @media (max-width:600px)
    {
        max-width: 140px;
        width: 100%;
    }    
`

export const TextBox1=styled.div`
    position: relative;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 15px;
    font-size: 14px;
    transition: all 0.5s ease-in-out 0s;
    top: 120px;
    left: 50px;

    @media (max-width:1300px)
    {
        max-width: 170px;
        width: 100%;
        top: 130px;
        left: 60px;
        font-size: 12px;
    }

    @media (max-width:600px)
    {
        font-size: 10px;
        max-width: 150px;
        width: 100%;
        left: 20px;
        font-size: 13px;
        padding: 10px;
        top: 60px;
    }

    @media (max-width:400px)
    {
        font-size: 8px;
        top: 65px;
        left: 50px;
        max-width: 100px;
    }

    @media (max-width:376px)
    {
        left: 35px;
    }

    @media (max-width:325px)
    {
        left: 20px;
        text-align: left;
        padding: 10px;
    }
`

export const TextBox2=styled.div`
    position: relative;
    width: 100%;
    max-width: 243px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 15px;
    font-size: 14px;
    transition: all 0.5s ease-in-out 0s;
    top: 30px;
    left: 420px;

    @media (max-width:1300px)
    {
        max-width: 170px;
        top: 20px;
        left: 390px;
        font-size: 12px;
    }

    @media (max-width:600px)
    {
        font-size: 10px;
        max-width: 150px;
        width: 100%;
        top: 0px;
        left: 260px;
        font-size: 13px;
        padding: 10px;
    }

    @media (max-width:400px)
    {
        font-size: 8px;
        left: 260px;
        top: 5px;
        max-width: 100px;
    }

    @media (max-width:376px)
    {
        left: 250px;
    }

    @media (max-width:325px)
    {
        top: -5px;
        left: 210px;
    }
`

export const TextBox3=styled.div`
    position: relative;
    width: 100%;
    max-width: 243px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 15px;
    font-size: 14px;
    transition: all 0.5s ease-in-out 0s;
    top: 170px;
    left: 80px;

    @media (max-width:1300px)
    {
        max-width: 170px;
        top: 140px;
        left: 90px;
        font-size: 12px;
    }

    @media (max-width:600px)
    {
        font-size: 10px;
        max-width: 150px;
        width: 100%;
        top:40px;
        left: 20px;
        font-size: 13px;
        padding: 10px;
    }

    @media (max-width:400px)
    {
        max-width: 100px;
        font-size: 8px;
        top: 85px;
        left: 65px;
    }

    @media (max-width:376px)
    {
        left: 50px;
        top: 70px;
    }

    @media (max-width:325px)
    {
        top: 50px;
        left: 30px;
    }
`

export const TextBox4=styled.div`
    position: relative;
    width: 100%;
    max-width: 243px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 15px;
    font-size: 14px;
    transition: all 0.5s ease-in-out 0s;
    top: 80px;
    left: 430px;

    @media (max-width:1300px)
    {
        max-width: 170px;
        top: 50px;
        left: 390px;
        font-size: 12px;
    }

    @media (max-width:600px)
    {
        font-size: 10px;
        max-width: 100px;
        width: 100%;
        top: -30px;
        left: 260px;
        font-size: 13px;
        padding: 10px;
    }

    @media (max-width:400px)
    {
        font-size: 8px;
        max-width: 80px;
        left: 260px;
        top: 30px;
    }

    @media (max-width:376px)
    {
        top: 25px;
        left: 245px;
    }

    @media (max-width:320px)
    {
        top: -5px;
        left: 210px;
    }
`

export const Coin=styled.img`
    position: absolute;
    max-width: 80px;
    width: 100%;
    max-height: 80px;
    top: 0px;
    left: 300px;

    @media (max-width: 1300px)
    {
        object-fit: contain;
        max-width: 80px;
        width: 100%;
        min-height: 70px;
        top: -15px;
        left: 216px;
    }     
    
    @media (max-width:600px)
    {
        max-width: 60px;
        max-height: 40px;
        top: -120px;
        left: 140px;
    }

    @media (max-width:400px)
    {
        object-fit: contain;
        top: -45px;
        left: 137px;
    }

    @media (max-width:376px)
    {
        left: 120px;
        top: -60px;
    }

    @media (max-width:325px)
    {
        top: -90px;
        left: 100px;
    }
`

export const StackofCoin1=styled.img`
    max-width: 100px;
    width: 100%;
    max-height: 100px;
    position: absolute;
    top: 100px;
    left: 215px;

    @media (max-width: 1300px)
    {
        object-fit: contain;
        max-width: 90px;
        max-height: 90px;
        top: -20px;
        left: 220px;
    }
    
    @media (max-width:600px)
    {
        max-width: 60px;
        max-height: 60px;
        top: -125px;
        left: 140px;
    }

    @media (max-width:400px)
    {
        top: -50px;
        left: 140px;
    }

    @media (max-width:376px)
    {
        top: -65px;
        left: 120px;
    }

    @media (max-width:325px)
    {
        top: -100px;
        left: 100px;
    }
`

export const StackofCoin2=styled.img`
    max-width: 70px;
    width: 100%;
    max-height: 70px;
    position: absolute;
    top: 19px;
    left: 370px;

    @media (max-width: 1300px)
    {
        object-fit: contain;
        max-width: 60px;
        max-height: 60px;
        top: -90px;
        left: 273px;
    }  
    
    @media (max-width:600px)
    {
        max-width: 40px;
        max-height: 40px;
        top: -175px;
        left: 176px;
    }

    @media (max-width:400px)
    {
        top: -100px;
        left: 175px;
    }

    @media (max-width:376px)
    {
        left: 155px;
        top: -115px;
    }

    @media (max-width:325px)
    {
        top: -150px;
        left: 135px;
    }
`