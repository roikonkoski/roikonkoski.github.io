//<![CDATA[
$(document).ready(function(){

    var cssSelector = {
        jPlayer: "#jquery_jplayer_1", 
        cssSelectorAncestor: "#jp_container_1"
    };

    var playlist = [
        {
            author:"Мир Строк и Аня Пянтина",
            title:"Карелия",
            discription: " ",
            mp3:"https://mussic2000.github.io/music-alboms/%D0%9C%D0%B8%D1%80%20%D0%A1%D1%82%D1%80%D0%BE%D0%BA%20%D0%B8%20%D0%90%D0%BD%D1%8F%20%D0%9F%D1%8F%D0%BD%D1%82%D0%B8%D0%BD%D0%B0%20-%20%D0%9A%D0%B0%D1%80%D0%B5%D0%BB%D0%B8%D1%8F.mp3",
        },
        {
            author:"Пилот",
            title:"Карелия",
            discription: " ",
            mp3:"https://mussic2000.github.io/music-alboms/%D0%9F%D0%B8%D0%BB%D0%BE%D1%82%20-%20%D0%9A%D0%B0%D1%80%D0%B5%D0%BB%D0%B8%D1%8F.mp3",
        },
        {
            author:"Виталя Альбатрос",
            title:"За базар",
            discription: " ",
            mp3:"https://mussic2000.github.io/music-alboms/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D1%8F%20%D0%90%D0%BB%D1%8C%D0%B1%D0%B0%D1%82%D1%80%D0%BE%D1%81%20-%20%D0%97%D0%B0%20%D0%B1%D0%B0%D0%B7%D0%B0%D1%80.mp3",
        },
        {
            author:"Виталя Альбатрос",
            title:"Петрозаводск",
            discription: " ",
            mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D1%8F%20%D0%90%D0%BB%D1%8C%D0%B1%D0%B0%D1%82%D1%80%D0%BE%D1%81%20-%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%20.mp3",
        },
        {
author:"Владимир Квасов",
title:"Нас Больше нет",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%20%D0%9A%D0%B2%D0%B0%D1%81%D0%BE%D0%B2%20-%20%D0%9D%D0%B0%D1%81%20%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%20%D0%9D%D0%B5%D1%82.mp3",
        },
        {
author:"Спецназ МВД",
title:"Горит Чечня на блокпостах",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%A1%D0%BF%D0%B5%D1%86%D0%BD%D0%B0%D0%B7%20%D0%9C%D0%92%D0%94%20-%20%D0%93%D0%BE%D1%80%D0%B8%D1%82%20%D0%A7%D0%B5%D1%87%D0%BD%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D1%85.mp3",
        },
        {
author:"Многоточие",
title:"Последний желтый лист",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%82%D0%BE%D1%87%D0%B8%D0%B5%20-%20%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9%20%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9%20%D0%BB%D0%B8%D1%81%D1%82%20%D0%BF%D0%B0%D0%B4%D0%B0%D0%BB%20%D0%BD%D0%B5%D1%81%D0%BF%D0%B5%D1%88%D0%B0%20(zaycev.net).mp3",
        },
        {
author:"ВВ МВД РФ 33 ОБрОН",
title:"Братишкам",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%92%D0%92%2033%20%D0%9E%D0%91%D1%80%D0%9E%D0%9D%20-%20%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%88%D0%BA%D0%B0%D0%BC.mp3",
        },
        {
author:"Армейские песни",
title:"Последний шаг",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%90%D0%BF%D0%BC%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8%20-%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9%20%D1%88%D0%B0%D0%B3.mp3",
        },
        {
author:"Скрэтч",
title:"Помни Их!",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%A1%D0%BA%D1%80%D1%8D%D1%82%D1%87%20-%20%D0%9F%D0%BE%D0%BC%D0%BD%D0%B8%20%D0%98%D1%85.mp3",
        },
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
author:"Scorpions",
title:"Still Loving You",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Scorpions%20-%20Still%20Loving%20You.mp3",
        },
        {
author:"Nickelback",
title:"What Are You Waiting For?",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/Nickelback%20-%20What%20Are%20You%20Waiting%20For.mp3",
        },
        {
author:"ВВ МВД РФ",
title:"Одиночными",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/%D0%92%D0%92%20%D0%9C%D0%92%D0%94%20%D0%A0%D0%A4%20-%20%D0%9E%D0%B4%D0%B8%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%BC%D0%B8.mp3",
        },
        {
author:"CYGO",
title:"Бежим",
discription: " ",
mp3:"https://raw.githubusercontent.com/mussic2000/mussic2000.github.io/master/music-alboms/CYGO%20-%20%D0%91%D0%B5%D0%B6%D0%B8%D0%BC.mp3",
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