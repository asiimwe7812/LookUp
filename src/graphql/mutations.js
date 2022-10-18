/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewPlaces = /* GraphQL */ `
  mutation CreateNewPlaces(
    $input: CreateNewPlacesInput!
    $condition: ModelNewPlacesConditionInput
  ) {
    createNewPlaces(input: $input, condition: $condition) {
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
export const updateNewPlaces = /* GraphQL */ `
  mutation UpdateNewPlaces(
    $input: UpdateNewPlacesInput!
    $condition: ModelNewPlacesConditionInput
  ) {
    updateNewPlaces(input: $input, condition: $condition) {
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
export const deleteNewPlaces = /* GraphQL */ `
  mutation DeleteNewPlaces(
    $input: DeleteNewPlacesInput!
    $condition: ModelNewPlacesConditionInput
  ) {
    deleteNewPlaces(input: $input, condition: $condition) {
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
