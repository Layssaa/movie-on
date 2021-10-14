import React from "react";
import { useParams } from "react-router";

export default async function USE_PARAMS_ID_MOVIE() {
    const { id } = await useParams();
    return id
}