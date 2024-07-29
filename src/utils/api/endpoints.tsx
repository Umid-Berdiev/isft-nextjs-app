const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/me'
  },
  user: {
    all: '/users',
    one: '/users/:id'
  },
  category: {
    all: '/categories',
    one: '/categories/:id'
  },
  product: {
    all: '/products',
    one: '/products/:id'
  },
  order: {
    all: '/orders',
    one: '/orders/:id'
  },
  review: {
    all: '/reviews',
    one: '/reviews/:id'
  }
}

export default endpoints
