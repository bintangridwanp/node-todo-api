const express = require('express');
const taskRoutes = require('./routes/task-routes');
const app = express();
const PORT = 3000;

// Middleware untuk menangani JSON
app.use(express.json());

// Rute utama untuk API tugas
app.use('/api', taskRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
