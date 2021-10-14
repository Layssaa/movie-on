import React from "react";
import { FeedbackSpan, SpanFeedback } from "./AddCart.style"

export function AddCart(props) {
    return (
        <FeedbackSpan open={props.open}>
            <SpanFeedback>ADDED TO CART!</SpanFeedback>
        </FeedbackSpan>
    )
}

export function AddWishList(props) {
    return (
        <FeedbackSpan open={props.open}>
            <SpanFeedback>ADDED TO WISHLIST!</SpanFeedback>
        </FeedbackSpan>
    )
}

export function RemoveCart(props) {
    return (
        <FeedbackSpan open={props.open}>
            <SpanFeedback>REMOVED FROM THE CART!</SpanFeedback>
        </FeedbackSpan>
    )
}