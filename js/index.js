//Loading页面
// document.onreadystatechange = function () {
//     switch (document.readyState) {
//         case "loading":
//             // loadingFade();
//             break;
//         case "complete":
//             loadingFade();
//             break;
//         case "interactive":
//             break;
//     }
// }

// window.onload = function () {
//     alert("页面加载完成！");
// }

// function loadingFade() {
window.onload = function () {
    let max = 1;
    let loadingPage = document.getElementById('loading-page');
    let loadingContent = document.getElementById('loading');
    let time = setInterval(function () {
        if (max <= 0) {
            clearInterval(time);
            loadingPage.remove();
            loadingContent.remove();
        }
        max -= 2;
    }, 1000);
}

// 抄的 看不懂
// (function () {
//     var a_idx = 0;
// 	// 这是重载窗口点击事件
//     window.onclick = function (event) {
//         var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国",
//             "敬业", "诚信", "友善");

//         var heart = document.createElement("b"); //创建b元素
//         heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

//         document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
//         a_idx = (a_idx + 1) % a.length;
//         heart.style.cssText = "position: fixed; left: -100%;"; //给p元素设置样式

//         var f = 10, // 字体大小
//             x = event.clientX - f / 2, // 横坐标
//             y = event.clientY - f, // 纵坐标
//             c = "white", // 随机颜色
//             a = 1, // 透明度
//             s = 1.2; // 放大缩小

//         let timer = setInterval(function () { //添加定时器
//             if (a <= 0) {
//                 document.body.removeChild(heart);
//                 clearInterval(timer);
//             } else {
//                 heart.style.cssText = "font-size:10px;cursor: default;position: fixed;color:" +
//                     c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
//                     s + ");";

//                 y--;
//                 a -= 0.016;
//                 s += 0.002;
//             }
//         }, 15)
//     }
// }());


window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > screen.height * 0.75) {
        document.getElementById("go-to-top").style.display = "block";
    }
    else {
        document.getElementById("go-to-top").style.display = "none";
    }
}