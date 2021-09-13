import "dotenv/config";
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long stay singned in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db:{
    adapter:'mongoose',
    url:databaseURL,
  },
  lists:createSchema({

  }),
  ui:{
    isAccessAllowed:()=>true
  },

});
