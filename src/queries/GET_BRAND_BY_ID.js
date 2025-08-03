import { gql } from '@apollo/client';

export const GET_BRAND_BY_ID = gql`
  query GetBrandById($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      image
      origin
    }
  }
`;
