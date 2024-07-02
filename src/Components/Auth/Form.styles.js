import styled from "styled-components";
export const SignUpWrapper = styled.div`
  background-color: var(--primary-darkblue);
  color: var(--white);
  display: flex;
  .imgHolder {
    overflow: hidden;
    img {
      display: none;
      height: 100vh;

      @media (min-width: 768px) {
        display: block;
        max-width: 700px;
        width: 100%;
      }
      @media (min-width: 1440px) {
        max-width: 872px;
        width: 100%;
      }
    }
  }
  .formHolder {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    form {
      .textHolder {
        img {
          padding-bottom: 30px;
          width: 200px;
          margin: 0 auto;
          @media (min-width: 768pxpx) {
            width: 256px;
          }
          @media (min-width: 1440px) {
            width: 356px;
          }
        }
      }
      p {
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        text-align: center;
        padding-bottom: 30px;
        margin-bottom: 0;
        @media (min-width: 1440px) {
          font-size: 20px;
          line-height: 24px;
        }
        @media (min-width: 1440px) {
          font-size: 25px;
          line-height: 29px;
        }
      }
      span {
        color: var(--primary-blue);
      }
      .inputHolder {
        padding-bottom: 15px;
        width: 100%;
        max-width: 531px;
        @media (min-width: 768px) {
          padding-bottom: 10px;
        }
        @media (min-width: 1440px) {
          max-width: 734px;
        }
      }
      button {
        display: block;
        margin: 0 auto;
      }
    }
  }
  .emailWrapper {
    width: 100%;
    @media (min-width: 1440px) {
      width: 320px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-bottom: 10px;
    @media (min-width: 576px) {
      gap: 30px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .modalWrap {
    border: 1px solid var(--blue);
    border-radius: 13px;
    background-color: var(--white);
    position: relative;
    z-index: 1;
    margin: -10px 10px 10px;
    min-height: 200px;
    text-align: center;
    cursor: pointer;
    figure {
      img {
        padding: 20px 0;
        margin: 0 auto;
      }
    }
    h3 {
      color: var(--light-green);
      font-weight: 600;
    }
    span {
      font-size: 18px;
      line-height: 24px;
      color: var(--black);
    }
  }
`;
