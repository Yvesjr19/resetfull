const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

app.use(logger);

const taskRoutes = require('./node_modules/routes/taskRoutes');


const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
