#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = process.argv[2] || "nuevo-proyecto";
const templateDir = path.join(__dirname, "template");

fs.copy(templateDir, targetDir)
  .then(() => {
    console.log(`✅ Proyecto creado en ./${targetDir}`);
    console.log(`➡️ Ejecutá: cd ${targetDir}`);
    console.log(`➡️ Ejecutá: npm install`);
    console.log(`➡️ Ejecutá: npm run dev`);
  })
  .catch((err) => {
    console.error("❌ Error al copiar la plantilla:", err);
  });
