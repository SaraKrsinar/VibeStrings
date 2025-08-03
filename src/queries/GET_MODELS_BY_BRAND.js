import { gql } from '@apollo/client';

export const GET_MODELS_BY_BRAND = gql`
  query GetModelsByBrand($id: ID!) {
    findBrandModels(id: $id, sortBy: { field: name, order: ASC }) {
      id
      name
      type
      image
      price
    }
  }
`;
