import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import content from '../contents/Content_HL'
import { Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Carousel = ({name}) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = content.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <p style={{ fontFamily: 'Cinzel', fontSize: '4vh', color: 'white' }}>{name}</p>
            <AutoPlaySwipeableViews interval={4000}
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
                                maxWidth: window.innerWidth,
                                maxHeight: window.innerHeight,
                                overflow: 'hidden',
                                width: '100%',
                            }}
                            src={image.source}
                            key={index} />
                    ) : null
                ))}


            </AutoPlaySwipeableViews>

            <MobileStepper
                sx={{
                    background: 'transparent',
                    position: 'relative',
                    zIndex: 1,
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: 'grey',
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: 'white',
                    },
                }}
                steps={maxSteps}
                activeStep={activeStep} />
        </div>
    );
}

function Projects() {

    return (
        <div style={{
            backgroundColor: 'black',
            paddingInline: '4vw',
            paddingTop: '2vh',
        }}
        >
            <p style={{ fontFamily: 'Cinzel', fontSize: '5vh', color: 'white' }}>Projetos</p>
            {/* <hr style={{
                borderTop: '1px solid white',
                marginLeft: '8vh'
            }} /> */}
            <div style={{
                 backgroundColor: 'black',
                 paddingInline: '4vw',
                 position: 'relative',
                 paddingTop: '2vh',
                 minHeight: '100vh',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center',
                 alignItems: 'center',
            }}
            >
                <Carousel name={'Projeto A'} />
            </div>
            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
                marginLeft: '8vh'
            }} />
            <div style={{
                backgroundColor: 'black',
                paddingInline: '4vw',
                position: 'relative',
                paddingTop: '2vh',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Carousel name={'Projeto B'}/>
            </div>
            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
                marginLeft: '8vh'
            }} />
            <Typography style={{
                fontFamily: 'Dosis', fontSize: '1.25rem', textDecoration: 'none', color: 'white', textAlign: 'right', paddingInline: '4vh', paddingBlock: '2vh', marginBlock: '-5vh'
            }}
            >Copyright © 2021 by Julio Modanez</Typography>
        </div>
    )
}

export default Projects;