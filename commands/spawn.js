const Discord = module.require("discord.js");

var fs = require('fs');


function searchname(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}


function searchid(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}

function searchitem(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].items.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}

function searchlocation(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].location.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}

function searchtravelname(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].travelname.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}

module.exports.run = async (client, message, args, prefix,ticks,users,items,locations,mobs,moblist,cooldown,server) => {
  
  var usrserver=searchid(message.author.id,server).server
  
if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
 
  var spawn=message.content.replace(prefix+"spawn ","")
  
  if(searchname(spawn,searchid(usrserver,moblist).data)!==undefined || searchname(spawn,searchid(usrserver,moblist).data)!==null){
  
  searchid(usrserver,mobs).data.push(searchname(spawn,searchid(usrserver,moblist).data))
    
    //console.log(searchname(spawn,moblist))
    
    //fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
    
    message.channel.send("Spawned in **"+searchname(spawn,searchid(usrserver,moblist).data).name+"**!")
    
  }
  
}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}