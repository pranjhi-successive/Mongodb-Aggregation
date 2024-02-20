/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import logger from './logger';

class Database {
    uri: string;

    constructor(url:string) {
        this.uri = url;
    }

    connect = async (): Promise<void> => {
        try {
            await mongoose.connect(this.uri);

            logger.info('Database Connected');
        } catch (error) {
            logger.error('DATABASE CONNECTION FAILED:', error);
            process.exit(1);
        }
    };

    disconnect = async (): Promise<void> => {
        try {
            await mongoose.disconnect();
        } catch (error) {
            logger.error('mongodb dissconnection error', error);
        }
    };
}

export default Database;
