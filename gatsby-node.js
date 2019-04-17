const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === "DataJson") {
    const slug = createFilePath({node, getNode, basePath: `pages`});
    console.log(node);
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
          id
          title
          subtitle
          greetingText
          role
          platform
          tools
          detailsTitle
          detailsText
          detailsImageUrl
          contributionImageUrl
          contributionList
          carousels {
            title
            imagesUrl
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
        component: path.resolve(`./src/templates/work-page.js`),
        context: {
          workData: node
        },
      })
    })
  })
};
