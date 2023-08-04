import { MenuItem, MenuList, Paper, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CreateIcon from '@mui/icons-material/Create';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BrushIcon from '@mui/icons-material/Brush';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TokenIcon from '@mui/icons-material/Token';
import '@fontsource/dosis/600.css';
import InfoIcon from '@mui/icons-material/Info';

function SideMenu({ handleClick }) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [infoHovered, setInfoHovered] = useState(false);


    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleInfoMouseEnter = () => {
        setInfoHovered(true);
    };

    const handleInfoMouseLeave = () => {
        setInfoHovered(false);
    };

    return (
        <Paper>
            <MenuList sx={{ position: 'fixed', height: '100vh', width: '4vw', paddingTop: '25vh', bgcolor: 'black', zIndex: 99 }} >
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/inicial"
                        onClick={() => handleClick("all")}>
                        <HomeIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("inicial")}
                            onMouseLeave={handleMouseLeave} />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/esculturas"
                        onClick={() => handleClick("escultura")}>
                        <CarpenterIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("escultura")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/pinturas"
                        onClick={() => handleClick("pintura")}>
                        <ColorLensIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("pintura")}
                            onMouseLeave={handleMouseLeave} />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/gravuras"
                        onClick={() => handleClick("gravura")}>
                        <CreateIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("gravura")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/modelagem3D"
                        onClick={() => handleClick("3D")}>
                        <ViewInArIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("3D")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                {/* <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/pinturadigital"
                        onClick={() => handleClick("digital")}>
                        <BrushIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("digital")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/animacao"
                        onClick={() => handleClick("animacao")}>
                        <LocalMoviesIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("animacao")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
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
                </MenuItem> */}
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/projetos"
                        onClick={() => handleClick("projetos")}>
                        <TokenIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("projetos")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "projetos" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Projetos</p>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link style={{ display: 'flex', color: 'white', alignItems: 'center', textDecoration: 'none' }}
                        to="/bio">
                        <AccountCircleIcon sx={{ textDecoration: 'none', color: 'white' }}
                            onMouseEnter={() => handleMouseEnter("bio")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <p style={{
                            padding: '0.15rem',
                            paddingInline: '1rem',
                            margin: '0',
                            marginLeft: '1rem',
                            backgroundColor: 'black',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: hoveredItem === "bio" ? 1 : 0,
                            borderRadius: '0.5rem',
                            fontFamily: 'Dosis',
                            fontSize: '1.45rem',
                        }}
                        >Bio | Contato</p>
                    </Link>
                </MenuItem>
                <MenuItem
                    onMouseEnter={handleInfoMouseEnter}
                    onMouseLeave={handleInfoMouseLeave}
                    style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                    <Tooltip title="Info" arrow placement="top">
                        <InfoIcon sx={{
                            position: 'fixed',
                            bottom: '1rem',
                            color: 'white',
                            fontSize: '1.45rem',
                            cursor: 'pointer',
                        }} />
                    </Tooltip>
                </MenuItem>
            </MenuList>
            {infoHovered && (
                <div style={{ position: 'fixed', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'black', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', zIndex: 100 }}>
                    O site ainda está em construção, devido a isso você pode se deparar com alguns resultados inesperados, que já estão sendo corrigidos. Obrigado.
                </div>
            )}
        </Paper>
    );
}

export default SideMenu;