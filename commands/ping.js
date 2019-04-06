const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    //await message.channel.send(`${Date.now() - message.createdTimestamp}ms`);
  
  // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}