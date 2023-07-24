import { createGlobalStyle } from 'styled-components'

import ClashDisplayRegularTTF from '../../public/assets/fonts/ClashDisplay-Regular.ttf'
import ClashDisplayMediumTTF from '../../public/assets/fonts/ClashDisplay-Medium.ttf'
import SatoshiRegularTTF from '../../public/assets/fonts/Satoshi-Regular.ttf'
import SatoshiBoldTTF from '../../public/assets/fonts/Satoshi-Bold.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  @font-face {
      font-family: 'Clash Display';
      font-style: normal;
      font-weight: 400;
      font-display: auto;
      src: url(${ClashDisplayRegularTTF}) format("truetype");
    };
    @font-face {
      font-family: 'Clash Display';
      font-style: normal;
      font-weight: 500;
      font-display: auto;
      src: url(${ClashDisplayMediumTTF}) format("truetype");
    };
    @font-face {
      font-family: 'Satoshi';
      font-style: normal;
      font-weight: 400;
      font-display: auto;
      src: url(${SatoshiRegularTTF}) format("truetype");
    };
    @font-face {
      font-family: 'Satoshi';
      font-style: normal;
      font-weight: 700;
      font-display: auto;
      src: url(${SatoshiBoldTTF}) format("truetype");
    };
`
