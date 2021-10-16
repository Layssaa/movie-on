import styled from "styled-components";

export const FeedbackSpan = styled.div`
    position:fixed;

    display:${(props) => (props.open ? 'flex' : 'none')};
    justify-content:center;
    align-items:center;

    bottom: 2%;
    right:2%;

    width: 30%;
    height: 7%;

    background: #4CB279;
    border-radius: 0.9vh;

    font-size: 3.5vh;
`;

// 4CB279

export const SpanFeedback = styled.span`
   margin-top: 5%;
`;