const toObjectBy = (array, propertyMapper) => {
  return array.reduce((acc, e) => ({
    ...acc,
    ...propertyMapper(e),
  }), {});
};

export default toObjectBy;
