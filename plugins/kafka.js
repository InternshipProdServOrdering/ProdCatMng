'use strict';

const { Kafka } = require("kafkajs");

const config = require('../config');
const logger = require('../logger');

const clientId = config.tmfid ? `tmf${config.tmfid}-eventserver` : 'tmf-ri-eventserver';

const args = process.env;

const default_brokers = ["localhost:9093"];

const brokers = args?.kafka_brokers?.split(',') || config?.kafka_brokers || default_brokers;


logger.info("kafka::brokers :: args=" + JSON.stringify(args?.kafka_brokers?.split(',')));

logger.info("kafka::brokers" + JSON.stringify(brokers))

logger.info("kafka::brokers :: args=" + JSON.stringify(brokers));

// const retry = { 
//   retry: {
//     maxRetryTime: 60000,
//     initialRetryTime: 100,
//     retries: 20
//   }
// }

const retry = {
  maxRetryTime: 60000,
  initialRetryTime: 100,
  retries: 20
};

let kafka = new Kafka({ clientId, brokers, retry });
let producer = kafka.producer();
let consumer = kafka.consumer({ groupId: clientId });

// const setConsumer = async (reader) => {
//   kafka = new Kafka({ reader, brokers })
//   producer = kafka.producer()
//   consumer = kafka.consumer({ groupId: reader })
// }

// const produce = async (topic, msg) => {

//   const content = JSON.stringify(msg,null,0)
//   const messages = [ { value: content} ]

//   logger.debug("kafka:: produce topic: " + topic)

//   try {
//     await producer.connect()
//     await producer.send({ topic: topic, messages: messages})
//   } catch (err) {
//     logger.error("could not write message " + err)
//   }
// }

// const consume = async (topic,process) => {

//   logger.debug("kafka:: consume topic: " + topic)

//   try {
//     await consumer.connect()
//     await consumer.subscribe({ topic })

//   } catch (err) {
//     logger.error("could not write message " + err)
//   }

//   await consumer.connect()
//   await consumer.subscribe({ topic })
//   await consumer.run({
//       eachMessage: ({ message }) => {
//         logger.debug("kafka:: consume: process" + message)
//         const value = JSON.parse(message.value)
//         process(value)
//       },
//   })

// }

// const getHost = () => {
//   return brokers?.[0]?.split(':')[0] || 'localhost'
// }

// const getPort = () => {
//   return brokers?.[0]?.split(':')[1] || 9092
// }

// module.exports = { produce, consume, setConsumer, getHost, getPort }

const produce = async (topic, msg) => {
  const content = JSON.stringify(msg);
  const messages = [{ value: content }];

  logger.debug("kafka::produce topic: " + topic);

  try {
    await producer.connect();
    await producer.send({ topic, messages });
    logger.info("Message sent successfully to topic: " + topic);
  } catch (err) {
    logger.error("could not write message: " + err);
  }
};

const consume = async (topic, process) => {
  logger.debug("kafka::consume topic: " + topic);

  try {
    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        logger.debug(`Received message from ${topic}:${partition}`);
        const value = JSON.parse(message.value.toString());
        process(value);
      }
    });
  } catch (err) {
    logger.error("could not consume message: " + err);
  }
};

const getHost = () => {
  return brokers[0]?.split(':')[0] || 'localhost';
};

const getPort = () => {
  return parseInt(brokers[0]?.split(':')[1] || '9093', 10);
}; //changed 9092 to 9093

module.exports = { produce, consume, getHost, getPort };


// 'use strict';

// const { Kafka } = require("kafkajs");
// const config = require('../config');
// const logger = require('../logger');

// const clientId = config.tmfid ? `tmf${config.tmfid}-eventserver` : 'tmf-ri-eventserver';
// const args = process.env;
// const default_brokers = ["localhost:9092"];
// const brokers = args?.kafka_brokers?.split(',') || config?.kafka_brokers || default_brokers;

// logger.info("kafka::brokers :: args=" + JSON.stringify(brokers));

// const retry = {
//   maxRetryTime: 60000,
//   initialRetryTime: 100,
//   retries: 20
// };

// let kafka = new Kafka({ clientId, brokers, retry });
// let producer = kafka.producer();
// let consumer = kafka.consumer({ groupId: clientId });

// const produce = async (topic, msg) => {
//   const content = JSON.stringify(msg);
//   const messages = [{ value: content }];

//   logger.debug("kafka::produce topic: " + topic);

//   try {
//     await producer.connect();
//     await producer.send({ topic, messages });
//     logger.info("Message sent successfully to topic: " + topic);
//   } catch (err) {
//     logger.error("could not write message: " + err);
//   }
// };

// const consume = async (topic, process) => {
//   logger.debug("kafka::consume topic: " + topic);

//   try {
//     await consumer.connect();
//     await consumer.subscribe({ topic });
//     await consumer.run({
//       eachMessage: async ({ topic, partition, message }) => {
//         logger.debug(`Received message from ${topic}:${partition}`);
//         const value = JSON.parse(message.value.toString());
//         process(value);
//       }
//     });
//   } catch (err) {
//     logger.error("could not consume message: " + err);
//   }
// };

// const getHost = () => {
//   return brokers[0]?.split(':')[0] || 'localhost';
// };

// const getPort = () => {
//   return parseInt(brokers[0]?.split(':')[1] || '9092', 10);
// };

// module.exports = { produce, consume, getHost, getPort };
