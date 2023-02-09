import { gql } from '../../../__generated__';

export const GetUsersQuery = gql(/* GraphQL */`
    query GetUsers {
        findUsers {
            count
            data {
                userId
                role
                email
                phone
                createdAt
                updatedAt
            }
        }
    }
`);