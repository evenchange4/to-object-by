const toObjectBy = (array, propertyMapper) =>
  array.reduce((acc, e) => ({
    ...acc,
    ...propertyMapper(e),
  }), {});

export default toObjectBy;
