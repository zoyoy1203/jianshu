import {createGlobalStyle} from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1578554806282'); /* IE9 */
    src: url('./iconfont.eot?t=1578554806282#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1578554806282') format('woff'),
    url('./iconfont.ttf?t=1578554806282') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1578554806282#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;
