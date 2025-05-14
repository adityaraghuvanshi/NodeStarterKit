import app from './src/app';
import { config } from './src/config';

app.listen(config.port, () => {
  console.log(`🚀 Server is running at http://localhost:${config.port}`);
});
