import Highlights from "../components/highlightsCarousel";
import HighlightsImageList from "../components/highlightsImageList";
import contentTradicional from '../contents/Content_Tradicional'
import contentDigital from '../contents/Content_Digital'
import { Typography } from "@mui/material";

function Home() {
    return (
        <div style={{ backgroundColor: 'black', paddingTop: '2vh', height: 'window.innerHeight' }}>
            <Highlights />
            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
                marginLeft: '8vh'
            }} />
            <HighlightsImageList title={'Técnicas Tradicionais'} content={contentTradicional} />
            <hr style={{
                borderTop: '1px solid white',
                margin: '4vh',
                marginLeft: '8vh'
            }} />
            <HighlightsImageList title={'Técnicas Digitais'} content={contentDigital} />
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

    );
}

export default Home;