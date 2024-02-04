import { ImageList, ImageListItem, Typography } from "@mui/material";
import DesignHeader from "../components/designHeader";
import ProfilePicture from '../images/profile.jpg';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function HomeDesign() {
    return (
        <div style={{ paddingTop: '2vh', height: 'window.innerHeight' }}>
            <DesignHeader />

            <div style={{ margin: '2%', display: 'flex' }}>
                <div style={{ width: '75vw', height: '35vh', backgroundColor: 'lightgrey', lineHeight:'0.75rem' }}>
                    <p style={{fontSize:'6em', marginInline:'2vw'}}>Julio Modanez</p>
                    <p style={{fontSize:'1.5rem', marginInline:'10vw'}}>Artista visual, em treinamento em UX design e marketing digital.</p>
                </div>
                <div style={{ width: '15%', height: '15%', marginInline: '2%', position: 'relative' }}>
                    <img src={ProfilePicture} alt="Foto de Julio Modanez." style={{ width: '100%', height: '100%', borderRadius: '10%', position: 'relative', zIndex: '2' }} />
                    <div style={{
                        position: 'absolute',
                        top: 15,
                        left: 35,
                        width: '100%',
                        height: '100%',
                        border: '5px solid black',
                        borderRadius: '10%',
                        zIndex: '1',
                    }}></div>
                </div>


            </div>

            <ImageList
                sx={{ width: '100%', height: '75%' }}
                variant="quilted"
                cols={2}
                gap={9}
            >

                {/* {highlightContent[0]
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
                    ))} */}
            </ImageList >
            <Typography style={{
                fontFamily: 'Dosis', fontSize: '1.25rem', textDecoration: 'none', textAlign: 'right', paddingInline: '4vh', paddingBlock: '2vh', borderTop: 'solid', borderTopColor: 'black', borderTopWidth: '2px',
            }}
            > © 2024. Todos os direitos reservados à Julio Modanez.</Typography>
        </div>

    );
}

export default HomeDesign;