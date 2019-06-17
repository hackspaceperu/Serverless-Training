import {sns} from '../../config/amazon'

sns.setSMSAttributes(
  {
    attributes: {
      DefaultSMSType: "Transactional"
    }
  },
  function(err) {
    if (err) {
      console.log(err, err.stack);
    }
  }
);

const sendSMS = async (Message, PhoneNumber) => {
  const params = { Message, MessageStructure: "string", PhoneNumber };
  return new Promise((resolve, reject) => {
    sns.publish(params, function(err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const sendNotifications = async (arrUsers) => {
  const data = arrUsers.map(async({firstName, lastName, phoneNumber})=>{
    const Message = `${firstName} ${lastName}`
    let results = await sendSMS(Message, phoneNumber)
    return results
  })
  let response = Promise.all(data)
  return response
}

export {
  sendSMS,
  sendNotifications
}
