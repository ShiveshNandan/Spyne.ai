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

export const getcar = async (req, res) => {
    try {
        const cars = await car.find();
        console.log("hello")
        if (!cars) {
          return res.status(404).json({ message: 'No car found' });
        }
        res.status(200).json(cars);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};