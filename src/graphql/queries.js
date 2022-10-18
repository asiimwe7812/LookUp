/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewPlaces = /* GraphQL */ `
  query GetNewPlaces($id: ID!) {
    getNewPlaces(id: $id) {
      id
      image
      type
      title
      description
      bed
      bedroom
      oldPrice
      newPrice
      totalPrice
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listNewPlaces = /* GraphQL */ `
  query ListNewPlaces(
    $filter: ModelNewPlacesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
        description
        bed
        bedroom
        oldPrice
        newPrice
        totalPrice
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
