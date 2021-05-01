const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');

const token = '';

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Сам ти чубака");

});

bot.onText(/\/mrbean/, (msg) => {

  bot.sendPhoto(msg.chat.id, "https://i.imgur.com/iFvs4.jpeg");
  bot.sendPhoto(msg.chat.id, "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/YLKMO-22D1NXX1ZHW-Full-Image_GalleryBackground-en-US-1559252362378._RI_.jpg");

});

bot.onText(/\/vetaluga/, (msg) => {

  bot.sendPhoto(msg.chat.id, "https://scontent.fiev26-1.fna.fbcdn.net/v/t31.18172-8/18814894_108451353082845_4984285297025098592_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oAOvUzs5vSYAX-GgfAP&_nc_ht=scontent.fiev26-1.fna&oh=da6d88fd5f1a346a0059b461bc2f58f3&oe=60B112CB");

});


bot.onText(/\/den/, (msg) => {

  bot.sendPhoto(msg.chat.id, "https://scontent.fiev26-1.fna.fbcdn.net/v/t1.18169-9/22688023_110988523001180_6113174933057110659_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tQmHmxqYUmgAX8sncpM&_nc_ht=scontent.fiev26-1.fna&oh=290d8bde374cc28ce89104aa4e77b525&oe=60ADC9E5");

});

bot.onText(/\/joke/, async (msg) => {
  const apiKey = ""
  let res = await fetch(`https://api.pgamerx.com/joke/any?api_key=${apiKey}`)
  // Fetch The APi

  let json = await res.json()
  // Convert res into JSON

  // Get the response as a variable
  if (json["setup"]) bot.sendMessage(msg.chat.id, json["setup"] + "\n"+ json["delivery"]);
  if (json["joke"]) bot.sendMessage(msg.chat.id, "joke: " + json["joke"]);
});
