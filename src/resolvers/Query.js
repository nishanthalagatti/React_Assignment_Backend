export const checkUserExists = async (parent, args, contextValue, info) => {
  const user = await contextValue.prisma.user.findMany({
    where: {
      OR: [
        {
          email: args.email,
        },
        {
          uname: args.uname,
        },
      ],
    },
  });
  return user;
};
