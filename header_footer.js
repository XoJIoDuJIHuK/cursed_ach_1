function change()
{
    let head = '<div class="top_bar">\
            <input type="checkbox" id="nav-toggle" hidden>\
            <nav class="nav">\
                <label for="nav-toggle" class="nav-toggle">\
                    <div class="button"></div>\
                </label>\
                <div class="p1"><a href="main.html">Главная</a></div>\
                <div class="p1"><a href="catalogue_all.html">Все модели</a></div>\
                <div class="p2"><a href="991.html">Porsche 991</a></div>\
                <div class="p2"><a href="Cayenne.html">Cayenne</a></div>\
                <div class="p2"><a href="Panamera.html">Panamera</a></div>\
                <div class="p1"><a href="map.html">Карта</a></div>\
            </nav>\
            <div class="title">AveragePorscheEnjoyer</div>\
            <div class="logo"></div>\
        </div>';
    let foot = '<div class="footer"><a href="https://facebook.com" class="icon1">\
    <div class="icon"></div></a>\
        <a href="https://instagram.com" class="icon2"><div></div></a>\
        <a href="https://tiktok.com" class="icon3"><div></div></a>\
        <a href="https://telegram.org" class="icon4"><div></div></a>\
        <a href="https://vk.com" class="icon5"><div></div></a>\
        <div class="text">\
        <a href="about.html">\
            Юридическая информация\
        </a>\
            tochilo.oleg@yandex.by\
        </div></div>'
    document.querySelector("header").innerHTML = head;
    document.querySelector("footer").innerHTML = foot;
};
document.addEventListener("DOMContentLoaded", change);