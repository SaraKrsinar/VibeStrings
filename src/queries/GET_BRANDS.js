import { gql } from '@apollo/client';

export const GET_BRANDS = gql`
  query GetAllBrands {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;
