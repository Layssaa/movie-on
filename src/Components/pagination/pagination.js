const max_ITEMS = 9;
const max_LEFT = (max_ITEMS - 1)/2;

export default function Pagination({limit, total, offset}){
    const current = offset? (offset/limit) + 1:1;
    const pages = Math.ceil(total/limit);
    const first = Math.max(current - max_LEFT, 1);

    return(
        <ul>
            {Array.from({length: max_ITEMS})
            .map((_,index) => index + first )
            .map(page =>{ <li><button>aa{page}</button></li> })
            }
        </ul>
    )
}