import {DOM} from 'react';

const TextBox = ({text}) => (
  DOM.span(
    {
      className: 'blog-list__item-text'
    },
    text
  )
);

export default TextBox;