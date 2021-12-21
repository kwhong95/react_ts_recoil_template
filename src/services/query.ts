import { gql } from 'apollo-boost';

export interface IAuthor {
  id: string;
  bio: string;
  name: string;
  photo: {
    url: string;
  }
}

export interface ICategory {
  name: string;
  slug: string;
}

export interface INode {
  author: IAuthor;
  createAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: ICategory[]
}

export interface IEdges {
  edges: INode[];
}

export interface IResult {
  postsConnection: IEdges;
}

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
`;