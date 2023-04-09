import React, { useState } from 'react'
import { Box, ImageList, ImageListItem, Modal, Typography } from '@mui/material'

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

                                onClick={handleOpen}
                            />

                        </ImageListItem>

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