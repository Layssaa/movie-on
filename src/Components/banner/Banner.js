import { Ban } from "./Banner.style";
import imgBanner from "../../images/aot_secondbanner.jpg"


export default function Banner(props) {
    return (
        <>
            <Ban src={props.src}>  </Ban>
        </>
    );
};