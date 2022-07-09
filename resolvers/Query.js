const { products, categories } = require('../db');

exports.Query = {
  hello: (parent, args, context) => {
    return 'a'
  },
  products: (parent, args, context) => {
    return products;
  },
  product: (parent, args, context) => {
    // const { id } = args;
    const productId = args.id;
    return products.find(product => product.id === productId);
  },
  categories: (parent, args, context) => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find(category => category.id === id);
  },
}