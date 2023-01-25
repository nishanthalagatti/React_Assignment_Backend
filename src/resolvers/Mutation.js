export const signUp = async (parent, args, contextValue, info) => {
  const user = await contextValue.prisma.user.create({
    data: {
      ...args,
    },
  });
  return user;
};
