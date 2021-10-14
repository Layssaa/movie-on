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

    background: #7F43BA;
    border-radius: 6px;

`;

export const SpanFeedback = styled.span`
   margin-top: 5%;
`;