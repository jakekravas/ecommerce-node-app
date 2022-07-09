exports.Product = {
  category: ({categoryId}, args, {categories}) => {
    const productId = categoryId;
    return categories.find(category => category.id === productId);
  }
}
