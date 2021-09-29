import { CategorieCard } from "./card.style"
import iconMovie from "../../images/film-reel_2.png"

export default function CardCategories(props) {

    const goToCatorie = (id)=>{
        props.onclick(id)
    }
    return (
        <CategorieCard>
            <img onClick={()=>{goToCatorie(props.id)}} src={iconMovie} alt="icon that symbolizes categories" />
            <h3 onClick={()=>{goToCatorie(props.id)}}>{props.children}</h3>
        </CategorieCard>
    )
}