import styled from 'styled-components';

export const changeBtnColor = ({ mainColor }) => {

    // const Title = styled.span`
    //     @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
    //     text-align: center;
    //     font-size: 20px;
    //     font-weight: 700;
    //     font-family: Montserrat, sans-serif;
    // `;

    const SubmitBtn = styled.input`
        background-color: ${mainColor};
    `;
    return {
        SubmitBtn
    }
}

