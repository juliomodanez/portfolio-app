import { MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";
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

function SideMenu({ handleClick }) {
    return (
        <Paper sx={{ position: 'fixed', width: '4vw', paddingTop: '25vh', bgcolor: 'black', zIndex: 99 }}>
            <MenuList            >
                <MenuItem>
                    <Link to="/inicial" onClick={() => handleClick("all")} >
                        <HomeIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/esculturas" onClick={() => handleClick("escultura")}>
                        <CarpenterIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/pinturas" onClick={() => handleClick("pintura")}>
                        <ColorLensIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/gravuras" onClick={() => handleClick("gravura")}>
                        <CreateIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/modelagem3D" onClick={() => handleClick("3D")}>
                        <ViewInArIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/pinturadigital" onClick={() => handleClick("digital")}>
                        <BrushIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/animacao" onClick={() => handleClick("animacao")}>
                        <LocalMoviesIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/bio">
                        <AccountCircleIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/contato">
                        <WalletIcon sx={{ textDecoration: 'none', color: 'white' }} />
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}

export default SideMenu;