import gql from 'graphql-tag';

export const USERS = gql`
    query Users {
        Users {
            _id
            name
            email
            password
        }
    }
`;