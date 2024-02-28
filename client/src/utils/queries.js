import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query {
  me {
    _id
    bookCount
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`;
