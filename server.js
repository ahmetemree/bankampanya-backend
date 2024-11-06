const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3001;

   // Basit bir GET isteği için bir rota tanımlayın
   app.get('/deneme', (req, res) => {
       res.send('Merhaba, Express sunucusu çalışıyor!');
   });

   // Sunucuyu başlat
   app.listen(PORT, () => {
       console.log(`Sunucu ${PORT} portunda çalışıyor.`);
   });