setInterval(()=>{
    var apl = mc.getOnlinePlayers();
    for (var id in apl){
        let pl = mc.getOnlinePlayers()[id]
        setScoreBoard(pl);
    }
}, 1000)


function getSeason(){
   var today = new Date();
   let date = today.getDate();
   var season = "";
   if(date <= 7){
     season = "Xuân";
   }
   if(date <= 14){
     season = "Hè";
   }
   if(date <= 21){
     season = "Thu";
   }
   if(date <= 30){
     season = "Đông";
   }
return season;
}

mc.listen("onJoin", () =>{ 
  getSeason(); 
});



function setScoreBoard(pl){
    mc.getPlayer(pl.xuid).removeSidebar();
    let hp = pl.health;
    let maxhp = pl.maxHealth;
    let ping = pl.getDevice().avgPing;
    let name = pl.realName;
    let online = mc.getOnlinePlayers().length;
    let season = getSeason();
    var player_name = "§b§lＮＡＭＥ: §f" + name;
    var player_hp = "§b§lＨＰ: §f" + hp +"/" + maxhp;
    var player_ping = "§b§lＰＩＮＧ: §f" + ping;
    var server_online = "§b§lＯＮＬＩＮＥ: §f" + online;
    var server_season = "§b§lＳＥＡＳＯＮ: §f"+ season;
    var server_ip = "=============="
    var data = {};

    data[player_name] = 5;
    data[player_hp] = 4;
    data[player_ping] = 3;
    data[server_online] = 2;
    data[server_season] = 1
    data[server_ip] = 0;
    pl.setSidebar("§a§lＴＶＴ ＳＵＲＶＩＶＡＬ", data, 1);
    
    
}


