import { gql } from 'apollo-boost';

export interface IResult {
  posts: IPost[]
}

interface IPost {
  title: string;
  slug: string;
  featuredImage: {
    url: string;
  }
  createdAt: string; 
}

export const GET_RECENT_POSTS = gql`
  query GetPostDetail {
    posts (
      orderBy: createdAt_ASC
      last: 3
    ) {
    title
    featuredImage {
      url
    }
    createdAt
    slug
  }
  }
`