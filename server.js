// server/server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const reportsRoutes = require('./routes/reports');
const prlRoutes = require('./routes/prl');
const plRoutes = require('./routes/pl');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/prl', prlRoutes);
app.use('/api/pl', plRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});