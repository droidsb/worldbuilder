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
  
  if(cooldown.includes(searchid(message.author.id,cooldown))===false || ticks>searchid(message.author.id,cooldown).time+4000){
    
    cooldown.splice(cooldown.indexOf(searchid(message.author.id,cooldown)),1)
       
       cooldown.push({id:message.author.id,time:ticks})

 var person=message.content.replace(prefix+"attack ","").replace("undefined","")
 
 var usr=searchname(person,searchid(usrserver,users).data)
 
 var att=searchid(message.author.id,searchid(usrserver,users).data);
 
 if(usr.location===att.location){
   
   if(att.equip!==false){
     
     var twen=Math.round(Math.random()*20)
     
     console.log(twen)
     
     if(twen<=1){
       
      att.hp=att.hp-5;
       
       message.channel.send("**You accidently hit yourself with your own weapon**")
       
     }
     
     if(twen>9 && twen>1){
     
     var attacks=Math.round(Math.random()*searchname(att.equip,searchid(usrserver,items).data).chance)
     
     attacks=attacks*(twen/10)
       
       
       
       var prot=0;
       
       if(usr.armor[0]!==false){
        
         prot=prot+usr.armor[0].chance;
         
       }
       if(usr.armor[1]!==false){
        
         prot=prot+usr.armor[1].chance;
         
       }
       
       if(usr.armor[2]!==false){
        
         prot=prot+usr.armor[2].chance;
         
       }
       if(usr.armor[3]!==false){
        
         prot=prot+usr.armor[3].chance;
         
       }
       
       prot=prot/10;
       
       attacks=attacks-prot;
       
       attacks=Math.round(attacks * 10) / 10
       
       if(attacks<0){
         
         
         attacks=0;
       }
       
       message.channel.send("Attack multiplier **"+(twen/10)+"**\nEnemy armor subtractions **"+prot+"**\n**Did "+attacks+" damage**")
       
      
     
     client.users.get(usr.id).send("**"+att.name+"** attacked you with **"+searchname(att.equip,searchid(usrserver,items).data).name+"**")
     
     usr.hp=usr.hp-attacks;
     }
     
     else{message.channel.send("You failed to attack and tripped over your weapon")
      
          client.users.get(usr.id).send("**"+att.name+"** tried to attack you but tripped instead")

}
     
   }
   
   else{message.channel.send("You have no weapon equipped!")}
   
   
 }
  
  else{message.channel.send("They are not in this location")}
    
  }
  
  else{message.channel.send("You must wait "+Math.round((((searchid(message.author.id,cooldown).time)+4000)-(ticks))/1000)+" seconds")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}