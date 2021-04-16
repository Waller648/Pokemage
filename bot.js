const tb = require("tb93");
let bot = new tb.Trollbox(new tb.User("Pokemage [p!h]", "#3DC12F;bot"),true);
const he = require("he")
let devs = ["MTYwNjA","MzhjMDQ", "MmZkM2Q", "NDViZjE", "MWQwODc", "MmE4ZDI", "MmYODM0", "OTBmYjI", "MWQwNDY", "MmZkNDN", "MTM5MmY"]
let loadedpokemon = []

bot.socket.on('_connected', function(data) {
	bot.send("Pokemage v0.01\n© 1791 Magestick\n\nThis bot is on extremely early development.\n\n"+loadedpokemon.length+" pokemon loaded in 0 sec.\nUse p!help to show commands.")
  })

bot.on_message = msg => {
  msg.nick = he.decode(msg.nick)
msg.content  = he.decode(msg.content)
var message = msg.content;
var args = message.split(' ').slice(1);

  if (msg.nick.includes("*hugs")) {return}
    if (msg.content.includes("*hugs")) {return}

  if (msg.content.toLowerCase() === "p!help") {
    bot.send("Hello! I'm Pokemage v0.01, the Pokemon bot.\nThis bot is on extremely early development.\nHere is the commands:\n\np!help\np!myinfo\np!evaljs [admin and owner only]\n\nMore commands will be added soon.\nCopyright © 1791 Magestick")
  }
    if (msg.content.toLowerCase() === "p!h" || msg.content.toLowerCase() === "p!") {
    bot.send("Please use p!help")
  }
      if (msg.content.toLowerCase() === "p!myinfo") {
    bot.send("You are "+msg.nick+", with the your home "+msg.home+".")
  }


	if (msg.content.startsWith("p!evaljs") || msg.content == "p!evaljs"){
		var arg = msg.content.replace("p!evaljs ","") //grab args
		if (devs.includes(msg.home)){
		if (arg == "p!evaljs" || arg == ""){
		bot.send("Nope! Type js!")
		return
		}
		if (arg=="p!evaljs "){
			bot.send("Missing argument! ");
			return "missing arg";
		}
		try{
		if (arg.toLowerCase().includes('child_process')){
		 bot.send("ERROR: Illegal access to computer detected!")
		 return "illegal";
		}
			if (arg.toLowerCase().startsWith('eval =') || arg.toLowerCase().includes('eval == false')){
		 bot.send("That's illegal you duck!")
		 return "illegal";
		}
		if (arg.includes("*hugs") || arg.includes("!send") || arg.includes("!snd") || arg.includes("process.exit") || arg.includes("bot = false")){
		  bot.send("I do this later, but not now!")    
		  return;
		  }
		bot.send("Returned: " + eval(arg))
	  }catch (err){
		bot.send("ERROR!\n" + err.toString())
		}
	} else {
		bot.send("❌ admin only command")
		}
		}

//msg.content.toLowerCase() - content of message
//msg.nick - username
//msg.home - home-id
//msg.date - date when message created
};
bot.connect();
