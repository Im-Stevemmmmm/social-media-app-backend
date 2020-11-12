import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/UserResolver';

const main = async () => {
  mongoose.connect(
    'mongodb+srv://EstebanGarcia:e3ddXRsxYxhdap4@maincluster.2qdh1.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'userdata' }
  );

  const database = mongoose.connection;
  database.on('error', console.error.bind(console, 'Connection error:'));
  database.once('open', function () {
    console.log('Connected successfuly to the database');
  });

  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server started on localhost:4000');
  });
};

main().catch(err => console.log(err));
