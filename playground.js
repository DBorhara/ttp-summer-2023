
// WHERE
const users = await User.findAll({ where: { firstName: 'John' } });

// ORDERING
const orderedUsers = await User.findAll({ order: [['createdAt', 'DESC']]});

// PAGINATION
const paginatedUsers = await User.findAll({ offset: 10, limit: 2 });

