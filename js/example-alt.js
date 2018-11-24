//<![CDATA[
$(document).ready(function(){

    var cssSelector = {
        jPlayer: "#jquery_jplayer_1", 
        cssSelectorAncestor: "#jp_container_1"
    };

    var playlist = [

        {
author:"Ntl",
title:"Дождь",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Ntl%20-%20%D0%94%D0%BE%D0%B6%D0%B4%D1%8C.mp3",
        },
        {
author:"Южный Централ",
title:"Мои друзья",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9%20%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%20-%20%D0%9C%D0%BE%D0%B8%20%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F.mp3",
        },
        {
author:"Maitre Gims",
title:"J'me tire",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Maitre%20Gims%20-%20J'me%20tire.mp3",
        },
        {
author:"Adelitas Way",
title:"Cage The Beast",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Adelitas%20Way%20-%20Cage%20The%20Beast.mp3",
        },			
        {
author:"Avril Lavigne",
title:"Head Above Water",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Avril%20Lavigne%20-%20Head%20Above%20Water.mp3",
        },
        {
author:"Green Day",
title:"American Idiot",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Green%20Day%20-%20American%20Idiot.mp3",
        },
        {
author:"Green Day",
title:"Wake Me Up When September Ends",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Green%20Day%20-%20Wake%20Me%20Up%20When%20September%20Ends.mp3",
        },
        {
author:"Lemmy",
title:"Doctor Alibi",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Lemmy%20-%20Doctor%20Alibi.mp3",
        },
        {
author:"Linkin Park",
title:"Papercut",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Linkin%20Park%20-%20Papercut.mp3",
        },
        {
author:"Motionless In White",
title:"Voices",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Motionless%20In%20White%20-%20Voices.mp3",
        },
        {
author:"Nirvana",
title:"Smells Like Teen Spirit",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Nirvana%20-%20Smells%20Like%20Teen%20Spirit.mp3",
        },
        {
author:"Static-X",
title:"Bled For Days",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Static-X%20-%20Bled%20For%20Days.mp3",
        },
        {
author:"Static-X",
title:"Push It",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Static-X%20-%20Push%20It.mp3",
        },
        {
author:"Sum 41",
title:"Fat Lip",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Sum%2041%20-%20Fat%20Lip.mp3",
        },
        {
author:"Sum 41",
title:"Yesterday",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Sum%2041%20-%20Yesterday.mp3",
        },
        {
author:"Yelawolf",
title:"Louder",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Yelawolf%20-%20Louder.mp3",
        },
        {
author:"Ленинград",
title:"В Зените",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%20-%20%D0%92%20%D0%97%D0%B5%D0%BD%D0%B8%D1%82%D0%B5.mp3",
        },
        {
author:"Little Big",
title:"Russian Huligans",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%9B%D0%B8%D1%82%D0%BB%20%D0%B1%D0%B8%D0%B3%20-%20Russian%20Huligans.mp3",
        },
        {
author:"СЛОТ",
title:"Мёртвые звёзды",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%A1%D0%9B%D0%9E%D0%A2%20-%20%D0%9C%D1%91%D1%80%D1%82%D0%B2%D1%8B%D0%B5%20%D0%B7%D0%B2%D1%91%D0%B7%D0%B4%D1%8B.mp3",
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