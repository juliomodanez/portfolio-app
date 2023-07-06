import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import { Typography } from '@mui/material';

function DetailedPage() {
    const { param1, param2, param3, param4, param5, param6, param7 } = useContext(AppContext);

    return (
        <div style={{ backgroundColor: 'black', paddingTop: '0.5vh', height: 'window.innerHeight' }}>
            <p style={{ fontFamily: 'Cinzel', fontSize: '6vh', color: 'white', textAlign: 'center', textDecorationLine: 'underline', textUnderlineOffset: '2vh' }}>{param1}</p>
            <div style={{ display: 'flex' }}>
                <div style={{ marginInline: '6vw', width: '100%' }} >
                    <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white' }}>Sobre</p>
                    <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white' }}>{param2}</p>


                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <div >
                            <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white' }}>Serie</p>
                            <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white' }}>{param5}</p>
                        </div>
                        <div >
                            <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white' }}>Ficha Técnica</p>

                            {(param3.map((p, index) => {
                                return (
                                    <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white' }}
                                        key={index}>
                                        {p}
                                    </p>
                                )
                            }))}
                        </div>

                        <div >
                            <p style={{ fontFamily: 'Dosis', fontSize: '2.5rem', color: 'white' }}>Tags</p>
                            <p style={{ fontFamily: 'Dosis', fontSize: '1.35rem', color: 'white' }}>#{param4}</p>
                        </div>
                    </div>
                </div>
                <div style={{ height: '100%', paddingInline: '6vw', paddingBlock: '4vh', }}>
                    {(param3[0] === "video" ?
                        (
                            <iframe
                                title="param1"
                                src={param6}
                                style={{ top: 0, left: 0, width: '100%', height: '100%' }}
                                allowFullScreen
                            ></iframe>
                        ) : (

                            <img
                                src={param6}
                                alt={param1}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />

                        )
                    )}
                </div>
            </div>
            {
                param7.length > 0 ?
                    <>
                        <hr style={{
                            borderTop: '1px solid white',
                            margin: '4vh',
                        }} />
                        <div style={{ display: 'flex', justifyContent: param7.length === 1 ? 'center' : 'space-evenly', marginInline: '6vw', paddingBlock: '2vh' }}>
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
                                                style={{ width: '30%', objectFit: 'cover' }}
                                                key={index} />
                                        )

                                );
                            }

                            ))}
                        </div>
                    </>
                    :
                    <></>
            }
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

export default DetailedPage