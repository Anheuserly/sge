// src/lib/appwrite.js
import { Client, Databases, Storage, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // 🔥 Hardcoded endpoint
  .setProject("680b2b830035595d7746");             // 🔥 Hardcoded project ID

export const databases = new Databases(client);
export const storage = new Storage(client);

// 🔥 Hardcoded Database & Collections
export const DATABASE_ID = "680b2cfb002805548743";
export const PARTNER_COLLECTION_ID = "680b308e002ef25fd54b";
export const INSTAGRAM_FEED_COLLECTION_ID = "684e72a900338c273bb0";

export { Query };
export default client;
