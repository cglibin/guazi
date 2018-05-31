(function(root) {
    var getData = root.getData;
    root.data = {};
    var data = root.data;
    var $header = $("header"), $imgWrapper = $header.find(".img-wrapper"), $nav = $header.find("nav");
    var $img, $ul, $li;
    var len;
    var index = 0, tempIndex = 0;
    
    function init (url) {
        baseHandle();
        getData(url,getPic); //获取轮播图图片 渲染
    }
    function baseHandle () {
        $header.find(".blank .turn .turn-left").mouseover(function () {
            $header.find(".blank .turn .turn-left").css("background-position","61px -45px")
            $header.find(".blank .turn .turn-left").mouseout(function () {
                $header.find(".blank .turn .turn-left").css("background-position","61px 16px");
            })
        })
        $header.find(".blank .turn .turn-right").mouseover(function () {
            $header.find(".blank .turn .turn-right").css("background-position","61px -141px")
            $header.find(".blank .turn .turn-right").mouseout(function () {
                $header.find(".blank .turn .turn-right").css("background-position","61px -89px");
            })
        })
        

    }

    function getPic (data_get) {
        data.headerturn = data_get;
        rander(data_get);
    }
    function rander (data) {
        len = data.length;

        $header.find(".blank .dot").html("<ul></ul>");
        $ul = $header.find(".blank .dot ul");

        for(var i = 0; i < len; i++) {
            $imgWrapper.append("<img/>");
            $imgWrapper.find("img").eq(i).attr("src",data[i].url).css({"display":"none","opacity":"0.3"});
            $ul.append(" <li></li> ");
        }

        $img = $imgWrapper.find("img");
        $li = $ul.find("li");
        $header.find(".blank .dot ul li:first").addClass("active");
        $img.eq(0).css({"display":"inline-block","opacity":"1"});
        bind();
        timer = setInterval(turn,3000);
    }
    function bind () {
        $header.find(".blank .turn .turn-left").click(function () {
            clearInterval(timer);
            flag = 1;
            change();
            timer = setInterval(turn,3000);
        })
        $header.find(".blank .turn .turn-right").click(function () {
            clearInterval(timer);
            flag = 0;
            change();
            timer = setInterval(turn,3000);
        })
        $li.on("mouseover", function () {
            $(this).addClass("active");
           
        })
        $li.on("mouseout", function () {
            if($(this).index() !== index) {
                $(this).removeClass("active");
            }
        })
        $li.on("click", function () {
            clearInterval(timer);
            flag = 2;
            tempIndex = $(this).index();
            change();
            timer = setInterval(turn,3000);
        })
    }
    function turn () {
        flag = 0;
        change();
    }
    function change () {
        $img.eq(index).animate({opacity: "0.3"}, 300, function() {
            $img.eq(index).css("display", "none");
            $li.eq(index).removeClass("active");
            changeIndex();
            $li.eq(index).addClass("active");
            $img.eq(index).css("display", "inline-block");
            $img.eq(index).animate({"opacity": "1"},700);
            changeColor();
        });
        
        
    }
    function changeIndex () {
        switch (flag) {
            case 0:
                if(index === len-1) {
                    index = 0;
                }else {
                    index++;
                }
                break;
            case 1:
                if (index === 0) {
                    index = len - 1;
                }else {
                    index--;
                }
                break;
            case 2:
                index = tempIndex;
        }
    }
    function changeColor () {
        if (data.headerturn[index].isDeepColor) {
            $nav.css("color","white");
            $nav.find(".tele").css("color","white");
        }else {
            $nav.css("color","black");
            $nav.find(".tele").css("color","green");
        }
    }
    root.headerturn = init;
}(window.homePage))