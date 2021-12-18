import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
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