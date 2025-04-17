import express from 'express';
import cors from 'cors';
import dbConnect from './config/mongoose.config.js';
import noteRoutes from './routes/note.routes.js';


dbConnect()
  .then(() => {
    console.log('✅ Database connection established');
    startServer();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  });

function startServer() {
  const app = express();


  app.use(cors());
  app.use(express.json());


  app.use('/api/notes', noteRoutes);


  app.get('/health', (req, res) => res.sendStatus(200));

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}