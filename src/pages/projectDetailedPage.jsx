import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import { Typography } from '@mui/material';

function ProjectDetailedPage() {
    const { param1, param2, param3, param4, param5, param6, param7 } = useContext(AppContext);

    console.log(param7)
    return (
        <div style={{ backgroundColor: 'black', paddingTop: '0.5vh', height: 'window.innerHeight' }}>
            <p style={{ fontFamily: 'Cinzel', fontSize: '6vh', color: 'white', textAlign: 'center', textDecorationLine: 'underline', textUnderlineOffset: '2vh' }}>{param1}</p>
            <div style={{ display: 'flex', width: '100%', paddingInline: '3vw' }}>
                <div style={{ marginInline: '2vw', width: '100%', textAlign: 'justify' }} >
                    <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white' }}>Sobre</p>
                    <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white' }}>{param2}</p>


                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white', marginRight: '2vw' }}>Ficha Técnica</p>

                            {(param3.map((p, index) => {
                                return (
                                    <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white', marginRight: '2vw' }}
                                        key={index}>
                                        {p}
                                    </p>
                                )
                            }))}
                        </div>

                        <div>
                            <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white', marginLeft: '2vw' }}>Tags</p>
                            <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white', marginLeft: '2vw' }}>#{param4}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
                        <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white', marginLeft: '2vw' }}>Link para o projeto</p>
                        <a style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white', marginLeft: '2vw' }} href={param7}>{param7}</a>
                    </div>
                </div>
                <div style={{ height: '100%', paddingBlock: '2vh' }}>
                    <img
                        src={param5}
                        alt={param1}
                        loading="lazy"
                        style={{ width: '100vw', height: '100vh', maxWidth: '800px', maxHeight: '800px', objectFit: 'contain' }}
                    />
                </div>
            </div>
            {/* {
                param6.length > 0 ?
                    <>
                        <hr style={{
                            borderTop: '1px solid white',
                            margin: '4vh',
                        }} />
                        <div style={{ display: 'flex', maxWidth: '100%', flexWrap: 'wrap', justifyContent: param7.length === 1 ? 'center' : 'space-evenly', marginInline: '6vw', paddingBlock: '2vh' }}>
                            {(param7.map((p, index) => {
                                return (
                                    param3[0] === "video" ?
                                        (
                                            <iframe
                                                title="param1"
                                                src={p}
                                                style={{ top: 0, left: 0, width: '30%', height: '30%' }}
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <img
                                                src={p}
                                                alt={param1}
                                                loading="lazy"
                                                style={{ width: '30%', objectFit: 'cover', padding: '2vh' }}
                                                key={index} />
                                        )

                                );
                            }

                            ))}
                        </div>
                    </>
                    :
                    <></>
            } */}
            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
            }} />
            <Typography style={{
                fontFamily: 'Dosis', fontSize: '1.25rem', textDecoration: 'none', color: 'white', textAlign: 'right', paddingInline: '4vh', paddingBlock: '2vh', marginBlock: '-5vh'
            }}
            >Copyright © 2023 by Julio Modanez</Typography>
        </div>
    )
}

export default ProjectDetailedPage