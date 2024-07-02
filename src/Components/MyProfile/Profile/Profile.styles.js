import styled from "styled-components";
export const ProfileHold = styled.div`
  margin-bottom: 20px;
  .bgImg {
    width: 100%;
    background: var(--gray-30);
    height: 300px;
    border-radius: 20px;
    position: relative;
    img {
      position: absolute;
      top: 30px;
      right: 30px;
    }
  }
  .logo {
    position: relative;
    z-index: 1;
    margin-top: -70px;
    width: 130px;
    height: 130px;
    background: white;
    border-radius: 50%;
    margin-left: 20px;
    margin-bottom: 30px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    @media (min-width: 576px) {
      margin-top: -100px;
      width: 170px;
      height: 170px;
    }
    @media (min-width: 992px) {
      width: 238px;
      height: 238px;
    }
    img {
      width: 42px;
      height: 42px;
      position: absolute;
      top: 36%;
      left: 35%;
      @media (min-width: 576px) {
        width: 63px;
        height: 63px;
        top: 32%;
        left: 31%;
      }
      @media (min-width: 992px) {
        top: 38%;
        left: 35%;
      }
    }
  }
  .textxWrap {
    padding: 0 20px 15px;
    @media (min-width: 768px) {
      padding-bottom: 30px;
    }
    p,
    span,
    strong {
      font-size: 17px;
      font-weight: 400;
      color: var(--black);
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }
  .btn {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
   button{
    width: 152px;
    @media (min-width: 768px){
      width: 208px;
    }
   }
  }
`;
