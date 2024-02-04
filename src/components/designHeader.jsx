import { Link, useLocation } from "react-router-dom";
import Logo from '../images/logo.svg';

function DesignHeader() {
    const location = useLocation();

    const linkStyle = {
        textDecoration: 'none',
    };

    const activeLinkStyle = {
        textDecoration: 'underline',
        color: 'black',
    };


    return (
        <div style={{paddingInline: '2vh', display: 'flex', alignItems: 'center', height: '8vh', borderBottom: 'solid', borderBottomColor: 'black', borderBottomWidth: '6px', justifyContent: 'space-between' }}>
            <img src={Logo} alt="Logo Julio Modanez. Baseada nas letras iniciais de seu nome, formada por uma letra J e uma letra M." style={{ width: 'auto', height: '150%', marginBottom: '15px' }} />

            <div style={{ display: 'flex', justifyContent: "space-between", width: '15%', marginRight: '20px' }}>
                <Link to="/trabalhos" style={location.pathname === '/trabalhos' ? activeLinkStyle : linkStyle}>Trabalhos</Link>
                <Link to="/sobre" style={location.pathname === '/sobre' ? activeLinkStyle : linkStyle}>Sobre</Link>
                <Link to="/contato" style={location.pathname === '/contato' ? activeLinkStyle : linkStyle}>Contato</Link>
            </div>
        </div>
    );
}

export default DesignHeader;