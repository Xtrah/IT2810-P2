import styled from "styled-components"

interface NavbarProps{
    toggleTheme: () => void
}

const Navbar = ({toggleTheme}:NavbarProps) => {
    
    return(
        <>
            <Button  onClick={() => toggleTheme()}>Toggle mode</Button>
        </>
    )
}

export default Navbar

const Button = styled.button`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text}
`