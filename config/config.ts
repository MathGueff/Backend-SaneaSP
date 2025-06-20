require('dotenv').config(); 

const env = process.env.NODE_ENV || 'development';

if (env === 'production' && !process.env.PROD_DATABASE_URL) {
  throw new Error('PROD_DATABASE_URL é necessário para produção');
}

if (env === 'development' && !process.env.DEV_DATABASE_URL) {
  throw new Error('DEV_DATABASE_URL é necessário para desenvolvimento');
}

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};