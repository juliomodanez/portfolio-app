import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import content from '../contents/Content_Intro.js'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '@fontsource/dosis/200.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Intro() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div sx={{ position: 'relative', maxWidth: '100%' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    padding: '20px',
                    color: 'white',
                    zIndex: 999,
                }}
            >
                <Typography style={{ fontFamily: 'Cinzel', fontSize: '10vh' }}>Julio Modanez</Typography>

            </Box>
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
                                zIndex: 'modal',
                                filter: 'brightness(110%) saturate(0.75) grayscale(10%)'
                            }}
                            src={image.source}
                            key={index}
                        />
                    ) : null
                ))}
            </AutoPlaySwipeableViews>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '20px',
                    color: 'white',
                    zIndex: 999,
                }}
            >
                <Button style={{ textTransform: 'none' }}>
                    <Link to="/inicial" style={{
                        fontFamily: 'Dosis', fontSize: '1.75rem', fontWeight: 'bold', textDecoration: 'none', color: 'white', padding: '50px 25px'
                    }}>
                        Explorar
                    </Link>
                </Button>
                <Typography style={{
                    fontFamily: 'Dosis', textDecoration: 'none', color: 'white'
                }}
                >Copyright © 2021 by Julio Modanez</Typography>
            </Box>
        </div>
    );
}

export default Intro;