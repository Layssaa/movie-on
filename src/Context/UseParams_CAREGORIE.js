import React from "react";
import { useParams } from "react-router";

export default async function USE_PARAMS_CATEGORIE() {
    const { name } = await useParams();
    return name
}