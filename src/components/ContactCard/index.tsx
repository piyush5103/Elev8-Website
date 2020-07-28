import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface ContactCard extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitPlaceholder: string;
}

const ContactCard: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contactcard section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          messagePlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const contactcard: ContactCard = markdownRemark.frontmatter;

  return (
    <Styled.ContactCard>
      <Container section>
        <TitleSection title={contactcard.title} subtitle={contactcard.subtitle} center />
        <Styled.Form>
          <Styled.Input type="text" placeholder={contactcard.namePlaceholder} />
          <Styled.Input type="email" placeholder={contactcard.emailPlaceholder} />
          <Styled.TextArea type="message" placeholder={contactcard.messagePlaceholder} />
          <Button primary block>
            {contactcard.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.ContactCard>
  );
};

export default ContactCard;
