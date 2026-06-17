// import { MongoClient } from 'mongodb';
// import { attachDatabasePool } from '@vercel/functions';

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!uri) {
//   throw new Error('Please add your Mongo URI to Environment Variables');
// }

// client = new MongoClient(uri, options);
// clientPromise = client.connect();

// attachDatabasePool(client);

// export default clientPromise;
