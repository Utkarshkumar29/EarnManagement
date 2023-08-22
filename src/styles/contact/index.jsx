import styled from 'styled-components'

export const ContactContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width:600px)
    {
        position: relative;
        top: -199.5px;
    }
`

export const ContactWrapper=styled.div`
    width: 100%;
    max-width: 1550px;
    display: flex;
    position: relative;
    top: -6.5px;
`

export const Box51=styled.div`
    max-width: 300px;
    width: 100%;
    width: 100%;
    min-height: 400px;

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
`

export const Box52=styled.div`
    max-width: 600px;
    width: 100%;
    min-height: 700px;
    border: 2px solid #333;
    border-right: none;
    border-bottom: none;
    border-radius: 40px 0 0 0;
    position: relative;
    top:-3px;
    left: -30px;
    padding: 50px;

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
            left: -110px;
        }

`

export const ContactHeading=styled.p`
    font-size: 80px;
    font-weight: 500;
    line-height: 88px;
    letter-spacing: 0.2px;

    @media (max-width:950px)
    {
        font-size: 60px;
        line-height: 60px;
    }

    @media (max-width:650px)
    {
        font-size: 50px;
    }

    @media (max-width:500px)
    {
        position: relative;
        left: -30px;
    }
`

export const ContactDescription=styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.2px;

    @media (max-width:950px)
    {
        font-size: 12px;
        line-height: 15px;
    }

    @media (max-width:500px)
    {
        position: relative;
        left: -30px;
    }
`

export const InputContainer=styled.div`
    width: 100%;
`


export const TextWrapper=styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 500px;
    display: flex;
    flex-direction: row;
    gap: 250px;
    position: relative;
    top: 100px;

    @media (max-width:1250px)
    {
        flex-direction: column;
        gap: 50px;
    }

    @media (max-width:500px)
    {
        left: -30px;
    }
`

export const Info=styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    
    @media (max-width:1250px)
    {
        gap: 20px;
    }
`

export const Submit=styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;

    @media (max-width:1250px)
    {
        gap: 40px;
    }
`

export const Text=styled.div`
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.1px;
    white-space: nowrap;

    @media (max-width:600px)
    {
        font-size: 16px;
    }
`

export const Input=styled.input`
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    border: none;
    border-bottom: 2px solid #333;
    width: 100%;
    min-width: 400px;

    @media (max-width:650px)
    {
        min-width: 200px;
    }
`

export const CirlceWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Circle=styled.div`
    max-width: 150px;
    width: 100%;
    min-height: 150px;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    position: relative;
    left: 600px;

    @media (max-width:1250px)
    {
        left: 0px;
    }

    @media (max-width:600px)
    {
        left: 0px;
        max-width: 100px;
        min-height: 100px;
        text-align: center;
    }
`