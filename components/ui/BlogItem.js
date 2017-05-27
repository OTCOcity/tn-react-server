import React, {DOM} from 'react';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

const BlogItem = ({post}) => (
  DOM.div(
    {
      className: 'blog-list__item',
      key: post.id
    },
    React.createElement(Image, post.image),
    React.createElement(TextBox, {text: post.text}),
  )
);

export default BlogItem;