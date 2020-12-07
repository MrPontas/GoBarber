import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    // eslint-disable-next-line no-restricted-globals
    name,
    email,
    password,
  });

  // delete user.password;
  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatar_filename: request.file.filename,
    });

    // delete user.password; TA DANDO ERRO ESSE COMANDO PRA DELETAR A SENHA

    return response.json(user);
  },
); // rota usada no lugar do put pra mudar geralmente uma informação

export default usersRouter;
