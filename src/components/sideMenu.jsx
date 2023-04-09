import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SideMenu({ handleClick }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const click = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={click}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <Link to="/" onClick={() => handleClick("all")} >
                        Página Inicial
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/esculturas" onClick={() => handleClick("escultura")}>
                        Esculturas
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/pinturas" onClick={() => handleClick("pintura")}>
                        Pinturas
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/gravuras" onClick={() => handleClick("gravura")}>
                        Gravuras
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/modelagem3D" onClick={() => handleClick("3D")}>
                        Modelagem 3D
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/pinturadigital" onClick={() => handleClick("digital")}>
                        Pintura Digital
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/animacao" onClick={() => handleClick("animacao")}>
                        Animação
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/bio">
                        Bio
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/contato">
                        Contato
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default SideMenu;