const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === "DataJson" || node.internal.type === "File") {
    const slug = createFilePath({node, getNode, basePath: `pages`});
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  return graphql(`
  {
    allDataJson {
      edges {
        node {
          greetingImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          id
          title
          subtitle
          greetingText
          role
          platform
          tools
          detailsTitle
          detailsText
          detailsImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          contributionList
          contributionImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          carousels {
            title
            images {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
  `
  ).then(result => {
    result.data.allDataJson.edges.forEach(({ node }) => {
      createPage({
        path: node.id,
        component: path.resolve(`./src/components/ProjectPage.js`),
        context: {
          workData: node
        },
      })
    })
  })
};
