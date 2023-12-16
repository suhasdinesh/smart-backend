const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

const contactRoutes = require('./src/routes/contactRoutes')
const rechargeRoutes = require('./src/routes/rechargeRoutes')
const schoolRoutes = require('./src/routes/schoolRoutes')
const studentRoutes = require('./src/routes/studentRoutes')
const transactionRoutes = require('./src/routes/transactionRoutes')
const userRoutes = require('./src/routes/userRoutes')
const authRoutes = require('./src/routes/auth')
const passport = require('passport');
require('./src/config/passport'); // Import Passport configuration

dotenv.config();
const app = express();

// Apply Helmet for security headers
app.use(helmet());

// Enable CORS with default settings
app.use(cors());

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middlewares
app.use(express.json());


// Initialize Passport
app.use(passport.initialize());


// Basic route for testing
app.get('/', (req, res) => {
  res.send('Smart Payphone API Root');
});

const apiPrefix = '/api/v1/'

app.use(`${apiPrefix}auth`,authRoutes);
app.use(`${apiPrefix}contact`,contactRoutes);
app.use(`${apiPrefix}recharge`,rechargeRoutes);
app.use(`${apiPrefix}school`,schoolRoutes);
app.use(`${apiPrefix}student`,studentRoutes);
app.use(`${apiPrefix}transaction`,transactionRoutes);
app.use(`${apiPrefix}user`,userRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to MongoDB
connectDB();


// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
