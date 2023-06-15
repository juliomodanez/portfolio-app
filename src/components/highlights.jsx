import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import content from "../Content.js";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Highlights() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = content.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div style={{ backgroundColor: 'black', paddingInline: '4vw', position: 'relative', height: '100vh' }}>
            <AutoPlaySwipeableViews interval={7000}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                style={{ color: 'white' }}
            >
                {content.map((image, index) => (
                    Math.abs(activeStep - index) <= 2 ? (
                        <Box
                            component="img"
                            sx={{
                                display: 'block',
                                maxWidth: window.innerWidth,
                                maxHeight: window.innerHeight,
                                overflow: 'hidden',
                                width: '100%',
                            }}
                            src={image.source}
                            key={index}
                        />
                    ) : null
                ))}


            </AutoPlaySwipeableViews>
            <MobileStepper
                sx={{
                    paddingInline: '4vw',
                    background: 'transparent',
                    position: 'absolute',
                    zIndex: 1,
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: 'grey',
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: 'white',
                    },
                    '& button': {
                        transform: 'translateY(-50vh)'
                    },
                }}
                steps={maxSteps}
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="large"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={{ color: 'white' }}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="large"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{ color: 'white' }}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </div>
    )
}

export default Highlights;