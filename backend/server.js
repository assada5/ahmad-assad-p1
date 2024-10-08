const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<assada5>:<db_password>@itdev161.e3aaz.mongodb.net/?retryWrites=true&w=majority&appName=itdev161', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));