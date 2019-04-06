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
  
/* for(var i=0; i<users.length; i++){
    
    searchid(usrserver,users).data[i].armor[0]=false;
    searchid(usrserver,users).data[i].armor[1]=false;
    searchid(usrserver,users).data[i].armor[2]=false;
    searchid(usrserver,users).data[i].armor[3]=false;
    
  }
  fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');*/
  
   if(searchid(message.author.id, searchid(usrserver,users).data)!==undefined){
    
    var name=searchid(message.author.id, searchid(usrserver,users).data).name;
     
     
    
    var health=searchid(message.author.id, searchid(usrserver,users).data).hp;
     
      var usr=searchid(message.author.id, searchid(usrserver,users).data)
    
    var total=40;
     
     console.log(usr.armor)
     
     var helmet=usr.armor[0];
     
     var chestplate=usr.armor[1];
     
     var pants=usr.armor[2];
     
     var boots=usr.armor[3];
     
     
     if(helmet===false){
       
      helmet={name: "No Helmet"}
       
     }
     
     if(chestplate===false){
       
      chestplate={name: "No Chestplate"}
       
     }
     
     if(pants===false){
       
      pants={name: "No Pants" }
       
     }
     
     if(boots===false){
       
      boots={name: "No Boots" }
       
     }
     
     var wep=usr.equip;
     
     if(usr.equip===false){
       
      wep="No weapon equipped" 
       
     }
     
    
    message.channel.send("**"+name+": **"+(Math.round(health * 10) / 10)+"/"+total+" HP\n**Weapon: **"+wep+"\n**Armor:**\nHelmet: "+helmet.name+"\nChestplate: "+chestplate.name+"\nPants: "+pants.name+"\nBoots: "+boots.name);
     
     //message.channel.send(helmet.name)
      
    }
    
    else{message.channel.send("Could not find account")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}