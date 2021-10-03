import { useState } from "react";
import { ButtonPagination } from "../Button/ButtonStyled";
import CardLetter from "../card/card";
import { ButtonsChangePage, ListMovies } from "./pagination.style"
import CartDiv from "../card/cardCart";

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

// const max_ITEMS = 4;
// const max_LEFT = (max_ITEMS - 1) / 2;

export default function HandlePagination(props) {
    const [items, setItems] = useState(props.movieList);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(items.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex)

    return (
        <>
            <ListMovies>
                {currentItems.map(item =>{
                return <CartDiv key={item.index} element={item} movie={item} {...props}/>
                })}
            </ListMovies>
            <ButtonsChangePage>
                {Array.from(Array(pages), (_, index) => {
                    return (
                    <ButtonPagination value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</ButtonPagination>)
                })
                }
            </ButtonsChangePage>

        </>
    )
}