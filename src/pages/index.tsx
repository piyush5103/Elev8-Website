import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import Newsletter from "components/Newsletter"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <Services />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default IndexPage;
