import React, {DOM} from 'react';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

const BlogItem = (props) => (
  DOM.div(
    {
      src: 'blog-list__item',
    },
    React.createElement(Image, {src: props.src}),
    React.createElement(TextBox, {text: props.text}),
  )
);

export default BlogItem;