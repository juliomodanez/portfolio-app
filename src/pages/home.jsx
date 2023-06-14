import Category from "../components/category";
import Highlights from "../components/highlights";

function Home({tags, allContent }) {
    return (
        <div style={{ backgroundColor: 'black', paddingTop: '2vh' }}>
            <Highlights />
            <hr style={{
                borderTop: '1px solid white',
                margin:'4vw'
            }} />
            <Category tags={tags} allContent={allContent} />
        </div>

    );
}

export default Home;