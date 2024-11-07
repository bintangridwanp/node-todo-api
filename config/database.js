const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',       // Sesuaikan dengan host MySQL kamu
    user: 'root',            // Nama pengguna MySQL
    password: 'Bintangridwan8',            // Kata sandi MySQL (jika ada)
    database: 'todoapp',     // Nama database
});

// Export koneksi pool agar bisa digunakan di bagian lain aplikasi
module.exports = pool.promise();
