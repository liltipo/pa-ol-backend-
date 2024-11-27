const createResolvers = (model) => ({
    getAll: async (req, res) => {
      try {
        const items = await model.find();
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener datos', error });
      }
    },
    getById: async (req, res) => {
      try {
        const item = await model.findById(req.params.id);
        if (!item) return res.status(404).json({ mensaje: 'No encontrado' });
        res.status(200).json(item);
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener datos', error });
      }
    },
    create: async (req, res) => {
      try {
        const newItem = new model(req.body);
        await newItem.save();
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear', error });
      }
    },
    update: async (req, res) => {
      try {
        const updatedItem = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ mensaje: 'No encontrado' });
        res.status(200).json(updatedItem);
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar', error });
      }
    },
    delete: async (req, res) => {
      try {
        const deletedItem = await model.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ mensaje: 'No encontrado' });
        res.status(200).json({ mensaje: 'Eliminado con éxito', item: deletedItem });
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error });
      }
    },
  });
  
  module.exports = createResolvers;
  