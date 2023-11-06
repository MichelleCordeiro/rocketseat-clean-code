// Nomenclatura de variáveis

const userCategories = [
  {
    userCategory: 'User',
    followers: 5
  },
  {
    userCategory: 'Friendly',
    followers: 50,
  },
  {
    userCategory: 'Famous',
    followers: 500,
  },
  {
    userCategory: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`)

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const user = await response.json()

  const userCategoriesLimits = userCategories.sort((a, b) =>  b.followers - a.followers)

  const category = userCategoriesLimits.find(limit => user.followers > limit.followers)

  const result = {
    githubUsername,
    category: category.userCategory
  }

  return result
}

getData({ query: {
  username: 'josepholiveira'
}}, {})