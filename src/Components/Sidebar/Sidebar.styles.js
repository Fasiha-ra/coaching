import styled from "styled-components";
export const SidebarWrap = styled.div`
  height: calc(100vh - 134px);
  overflow: hidden;
  position: relative;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 20px;
  &:hover {
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }
  &:hover {
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(245, 126, 42, 0.15);
    }
  }
  .sidebarHolder{
    ul{
      li{
        padding: 0 0 20px 30px;
        font-size: 20px;
        a{
          display: flex;
          gap: 20px;
          align-items: center;
          padding-bottom: 20px;
          img{
            width: 31px;
            height: 31px;
          }
          &.active {
          border-bottom: 1px solid var(--black); 
        }
        }
      }
    }
  }
`;
