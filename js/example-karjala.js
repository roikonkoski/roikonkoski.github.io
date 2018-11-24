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