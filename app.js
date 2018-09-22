
// Copyright BozzaBot ⓒ 2018 by QSmally, all rights reserved.
// Obviously Node.js and Discord.js are NOT made by me,
// They are rightfully created by their owners.

// Get Discord.js library and creating a new bot user.
const Discord = require("discord.js");
const bot     = new Discord.Client();

// Message event.
bot.on("message", async message => {

    // Return if those rules are present.
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;

    // Variables for Command handling.
    let prefix   = "+";
    let msgArray = message.content.split(" ");
    let cmd      = msgArray[0].toLowerCase();
    let args     = msgArray.slice(1);

    // Information Commnad.
    if (cmd == `${prefix}info`) {
        message.channel.send("`Welcome to the Cyph Network! We are a minecraft server based in the United Kingdom. It is a PvP Server releasing soon. The gamemodes that we will have on our server is Factions , UHC , Skywars and ofcourse Practice. The website is currently under development at the moment however we will get back to you once the website is up and running ! Enjoy your stay here at the Cyph Network` ");
        return true;
    }

    if (cmd == `${prefix}ip`) {
        message.channel.send("`The server is not released yet however check out our store: ` ");
        return true;
    }

    if (cmd == `${prefix}staff`) {
        message.channel.send("`Founder: Bozza Owner: Nucex Head Dev: QSmally Managers: TastyBread and Such Admins: Itsme and Kami-Senpai Moderators: Nicole and jayden Helpers: Cynthrox ` ");
        return true;
    }


    if (cmd == `${prefix}help`) {
        message.channel.send("`Use +Info for Server Info. Use +ip for Server IP. Use +Staff to see whos staff. ` ");
        return true;
    }

    if (cmd == "ip") return message.channel.send("Server isnt released yet");
    if (message.content.toLowerCase() == "whats the ip?") return message.channel.send("The server is not released yet.");

    if (message.content.toLowerCase().includes("ip")) return message.channel.send("The server is not released yet");
    if (message.content.toLowerCase().includes("dibbledablle")) return message.channel.send("You have unlocked the secret command :o ");
    if (cmd == "DibbleDablle") return message.channel.send("oWo Secret Command ! GG");
});

// Ready event.
bot.on("ready", async () => {bot.user.setActivity("+Info For Server Information");
    console.log(`Connection to Discord.\nUser: ${bot.user.tag}\nID: ${bot.user.id}`);
    
});

bot.login("NDkyNzk0Mzg5Mjg3MTQxMzk2.DocHAg.fYCLXGyUnPDY5djrU6yr7hRmFXo");
