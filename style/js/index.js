/**
 * Created by L on 2018/1/12.
 */

/********************
 * 取窗口滚动条高度
 ******************/
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

/********************
 * 取窗口可视范围的高度
 *******************/
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}
/********************
 * 取窗口可视范围的宽度
 *******************/
function getClientWidth() {
    var clientWidth = 0;
    if (document.body.clientWidth && document.documentElement.clientWidth) {
        clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
    }
    else {
        clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
    }
    return clientWidth;
}

/********************
 * 取文档内容实际高度
 *******************/
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
/********************
 * 取文档内容实际宽度
 *******************/
function getScrollWidth() {
    return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
}


/*
* 让a标签 with= height  每一秒执行一次
* */

//窗口大小改变时，执行：
$(window).resize(function(){
    var myPicHeight = $(".myPic").width();
    $(".myPic").height(myPicHeight);

    var heightA = $(".Services-a").width();
    $(".Services-a").height(heightA);
});

$(function () {
//    alert("ok");
    $("#login_close").on('click', function () {
        $("#login_warning").addClass('sr-only');
    });

    /*登录判断*/
    $("#login").on('click', function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if(username == ""){
            alert("请输入账号");
            return;
        }else if (password == ""){
            alert("请输入密码");
            return;
        }
        if (username == password) {
            alert("登录成功");
        } else {
            $("#login_warning").removeClass('sr-only');
        }
    });

    /*点击 a 链接*/
    $(".Jump").on('click', function () {
        alert("该链接无效");
    });


    var myPicHeight = $(".myPic").width();
    $(".myPic").height(myPicHeight);

    var heightA = $(".Services-a").width();
    $(".Services-a").height(heightA);
   /* $(".Services-a").css({
        lineHeight: heightA + "px"
    });*/

    $("#myService").find('div').each(function () {
        $(this).find('a:first').on('mouseover', function () {
            $(this).children().slideDown();
            $(this).animate({lineHeight: $(".Services-a").width() / 3.5 + "px"}, 500);
            return false;
        }).on('mouseout', function () {
            $(this).children().slideUp();
            $(this).animate({lineHeight: 0 + "px"}, 500);
            return false;
        });
    });


    /**
     *导航栏 */
    $("#Navigation li").click(function (e) {
        var targetE = e.target;
        var id = $(targetE).data("to");
        $('html,body').animate({
            scrollTop: $('#' + id).offset().top
        }, 500);
        return false;
    });
    /*
     * 返回顶部*/
    $(".FromTop").click(function () {
        $('html,body').animate({scrollTop: 0}, 500);
        return false;
    });


    $("#mode").on("click", function () {
        $("#mode-div").slideToggle();
    });

    /*滚动监听*/
    $('body').scrollspy(
        { target: '#navbar-example' }
    );

    /*图库分页点击事件*/
    var childNum = document.getElementById('picClick').children.length;
//    alert(childNum);
    $("#picClick").find('li').each(function (index){
        if(index != 0 && index != childNum-1){
            $(this).on('click', function () {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });
        }
    });
});
