// function updateUserRoute(body, params) {
function updateUserRoute({ body, params }) {
  const { name, email, password } = body
  const { url } = params

  updateUserController({
    name,
    email,
    password,
    url
  })
}

function updateUserController(data, params) {
  const { name, email, password } = data
  const { url } = params
  
  userRepository.update({
    name,
    email,
    password,
    url
  })
}

const userRepository = {
  update: (data, params) => {
    const user = updateUserOnDatabase()

    return {
      user,
      asdfgdg
    }

  }
}
