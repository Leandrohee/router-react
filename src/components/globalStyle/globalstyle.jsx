import {createGlobalStyle} from 'styled-components'



export default function GlobalStyle(){
	
	const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		text-decoration: none;
		box-sizing: border-box;
		font-family: 'Courier Prime', monospace;
	}
	`

    return(
        <GlobalStyle/>
    )
}
