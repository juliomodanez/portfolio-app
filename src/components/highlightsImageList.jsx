import React, { useContext, useState } from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import '@fontsource/cinzel'
import { useNavigate } from 'react-router';
import { AppContext } from '../AppContext';

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
    const navigate = useNavigate();
    const { updateParams } = useContext(AppContext);

    const handleClickOnImage = (item) => {
        const itemCategory = item.tags;
        const itemTitle = item.title;
        const url = `${itemCategory}/${itemTitle}`;

        updateParams(item.title, item.description, item.tecInfo, item.tags, item.serie, item.source, item.altImages, item.data_publicacao);

        navigate(url);
    };

    return (
        <div style={{ backgroundColor: 'black', paddingInline: '4vw' }}>
            <p style={{ fontFamily: 'Cinzel', fontSize: '5vh', color: 'white' }}>{highlightTitle}</p>
            <ImageList
                sx={{ width: '100%', height: '75%' }}
                variant="quilted"
                cols={4}
                gap={9}
            >

                {highlightContent[0]
                    .map((item, index) => (
                        <ImageListItem cols={item.cols || 1} rows={item.rows || 1} key={index} onClick={() => handleClickOnImage(item)}>
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