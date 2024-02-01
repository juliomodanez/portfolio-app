import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import ContentProjects from '../contents/Content_Projetos'
import { useLocation, useNavigate } from 'react-router';
import { AppContext } from '../AppContext';

function Projects() {
    const navigate = useNavigate();
    const location = useLocation();
    const { updateParams } = useContext(AppContext);

    const handleClickOnImage = (project) => {
        const currentPathName = location.pathname;
        const projectTitle = project.title;
        const url = `${currentPathName}/${projectTitle}`;

        updateParams(project.title, project.description, project.tecInfo, project.tags, project.source, project.altImages,project.projectLink);

        navigate(url);
    };

    return (
        <div style={{
            backgroundColor: 'black',
            paddingInline: '4vw',
            paddingTop: '2vh',
        }}
        >
            <p style={{ fontFamily: 'Cinzel', fontSize: '2.5rem', color: 'white' }}>Projetos</p>

            {ContentProjects.map((project, index) => (
                <div
                    onClick={() => handleClickOnImage(project)}>
                    {index === 0 ? <></> :
                        <div>
                            <p style={{
                                fontFamily: 'Cinzel', fontSize: '5rem', textDecoration: 'none', color: 'white', textAlign: 'center', marginBlock: '1vh', marginTop: '-4vh'
                            }}> . . . </p>
                            <hr style={{
                                borderTop: '1px solid white',
                                margin: '4vh',
                                marginLeft: '8vh',
                                marginBlock: '1vh',
                            }} />
                        </div>}
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
                        key={index}
                    >
                        <p
                            style={{
                                fontFamily: 'Cinzel', fontSize: '3rem', textDecoration: 'none', color: 'white', textAlign: 'right',
                            }}
                        >{project.title}</p>
                        <img
                            src={project.source}
                            alt={project.source}
                            loading="lazy"
                            style={{ width: '65vw', objectFit: 'contain', backgroundColor: 'red' }}
                        />
                    </div>

                </div>
            ))}

            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
                marginLeft: '8vh'
            }} />
            <Typography style={{
                fontFamily: 'Dosis', fontSize: '1.25rem', textDecoration: 'none', color: 'white', textAlign: 'right', paddingInline: '4vh', paddingBlock: '2vh', marginBlock: '-5vh'
            }}
            >Copyright © 2023 by Julio Modanez</Typography>
        </div>
    )
}

export default Projects;