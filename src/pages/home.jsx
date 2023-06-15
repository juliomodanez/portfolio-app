import Category from "../components/category";
import Highlights from "../components/highlights";

function Home({tags, allContent }) {
    return (
        <div style={{ backgroundColor: 'black', paddingTop: '2vh' }}>
            <Highlights />
            <Category tags={tags} allContent={allContent} />
        </div>

    );
}

export default Home;