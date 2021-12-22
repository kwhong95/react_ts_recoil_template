import { gql } from 'apollo-boost';

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`