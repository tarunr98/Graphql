const  {graphql, GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = require("graphql");
const userData = require("../MOCK_DATA.json");
const CharityType = require("./TypeDefs/CharityType");
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllCharity: {
            type: new GraphQLList(CharityType),
            resolve(parent,args){
                return userData
            },
        },
    }
})
const Mutation = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        createUser: {
            type: CharityType,
            args: {
                charityName: { type: GraphQLString},
                phone: { type: GraphQLString},
                email: { type: GraphQLString},
                address: { type: GraphQLString},
            },
            resolve(parent,args){
                userData.push({
                    id: userData.length + 1, 
                    charityName: args.charityName, 
                    phone: args.phone, 
                    email: args.email, 
                    address: args.address
                })
                return args
            }
        },
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})