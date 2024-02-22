/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import mongoose from "mongoose";
import logger from "./logger";

class Database {
  uri: string;
  connections: { [id: string]: any } = {};

  constructor(url: string) {
    this.uri = url;
  }

  createConnections = async () => {
    const connectionIDs = [
      "connection1",
      "connection2",
      "connection3",
      "connection4",
      "connection5",
      "connection6",
      "connection7",
      "connection8",
      "connection9",
      "connection10",
    ];
    for (const id of connectionIDs) {
      this.connections[id] = await mongoose.createConnection(this.uri);
    }
  };

  connect = async (): Promise<void> => {
    try {
      await mongoose.connect(this.uri);
      console.log("Database Connected");

      logger.info("Database Connected");
    } catch (error) {
      logger.error("DATABASE CONNECTION FAILED:", error);
      process.exit(1);
    }
  };
  disconnectConnection = async (connectionIDs:any) => {
    if (this.connections[connectionIDs]) {
        await this.connections[connectionIDs].close();
        delete this.connections[connectionIDs];
        console.log(`Connection ${connectionIDs} closed.`);
    } else {
        console.log(`Connection ${connectionIDs} does not exist.`);
    }
}

  checkConnections = async () => {
    var openConnections = mongoose.connections.filter(
      (op) => op.readyState === 1,
    );
    var closedConnections = mongoose.connections.filter(
      (op) => op.readyState === 0,
    );
    console.log("open", openConnections.length);
    console.log("close", closedConnections.length);
  };


  disconnect = async (): Promise<void> => {
    try {
      await mongoose.disconnect();
    } catch (error) {
      logger.error("mongodb dissconnection error", error);
    }
  };


}


export default Database;
