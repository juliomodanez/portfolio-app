import React from 'react'
import { ImageList, ImageListItem, Typography } from '@mui/material'
import '@fontsource/cinzel'

function Category({ title, contentTag }) {

    return (
        <div style={{ backgroundColor: 'black', paddingInline: '4vw', paddingTop: '2vh', height: 'window.innerHeight'  }}>
             <p style={{ fontFamily: 'Cinzel', fontSize: '5vh', color: 'white' }}>{title}</p>
            <ImageList
                variant="masonry"
                cols={3}
                gap={4}
                style={{ margin: '0' }}
            >

                {contentTag
                    .map((filteredItem, index) => (
                        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }} key={index}>
                            {(filteredItem.tecInfo[0] === "video" ?
                                (
                                    <iframe
                                        title="video"
                                        src={filteredItem.source}
                                        style={{ top: 0, left: 0, width: '100%', height: '100%' }}
                                        allowFullScreen
                                        key={index}
                                    ></iframe>
                                ) : (
                                    <ImageListItem cols={filteredItem.cols || 1} rows={filteredItem.rows || 1}>
                                        <img
                                            src={filteredItem.source}
                                            alt={filteredItem.title}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            key={index}
                                        />

                                    </ImageListItem>
                                )
                            )}
                        </div>
                    ))}
            </ImageList >
            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
            }} />
            <Typography style={{
                fontFamily: 'Dosis', fontSize: '1.25rem', textDecoration: 'none', color: 'white', textAlign: 'right', paddingInline: '4vh', paddingBlock: '2vh', marginBlock: '-5vh'
            }}
            >Copyright © 2021 by Julio Modanez</Typography>
        </div >
    )
}

export default Category