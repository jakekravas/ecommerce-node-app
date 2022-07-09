const { categories } = require('../db');

exports.Product = {
  category: (parent, args, context) => {
    const productId = parent.categoryId;
    return categories.find(category => category.id === productId);
  }
}