
//mongodb+srv://mongodb:mongodb@cluster0.zrhwbnr.mongodb.net/

const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');

const Service = require('./services/Service')
const NotificationHandler = require('./services/NotificationHandler')

const plugins = require('./plugins/plugins')

// const db = require('./plugins/mongoUtils')
// const queue = require('./plugins/kafka')

const connectToDatabase = require('./database_connect');




const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'tmf-ri-eventserver',
  brokers: ['localhost:9093']
}); //9092 changed to 9093

// Example producer or consumer code


Service.setDB(plugins.db)
Service.setNotifier(NotificationHandler)

 NotificationHandler.setDB(plugins.db)
 NotificationHandler.setQueue(plugins.queue)


const launchServer = async () => {
  try {
    const db = await connectToDatabase();

    const expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    await expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error('Error launching server:', error);
   // await this.close();
  }
};

launchServer().catch(e => logger.error('Unhandled error:', e));