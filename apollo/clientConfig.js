export default (context) => {
    return {
      httpEndpoint: 'http://localhost:4000/graphql-alt',

      getAuth: () => 'Bearer',
    }
  }