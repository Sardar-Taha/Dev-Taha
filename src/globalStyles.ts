import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Barlow', sans-serif;

  } 


 body
{
  overflow-x: hidden !important;
  font-family: 'Poppins', sans-serif;
  background-color: #000;

  &::-webkit-scrollbar {
            width: 10px;
        }
        
        &::-webkit-scrollbar-track {
            background-color: #000;
        }
        
        &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: #fff;
        }
   
}

.ant-modal .ant-modal-content {
    background-color: red !important;
    padding: 0 !important;
  }

iframe
{
  /* position: absolute !important;
  width: none !important;
  top: none !important;
  left: none !important;
  right: none !important;
  z-index: -5 !important; */
}

 /* Loader */
 .cover-spin {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
 
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}


 
/* Models styles  */
.ant-modal-footer
  {
    display: none;
  }
  .ant-modal-close
  {
    display: none;
  }
  .ant-modal-content
  {
   background: none;
  }
  .ant-modal-body
  {
    padding: 0px;
  }
  .ant-modal-mask
  {
    background-color: rgb(0 0 0 / 78%) ;
  }

  .ant-modal > .ant-modal-content {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .closeModelInput
  {
    transform: translateY(-2px);
  }
    .ant-space-align-baseline
  {
    display: flex;
    justify-content:center  ;
  }
  .modalInputMale
  {
    border-top-right-radius:7px;
  border-bottom-right-radius:7px;
  transform: translateX(-6px);
  }
  .ant-form-vertical .ant-form-item-label>label {
  
 
    font-weight:600;
}

  /* Models styles */


.bottom-container {
  margin-bottom: 4rem;
}






.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate3d(-50%, -50%, 0);
  background-color:rgb(102, 252, 241, 0.2);
}

.nav-icon {
  width: 34px;
  height: 34px;

  @media (max-width: 991.98px) { 
    width: 24px;
  height: 24px;
   }

}


.hero-icon {
    font-size: 24px;
    color: #66fcf1;
  }
 
`;

export default GlobalStyle;
