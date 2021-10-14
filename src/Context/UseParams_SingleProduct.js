import React from "react";
import { useParams } from "react-router";

export default function USE_PARAMS_ID_MOVIE() {
    const { id } =  useParams();
    return id
}