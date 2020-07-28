import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';
import Newsletter from "components/Newsletter"

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
      <Newsletter />
    </Layout>
  );
};

export default BlogPage;
