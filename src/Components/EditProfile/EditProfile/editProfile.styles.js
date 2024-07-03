import styled from "styled-components";
export const EditProfileWrap = styled.div`
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
    @media (min-width: 1440px) {
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
      @media (min-width: 1440px) {
        top: 38%;
        left: 35%;
      }
    }
  }
  .flex {
    display: block;
    
    @media (min-width: 992px){
      display: flex;
      align-items: start;
      gap: 20px;
    }
    .wrap {
      flex-grow: 1;
    }
  }
  .info {
    padding: 0 20px;
    @media (min-width: 992px){
      padding: 0 0 0 40px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      @media (min-width: 576px){
        grid-template-columns: repeat(2, 1fr);
      }
      
    }
    .managementWrap {
      width: 100%;
      background-color: transparent;
      border: 1px solid;
      box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
      min-height: 80px;
      border-radius: 10px;
      padding: 20px 50px 20px 25px;
      .flex {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
      }
      span {
        border: 1px solid;
        box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.37);
        padding: 10px 20px;
        border-radius: 20px;
        margin-bottom: 20px;
      }
      button{
        background-color: var(--blue);
        padding: 10px 20px;
        display: block;
        margin-left: auto;
        font-size: 25px;
        color: var(--white);
        border-radius: 50%;
      }
    }
  }
  .inputHolder {
        input {
          color: var(--black);
        }
      }
`;
