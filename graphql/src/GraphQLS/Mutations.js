import { gql } from "@apollo/client";

export const CREATE_CHARITY_MUTATION = gql`

mutation createUser($charityName: String! $phone: String! $email: String! $address: String) {
    createUser(charityName: $charityName phone:$phone email:$email address:$address ) {
        id
    }
}

`