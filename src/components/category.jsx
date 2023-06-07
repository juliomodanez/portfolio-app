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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{ backgroundColor: 'black', paddingInline:'4vw' }}>
            <ImageList
                variant="masonry"
                cols={3}
                gap={4}
                style={{margin:'0'}}
            >
                {allContent.map((item) => (
                    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        {(item.tecInfo[0] === "video" ?
                            (
                                <iframe
                                    title="video"
                                    src={item.source}
                                    style={{ top: 0, left: 0, width: '100%', height: '100%' }}
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <ImageListItem cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        src={item.source}
                                        alt={item.title}
                                        loading="lazy"
                                        onClick={handleOpen}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />

                                </ImageListItem>
                            )
                        )}

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                ))}
            </ImageList>
        </div>
    )
}

export default Category