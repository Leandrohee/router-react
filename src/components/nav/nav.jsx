import {Link} from 'react-router-dom'               //Link para mudar pagina sem refresh
import {styled} from 'styled-components'
import '../globalStyle/linkRouter.css'



export default function Nav (){
    
    const Nav = styled.nav`
        width: 160px;
        height: 100%;
        background-color: #526D82;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 1rem;
    `

    return(
        <Nav>
            <Link className='link__router' to='/'>Home</Link>                  
            <Link className='link__router' to='/contact'>Contact</Link>
        </Nav>
    )
}