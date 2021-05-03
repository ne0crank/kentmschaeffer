import mongoose from 'mongoose';
import config from '../server/config';
// Good practice: to validate object IDs
import ObjectID from 'mongodb';

// Mongoose Models
import Account from './account';
import Bank from './bank';
import Budget from './budget';
import Transaction from './transaction';
import User from './user';

const dbConnect = async () => {
  // Initial server connection to MongoDB
  const dbInit =
    mongoose.connect(config.db.uri, config.db.opts, (err) => {
    if (err) throw err;
  });
  dbInit.connection.on('connected', () => {
    console.log(`MongoDB connected at ${config.db.uri}`);
  });

  const accountCheck = mongoose.connection.db.collection('account').count( (err, count) => {
    if (err) throw err;
    if ( count == 0 ) {
      return seedAcct();
    } else {
      return true;
    }
  });

  const bankCheck = mongoose.connection.db.collection('bank').count( (err, count) => {
    if (err) throw err;
    if ( count == 0 ) {
      return seedBank();
    } else {
      return true;
    }
  });

  const budgetCheck = mongoose.connection.db.collection('budget').count( (err, count) => {
    if (err) throw err;
      if ( count == 0 ) {
        return seedBudget();
      } else {
        return true;
      }
    });

    const userCheck = mongoose.connection.db.collection('user').count( (err, count) => {
      if (err) throw err;
      if ( count == 0 ) {
        return seedUser();
      } else {
        return true;
      }
    });

    if ( accountCheck && bankCheck && budgetCheck && userCheck ) {
      return dbInit;
    }

};


const seedBank = async () => {

  // insert basic bank type
  const appBank = await new models.Bank({
    name: 'Budget Bank',
    type: 'bank',
    desc: 'sample bank',
    active: false,
  });
  await appBank.save();
};

const seedUser = async () => {
  // restore app user in case of compromise
  const appUser = new models.User({
    name: process.env.APP_USER,
    alias: process.env.APP_USER,
    email: process.env.APP_EMAIL,
    password: process.env.APP_PWD,
    type: 'admin',
  });
  await appUser.save();
};

const seedAcct = async () => {
  // insert basic account type
  const appAcct = new models.Account({
    name: 'Mortgage',
    type: 'bank',
    email: 'sample mortgage account at Budget Bank',
    active: false,
    balance: '100000',
  });
  await appAcct.save();

};

const seedBudget = async () => {
  // insert basic budget type
  const appBudget = new models.Budget({
    name: 'App Mortgage',
    type: 'mortgage',
    desc: 'sample mortgage budget at Budget Bank',
    active: false,
    amount: '900',
  });
  await appBudget.save();

};


const models = { Account, Bank, Transaction, User };

module.exports = { dbConnect, models };
