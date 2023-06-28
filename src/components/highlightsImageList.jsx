import React, { useState } from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import '@fontsource/cinzel'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function HighlightsImageList({ title, content }) {
    const highlightTitle = useState(title)
    const highlightContent = useState(content)

    return (
        <div style={{ backgroundColor: 'black', paddingInline: '4vw' }}>
            <p style={{ fontFamily: 'Cinzel', fontSize: '5vh', color: 'white' }}>{highlightTitle}</p>
            <ImageList
                sx={{ width: '100%', height: '75%' }}
                variant="quilted"
                cols={4}
            >

                {highlightContent[0]
                    .map((item, index) => (
                        <ImageListItem cols={item.cols || 1} rows={item.rows || 1} key={index}>
                            <img
                                {...srcset(item.source, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                style={{ width: '100%', height: '100%' }}
                                key={index}
                            />

                        </ImageListItem>
                    ))}
            </ImageList >
        </div >
    )
}

export default HighlightsImageList;