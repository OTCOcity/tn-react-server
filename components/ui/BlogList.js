import React, {DOM} from 'react';
import _ from 'lodash';

import BlogItem from '../ui/BlogItem';

const BlogList = ({posts}) => (
  DOM.div(
    {
      className: 'blog-list'
    },
    _.map(
      posts,
      (post, key) => (
        React.createElement(BlogItem, { post })
      )
    )
  )
);

export default BlogList;