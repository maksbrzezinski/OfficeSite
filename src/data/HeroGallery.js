import { useStaticQuery, graphql } from 'gatsby'

const HeroGallery = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} 
      name: {in: ["Office1", "Office2", "Office3"]}
    }
    ) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }
  
  `) 
};

export default HeroGallery;
