const fileService = require('../services/fileService');

async function uploadImage(req, res) {
  try {
    const result = await fileService.uploadImage(req.file);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getImage(req, res) {
  const { id } = req.params;
  try {
    const image = await fileService.getImage(id);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename${image.filename}`,
    );
    res.status(200).send(image.content);
  } catch (error) {
    res.status(404).send({ message: 'Imagem não encontrada' });
  }
}

module.exports = {
  uploadImage,
  getImage,
};
