//Loading页面 抄的看不懂
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        loadingFade();
    }
}

function loadingFade() {
    let opacity = 1;
    let loadingPage = document.getElementById('loading');
    let loadingBackground = document.getElementById('loading_bg');
    let time = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(time);
            loadingPage.remove();
            // $('#loading').remove();
            loadingBackground.remove();
        }

        loadingBackground.style.opacity = opacity;
        opacity -= 0.4;
    }, 100);
}

// 抄的看不懂
(function () {
    var a_idx = 0;
    var el = window.document.body; //声明一个变量，默认值为body

    window.onclick = function (event) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国",
            "敬业", "诚信", "友善");

        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed; left: -100%;"; //给p元素设置样式

        var f = 10, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = "white", // 随机颜色
            a = 1, // 透明度
            s = 1.2; // 放大缩小

        var timer = setInterval(function () { //添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:10px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 15)
    }
}());

