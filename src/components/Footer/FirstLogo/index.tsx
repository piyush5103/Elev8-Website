import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

import { ImageSharpFluid } from 'helpers/definitions';

const FirstLogo: React.FC = () => {
    const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "first.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

    return (
        <Styled.Logo href="http://www.firstinspires.org" rel="noreferrer noopener" target="_blank">
            <Styled.Image>
                <Img fluid={logoImage} alt="FIRST" />
            </Styled.Image>
        </Styled.Logo>
    );
};

export default FirstLogo;
