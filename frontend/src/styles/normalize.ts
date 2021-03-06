import { getEmSize } from './mixins'
import { breakpoints, colors, dimensions, fonts } from './variables'

export default `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    color: ${colors.gray.dark};
    width: 100%;
    overflow-x: hidden;
    background-color: ${colors.gray.silver};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: ${fonts.body};
    font-weight: ${fonts.bodyWeight};
    margin: 0;
  }

  b {
    font-weight: ${fonts.headingWeight};
  }

  a {
    color: #1f5e60;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.heading};
    font-weight: ${fonts.headingWeight};
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
    margin: 0;
  }

  h1 {
    font-size: ${dimensions.headingSizes.h1}%;
    margin-bottom: 1em;

  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}%;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}%;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}%;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`
