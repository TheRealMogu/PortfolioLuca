import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve CV PDF file
  app.get("/Luca_CV.pdf", (req, res) => {
    const cvPath = path.resolve(import.meta.dirname, "..", "attached_assets", "CV2025 Magugliani Luca.pdf");
    
    if (fs.existsSync(cvPath)) {
      res.sendFile(cvPath);
    } else {
      res.status(404).send("CV file not found");
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
