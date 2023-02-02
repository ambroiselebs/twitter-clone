import { sendError } from 'h3'
import { createUser } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformers/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {username, email, password, repeatPassword, name} = body

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid params'}))
  }

  if (password !== repeatPassword) { return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid passwords'})) }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://pbs.twimg.com/profile_images/1528651993170026496/Q0e_7i9l_400x400.jpg'
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
})