const fs = require('fs');
const mongoose = require('mongoose');

const Company = require('../models/Company');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected!');
        fs.readFile('./src/assets/companies_extended.json', 'utf8', (err, companiesJSON) => {
            if (err) {
                console.error('Error reading JSON file:', err);
                process.exit(1);
            }

            const { companies } = JSON.parse(companiesJSON);

            Company.insertMany(companies)
                .then(() => {
                    console.log('Company seeded successfully!');
                })
                .catch((err) => {
                    console.error('Error inserting companies:', err);
                })
                .finally(() =>
                    mongoose.connection.close());
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });