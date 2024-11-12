import * as React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Container, Content, FeatureImage } from '../components';
import { H1 } from '../elements';

const about = ({ data }) => {
  //   const featureImage = data.imageSharp.fixed;

  console.log('dataaggagag', data.allFile.edges);

  return (
    <Container>
      {/* <FeatureImage fixed={featureImage} /> */}
      {/* {data.allFile.edges.map((img) => (
        <Img fluid={img.node.childImageSharp.fluid} />
      ))} */}
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          {' '}
          Aidan is an author and songwriter. His idiosyncratic poetic work draws on themes from
          linguistics, philosophy, world poetry and religions. Musically, influences are varied,
          ranging from Hindustani classical, math rock, jazz, and an adolescence spent entrenched in
          Boston's DIY music scene.
          <br />
          <br />
          Current Musical Projects: Katsu Bandleader of ongoing project with various lineups
          including:
          <br />
          Nose Always In Blossoms (2019)
          <br />
          BALANCE (2023)
          <br />
          piano/tenor sax duo EP (recorded 2022, pending release).
          <br />
          <br />
          Past Musical Collaborations:
          <br />
          Modern Painters
          <br />
          City Folk, 2019, arranged and performed Electric Bass on full album of original
          compositions
          <br />
          Shit Whitman
          <br />
          performed electric bass on two yet unreleased studio albums, as well as some lead guitar
          <br />
          <br />
          Grants: Mass MoCA - Assets for Artists (A4A) - 2024 Capacity Building Grant program
          Residency: Floating Tower Immigrant & Refugee Artists Retreat at Chase Hill - 2020-2022
          <br />
          Participated in all aspects of managing and developing retreat space on both volunteer and
          employee basis, including participation as musician and performer in the June 2023 staged
          theater production Shadows of Forgotten Ancestors, directed by Matti Kovler
          <br />
          <br />
          Other Artistic Work:
          <br />
          Author
          <br />
          Novella in progress “Between Branches”
          <br />
          Poetry manuscript “Angles on Emptiness”, seeking pubisher
          <br />
          <br />
          Past Publications
          <br />
          Northeastern University Spectrum Literary Magazine
          <br />
          Contributor, 2016, 2017; Poetry
          <br />
          <br />
          The Foundationalist, Volume 1, Spring 2018; Short Story: Dead Dog
          <br />
          <br />
          Teaching:
          <br />
          <br />
          Private music lessons in guitar, ear training, piano, and music theory
        </H1>
      </Content>
    </Container>
  );
};

export default about;

export const data = graphql`
  query about {
    allFile(filter: { sourceInstanceName: { eq: "photography" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
