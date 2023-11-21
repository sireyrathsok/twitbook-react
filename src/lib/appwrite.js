import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655c83d252b19027367f"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
