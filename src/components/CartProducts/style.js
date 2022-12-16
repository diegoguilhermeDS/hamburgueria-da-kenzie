import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: flex;
  justify-content: space-between;
  max-height: 5rem;
  border-radius: var(--radius-2);

  .containerProduct {
    display: flex;
  }

  .containerImageProduct {
    border-radius: var(--radius-2);
    height: 5rem;
    background-color: var(--color-grey-300);
    display: flex;
    justify-content: center;
  }

  .infoProduct {
    height: 100%;
    padding: 0 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--gap-2);

    h3 {
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .containerAmount {
    background-color: var(--color-grey-300);
    height: 34px;

    display: flex;
    align-items: center;

    .btnAmount {
      height: 100%;
      width: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--color-feedback-alert);
      font-size: 22px;
      font-weight: 400;
    }

    .btnAmount:nth-child(3) {
      padding-bottom: 4px;
    }

    .containerSpanAmount {
      width: 40px;
      height: 28px;
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      background-color: #fff;
    }

  }

  .containerButtoRemove {
    padding: 0.625rem;
    text-align: end;

    .btnTrash {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;

      color: var(--color-grey-500);
    }
  }
`;
