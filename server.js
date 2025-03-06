const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // Sirve archivos desde la carpeta "public"

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
