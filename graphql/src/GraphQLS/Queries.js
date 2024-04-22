import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
    query {
        getAllCharity {
            id
            charityName
            phone
            email
            address
        }
    }
`