//<![CDATA[
$(document).ready(function(){

    var cssSelector = {
        jPlayer: "#jquery_jplayer_1", 
        cssSelectorAncestor: "#jp_container_1"
    };

    var playlist = [
        {
author:"CYGO",
title:"Бежим",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/CYGO%20-%20%D0%91%D0%B5%D0%B6%D0%B8%D0%BC.mp3",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },			
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
        {
author:"#",
title:"#",
discription: " ",
mp3:"#",
        },
		
    ];

	 
    var options = {
        swfPath: "js",
        supplied: "oga, mp3",
        wmode: "window",
        smoothPlayBar: false,
        keyEnabled: true
    };
    new jPlayerPlaylist(cssSelector, playlist, options);
});
//]]>