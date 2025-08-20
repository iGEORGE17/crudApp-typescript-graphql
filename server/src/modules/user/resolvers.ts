import { generateToken } from '../../utils/token';
import { UserModule } from './generated-types/module-types'
 
export const resolvers: UserModule.Resolvers = {
  // Here, you can implement only the types and fields defined in your module!
    Query: {
        getUser: async (_, { id }, { models }) => {
        return models.UserModel.findById(id);
        },
        listUsers: async (_, __, { models }) => {
        return models.UserModel.find();
        },
        me: async (_, __, { auth }) => {
            if (!auth) {
                throw new Error('Not authenticated');
            }
            if (!auth.user) {
                throw new Error('User not found');
            }

            return {
                ...auth.user, // Assuming auth contains the user object
                id: auth.user._id, // Ensure the ID is in the correct format
            };
        }
    },
    Mutation: {
        createUser: async (_, { input }, { models }) => {
            const user = new models.UserModel(input);
            await user.save();
            return user;       
        },
        loginUser: async (_, { input }, { models }) => {
            const { email, password } = input;
            const user = await models.UserModel.findOne({ email });
            if (!user || !(await user.comparePassword(password))) {
                throw new Error('Invalid credentials');
            }
            return {
                user,
                token: generateToken(user),
            };
        },
        updateUser: async (_, { id, input }, { models, auth}) => {
            return models.UserModel.findByIdAndUpdate(id, input, { new: true });
        },
        deleteUser: async (_, { id }, { models, auth }) => {
            return models.UserModel.findByIdAndDelete(id);
        },
    },
}