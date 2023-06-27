import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import '@fontsource/cinzel'

function Category({ allContent }) {
    
    return (
        <div style={{ backgroundColor: 'black', paddingInline: '4vw' }}>
            <ImageList
                variant="masonry"
                cols={3}
                gap={4}
                style={{ margin: '0' }}
            >

                {allContent
                    .map((filteredItem, index) => (
                        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
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
                                            // onClick={handleOpen}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            key={index}
                                        />

                                    </ImageListItem>
                                )
                            )}
                        </div>
                    ))}
            </ImageList >
        </div >
    )
}

export default Category