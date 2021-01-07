import './App.css';

import styled, { createGlobalStyle } from 'styled-components';
import {Product, TipserElementsProvider, Cart, TipserLang} from "@tipser/tipser-elements";
import '@tipser/tipser-elements/dist/index.css';

const ITSAPARK_POS_ID = "5fa0203202f831000110873b";

const tipserConfig = {
    lang: TipserLang.enUS
};

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }
`

const AppContainer = styled.div`
 text-align: center;
`;

const StyledProduct = styled(Product)`
    font-size: 14px;
    .te-button-body {
        background: palevioletred;
    }
    .te-product-brand {
        color: tomato !important;
    }
`

const StyledCart = styled(Cart)`
    align-items: center;
    width: 40px;
    .tipser-icon-cart {
      width: 1.5rem;
      svg {
        path {
          fill: #b7b7b7;
        }
      }
    }
  `;

function App() {
  return (
    <>
        <GlobalStyle/>
        <TipserElementsProvider posId={ITSAPARK_POS_ID} config={tipserConfig}>
            <StyledCart />
            <AppContainer>
              <StyledProduct productId="5aa16507c0bdfb2ca404501a" />
            </AppContainer>=
        </TipserElementsProvider>
    </>
  );
}

export default App;
