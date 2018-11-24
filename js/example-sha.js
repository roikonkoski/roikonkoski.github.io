//<![CDATA[
$(document).ready(function(){

    var cssSelector = {
        jPlayer: "#jquery_jplayer_1", 
        cssSelectorAncestor: "#jp_container_1"
    };

    var playlist = [
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