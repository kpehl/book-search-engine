// define the resolvers for the queries and mutations

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!'
        }
    }
};

module.exports = resolvers;