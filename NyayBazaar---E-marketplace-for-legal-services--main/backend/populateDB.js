import mongoose from 'mongoose';
import Lawyer from './models/lawyer.js';
import fs from 'fs';

// Replace with your actual MongoDB connection string
const db = `mongodb+srv://imran:imran6465@database-project.bxbdfvz.mongodb.net/`;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB', error));

fs.readFile('./config/ex_lawyers_db3.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const lawyers = JSON.parse(data);

  lawyers.forEach(lawyer => {
    const newLawyer = new Lawyer(lawyer);
    newLawyer.save()
      .then(() => console.log(`${lawyer.name} saved!`))
      .catch((error) => console.error(error));
  });
});