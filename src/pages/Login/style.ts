import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
  
  .containerLogin {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      
      max-width: 375px;
    overflow: hidden;

    @media (min-width: 700px) {
      max-width: 748px;
    }

    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      justify-content: space-between;

      max-width: 1000px;
      width: 100%;
    }

    .sectionSlogan {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        
        width: 100%;

        @media (min-width: 1024px) {
            height: 460px;
            width: 450px;

            justify-content: center;
        }

        img:nth-child(2) {
            margin-left: -56px;
            transform: scale(0.8);
        }

        img:nth-child(3) {
            display: none;

            @media (min-width: 1024px) {
                display: inline-block;
            }
        }
    }

    .sectionFormLogin {
        width: 100%;

        @media (min-width: 700px) {
            width: 500px;
        }
    }
  }
`;
