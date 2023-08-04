import React from "react";
import profile from "../images/profile.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AlternateEmail } from "@mui/icons-material";

function Bio() {

    return (
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'black' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ paddingInline: '6rem', marginLeft: '5rem', marginTop: '3rem', fontSize: '1.25rem', textAlign: 'justify', lineHeight: '2rem', letterSpacing: '0.025em', color: 'white', fontFamily: 'Dosis' }}>
                    Artista multimidia, com interesse tanto por áreas manuais e
                    tradicionais - como escultura, desenho e pintura - quanto por áreas
                    voltadas a midias digitais, como modelagem e pintura digitais,
                    animação e programação criativa. Nascido em 1995, desde pequeno sempre
                    gostou de jogos, filmes ligados a mundos fantasiosos, desenhar e criar
                    histórias.
                </p>

                <div style={{
                    marginLeft: '10rem', marginTop: '8rem', display: 'grid',
                    gridTemplateColumns: 'auto auto auto'
                }}>
                    <a
                        href="https://www.instagram.com/juliomodanez/"
                        style={{
                            display: 'flex', alignItems: 'center', marginTop: '3rem', fontSize: '1.5rem', textDecoration: 'none', color: 'white',
                            fontFamily: 'Dosis'
                        }}>
                        {<InstagramIcon style={{ marginRight: '1rem' }} />} Instagram
                    </a>
                    <a
                        href="https://www.twitter.com/juliomodanez/"
                        style={{ display: 'flex', alignItems: 'center', marginTop: '3rem', fontSize: '1.5rem', textDecoration: 'none', color: 'white', fontFamily: 'Dosis' }}
                    >
                        {<TwitterIcon style={{ marginRight: '1rem' }} />} Twitter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/julio-modanez-962079228/"
                        style={{ display: 'flex', alignItems: 'center', marginTop: '3rem', fontSize: '1.5rem', textDecoration: 'none', color: 'white', fontFamily: 'Dosis' }}
                    >
                        {<LinkedInIcon style={{ marginRight: '1rem' }} />} Linkedin
                    </a>
                </div>
                <div style={{display:'flex', justifyContent:'center'
                }}> 
                    <p
                        style={{ display: 'flex', alignItems: 'center', marginTop: '3rem', fontSize: '1.5rem', textDecoration: 'none', color: 'white', fontFamily: 'Dosis' }}
                    >
                        {<AlternateEmail style={{ marginRight: '1rem' }} />} julio.modanez@gmail.com
                    </p>
                </div>
            </div>
            <img src={profile} alt="" style={{ height: '100vh' }} />
        </div>
    );
}

export default Bio;