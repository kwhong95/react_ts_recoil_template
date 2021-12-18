import { request, gql } from 'graphql-request'

const graqhqlAPI: any = process.env.PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              id
              bio
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  ` 

  const results = await request(graqhqlAPI, query);
  
  return results.postsConnection.edges;
}