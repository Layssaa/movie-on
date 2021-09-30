import styled from "styled-components";
import imgBanner from "../../images/back.png"
import imgBannerCategories from "../../images/backcategories.png"

export const Ban = styled.div`
    width: 93.5%;
    height: 30%;
    background: url(${imgBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;

`

export const BanCategories = styled.div`
    width: 80%;
    height: 20%;
    background: url(${imgBannerCategories});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:bottom;
`