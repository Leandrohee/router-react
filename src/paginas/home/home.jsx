import React from "react"
import styled from 'styled-components'



export default function Home(){
    const Home = styled.div`
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    `

    return(
        <Home>
            <h1>Home</h1>
        </Home>
    )
}