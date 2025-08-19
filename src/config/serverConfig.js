import dotenv from 'dotenv';

dotenv.config();  // Load environment variable from .env file

export const PORT = process.env.PORT || 3200;  // Default a PORT variable