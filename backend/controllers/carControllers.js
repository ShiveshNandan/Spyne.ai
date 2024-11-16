import car from '../schema/car.js';

export const addcar = async (req, res) => {
  const { title, description, tags} = req.body;
  
  try {
    const newcar = new car({
      title,
      description,
      tags
    });

    await newcar.save();
    res.status(201).json({ message: 'car added successfully', car: newcar });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updatecar = async (req, res) => {
  const {id} = req.params;
  const { title, description, tags} = req.body;
  const found = await car.findById(id);
  try {
    if(!found){
      res.send(404).json({message : "car doesn't found"})
    }
    const Updatedcar = await car.findByIdAndUpdate(id,{title,description,tags}
      
    );
    res.status(201).json({ message: 'car added successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deletecar = async (req, res) => {
  const {id} = req.params;
  const found = await car.findById(id);
  try {
    if(!found){
      res.send(404).json({message : "car doesn't found"})
    }
    const deletecar = await car.findByIdAndDelete(id);
    res.status(201).json({ message: 'car deleted successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getcar = async (req, res) => {
    try {
        const cars = await car.find();
        if (!cars) {
          return res.status(404).json({ message: 'No car found' });
        }
        res.status(200).json(cars);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};