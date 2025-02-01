const PORT = process.env.PORT || 5000;
const app = require('./seeders/apis'); 
const { sequelize } = require('./models'); 

sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
