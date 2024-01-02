import { createRoot } from 'react-dom/client';
import App from './App'; // Replace 'App' with the main component of your application
import '@fontsource/poppins'; // Default weight (400)
import '@fontsource/poppins/400.css'; // Weight 400 (regular)
import '@fontsource/poppins/500.css'; // Weight 500
import '@fontsource/poppins/600.css'; // Weight 600
import '@fontsource/poppins/400-italic.css';


// Use createRoot to render your application
createRoot(document.getElementById('root')).render(<App />);

