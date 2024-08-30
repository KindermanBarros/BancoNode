import {
  getAllUsers,
  createAnUser,
  updateAnUser,
  deleteAnUser,
} from '../services/userService.mjs';

export async function getUser(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong!' });
  }
}

export async function createUser(req, res) {
  const { id, nome, idade, email, senha } = req.body;
  try {
    await createAnUser(id, nome, idade, email, senha);
    res.status(201).send({ message: 'Usuário criado' });
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong!' });
  }
}

export async function updateUser(req, res) {
  const { id, nome } = req.params;
  try {
    await updateAnUser(id, nome);
    res.status(200).send({ message: 'Usuário atualizado' });
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong!' });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await deleteAnUser(id);
    res.status(200).send({ message: 'Usuário deletado' });
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong!' });
  }
}
