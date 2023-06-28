import { MenuItem, MenuList, Paper } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CreateIcon from '@mui/icons-material/Create';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BrushIcon from '@mui/icons-material/Brush';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletIcon from '@mui/icons-material/Wallet';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import '@fontsource/dosis/600.css';

function SideMenu({ handleClick }) {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <Paper>
            <MenuList sx={{ position: 'fixed', width: '4vw', paddingTop: '15vh', bgcolor: 'black', zIndex: 99 }} >
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("inicial")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/inicial"
                        onClick={() => handleClick("all")}>
                        <HomeIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "inicial" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Inicial</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("escultura")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/esculturas"
                        onClick={() => handleClick("escultura")}>
                        <CarpenterIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "escultura" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Esculturas</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("pintura")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/pinturas"
                        onClick={() => handleClick("pintura")}>
                        <ColorLensIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "pintura" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Pinturas</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("gravura")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/gravuras"
                        onClick={() => handleClick("gravura")}>
                        <CreateIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "gravura" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Gravuras</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("3D")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/modelagem3D"
                        onClick={() => handleClick("3D")}>
                        <ViewInArIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "3D" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Modelagem 3D</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("digital")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/pinturadigital"
                        onClick={() => handleClick("digital")}>
                        <BrushIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "digital" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Pintura Digital</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("animacao")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/animacao"
                        onClick={() => handleClick("animacao")}>
                        <LocalMoviesIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "animacao" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Animação</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("bio")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/bio">
                        <AccountCircleIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "bio" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Bio</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter("contato")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/contato">
                        <WalletIcon sx={{ textDecoration: 'none', color: 'white' }} />
                        <p style={{
                            padding: '0.5rem',
                            paddingInline:'1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "contato" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Contato</p>
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}

export default SideMenu;