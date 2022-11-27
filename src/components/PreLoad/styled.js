import styled from "styled-components";

export const StyledPreLoad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    -45deg,
    #ffffff,
    #fff3ec,
    #f7b05b,
    #1f1300
  );
  background-size: 300% 300%;
  animation: bgAnimation 5s ease infinite alternate;

  @keyframes bgAnimation {
    from {
      background-position: 0 50%;
    }
    to {
      background-position: 100% 50%;
    }
  }

  .burguerImg {
    width: 200px;
    animation: jello-horizontal 0.9s both;

    @keyframes jello-horizontal {
      0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
  }

  .logoImg {
    width: 200px;
    animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) 1s both;

    @keyframes roll-in-blurred-left {
      0% {
        -webkit-transform: translateX(-1000px) rotate(-720deg);
        transform: translateX(-1000px) rotate(-720deg);
        -webkit-filter: blur(50px);
        filter: blur(50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) rotate(0deg);
        transform: translateX(0) rotate(0deg);
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
  }
`;
