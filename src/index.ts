import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('afas')
.then(() => {
    const app = express();
    const port = 3001;

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`)
    })
  })
  .catch(() => console.log('❌ Failed to connect to MongoDB'));

