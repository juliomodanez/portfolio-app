import { Divider } from "@mui/material";
import Category from "../components/category";
import Highlights from "../components/highlights";

function Home({ allContent }){
        return (
            <div style={{backgroundColor:'black', paddingTop:'5vh'}}>
                <Highlights />
                <Category allContent={allContent} />
            </div>

        );
}

export default Home;