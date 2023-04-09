import React, { useState } from 'react'
import { ImageList, ImageListItem } from '@mui/material'

function Category({ allContent }) {
    return (
        <div>
            <ImageList
                variant="quilted"
                cols={3}
                rowHeight={560}
            >
                {allContent.map((item) => (
                    <div>

                        <ImageListItem cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                src={item.source}
                                alt={item.title}
                                loading="lazy"
                            />

                        </ImageListItem>
                    </div>
                ))}
            </ImageList>
        </div>
    )
}

export default Category