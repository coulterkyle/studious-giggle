import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $description: String, $title: String, $bookId: ID, $image: String, $link: String) {
  saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
    bookCount
    savedBooks {
      bookId
    }
    _id
    email
    username
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        title
      }
    }
  }
`;
