import styled from "styled-components";
export const CertificateWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }
  .textareaHolder{
    min-height: 150px;
    
  }
  .imgWrap{
    width: 300px;
    height: 230px;
    padding: 12px 25px;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    color: var(--body-text-25);
    position: relative;
    box-sizing: border-box;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .bton{
      margin: 0;
    }
  }
  .bton {
    background-color: var(--blue);
    padding: 10px 20px;
    display: block;
    margin-left: auto;
    font-size: 25px;
    color: var(--white);
    border-radius: 50%;
  }
  input{
    color: var(--black);
  }
`;
