import React, { useState } from 'react'
import { Box, ImageList, ImageListItem, Modal, Typography } from '@mui/material'
import '@fontsource/cinzel'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Category({ allContent }) {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const tags = ['3D', 'pintura', 'escultura', 'gravura', 'pinturadigital', 'animacao'];

    return (
        <div style={{ backgroundColor: 'black', paddingInline: '4vw' }}>
            {tags.map((tag, index) => (
                <div key={index}>
                    <hr style={{
                        borderTop: '1px solid white',
                    }} />
                    <h2 style={{ color: 'white' }}>{tag}</h2>
                    <ImageList
                        variant="masonry"
                        cols={3}
                        gap={4}
                        style={{ margin: '0' }}
                    >

                        {allContent.filter((item) => item.tags.includes(tag))
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

                        {/* 
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {filteredItem.title}
                        </Typography>
                    </Box>
                </Modal> */}
                    </ImageList >
                </div>))}
        </div >
    )
}

export default Category