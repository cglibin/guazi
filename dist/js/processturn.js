(function(root) {
    var getData = root.getData;
    var data = root.data;
    var $content = $(".content"),
        $imgWrapper = $content.find(".img-wrapper"),
        $title_item = $content.find(".process-wrapper .title>span"),
        $introduce = $content.find(".process-wrapper .introduce"),
        $introduce_item = $introduce.find("div"),
        $step = $content.find(".process-wrapper .step"),
        $step_item = $step.find(".item"),
        $step_item_active = $step_item.find(".active"),
        $step_item_default = $step_item.find(".default");
        $buy = $step.find(".buy"),
        $sell = $step.find(".sell");
    var $img;
    var len, timer;
    var index = 0, preIndex = 0;
    
    function init (url) {
        getData(url,getPic); //获取轮播图图片 渲染
    }

    function getPic (data_get) {
        data.processturn = data_get;
        rander(data_get);
    }
    function rander (data) {
        len = data.length;
        for(var i = 0; i < len; i++) {
            $imgWrapper.append("<img/>");
            $imgWrapper.find("img").eq(i).attr("src",data[i]).css({"opacity":"0"});
        }
        
        $img = $imgWrapper.find("img");
        $img.eq(0).css({"opacity":"1"});
        $step.find(".buy-order-icon").css("display","none");
        $step.find(".active-buy-order-icon").css("display","inline-block");
        $step.find(".sell-info-icon").css("display","none");
        $step.find(".active-sell-info-icon").css("display","inline-block");
        bind();
        // timer = setInterval(turn,3000);
    
    }
    function bind () {
        $title_item.click(function () {
            $introduce_item.removeClass("active");
            $step_item.removeClass("active").css("display","none"); 
            $step_item_default.css("display","inline-block");
            $step_item_active.css("display","none");
            $introduce_item.removeClass("active");
            if($(this).index()) {
                $title_item.eq(0).find("span").css("display","none");
                $(this).find("span").css("display","inline-block");
                $sell.css("display","inline-block");
                $step.find(".sell").eq(0).addClass("active");
                $step.find(".sell-info-icon").css("display","none");
                $step.find(".active-sell-info-icon").css("display","inline-block");
                preIndex = index;
                index = 4;
                change("right", preIndex, index);
            }else {
                $title_item.eq(1).find("span").css("display","none");
                $(this).find("span").css("display","inline-block");
                $buy.css("display","inline-block");
                $step.find(".buy").eq(0).addClass("active");
                $step.find(".buy-order-icon").css("display","none");
                $step.find(".active-buy-order-icon").css("display","inline-block");
                preIndex = index; 
                index = 0;
                change("right", preIndex, index);
            }
        }) 
        $step_item.click(function () {
            $step_item.removeClass("active");
            $(this).addClass("active");
            $introduce_item.removeClass("active");
            $step_item_default.css("display","inline-block");
            $step_item_active.css("display","none");
            console.log($step_item_active);
            preIndex = index;
            
            
            switch (index = $(this).index()) {
                case 0:
                    index = 0; 
                    $step.find(".buy-order-icon").css("display","none");
                    $step.find(".active-buy-order-icon").css("display","inline-block");
                    break;
                case 3:
                    index = 1;
                    $step.find(".buy-see-icon").css("display","none");
                    $step.find(".active-buy-see-icon").css("display","inline-block");
                    break;
                case 6:
                    index = 2;
                    $step.find(".buy-contract-icon").css("display","none");
                    $step.find(".active-buy-contract-icon").css("display","inline-block");
                    break;
                case 9:
                    index = 3;
                    $step.find(".buy-deal-icon").css("display","none");
                    $step.find(".active-buy-deal-icon").css("display","inline-block"); 
                    break;
                case 1:
                    index = 4;
                    $step.find(".sell-info-icon").css("display","none");
                    $step.find(".active-sell-info-icon").css("display","inline-block");
                    break;
                case 4:
                    index = 5;
                    $step.find(".sell-see-icon").css("display","none");
                    $step.find(".active-sell-see-icon").css("display","inline-block"); 
                    break;
                case 7:
                    index = 6;
                    $step.find(".sell-service-icon").css("display","none");
                    $step.find(".active-sell-service-icon").css("display","inline-block");
                    break;
                case 10:
                    index = 7;
                    $step.find(".sell-deal-icon").css("display","none");
                    $step.find(".active-sell-deal-icon").css("display","inline-block");       
                }
            if(index < preIndex) {
                change("left", preIndex, index);
            }else {
                change("right", preIndex, index);
            }

        })
        
    }
    // function turn () {
    //     flag = 0;
    //     change();
    // }
    function change (direction, preindex, index) {
        if(direction === "right") {
            $img.eq(preindex).animate({"left":"-500px","opacity":"0.2"},500,function () {
                $img.eq(preindex).css({"opacity":"0","left":"0px"});
            });
            $img.eq(index).animate({"opacity":"1"},400);
        }else {
            $img.eq(preindex).animate({"left":"300px","opacity":"0.2"},500,function () {
                $img.eq(preindex).css({"opacity":"0","left":"0px"});
            });
            $img.eq(index).animate({"opacity":"1"},400);
        }
        $introduce_item.eq(index).addClass("active");
    }
        
    
    // function changeIndex () {
    //     switch (flag) {
    //         case 0:
    //             if(index === len-1) {
    //                 index = 0;
    //             }else {
    //                 index++;
    //             }
    //             break;
    //         case 1:
    //             if (index === 0) {
    //                 index = len - 1;
    //             }else {
    //                 index--;
    //             }
    //             break;
    //         case 2:
    //             index = tempIndex;
    //     }
    // }
    // function changeColor () {
    //     if (data.turn[index].isDeepColor) {
    //         // $nav.addClass("active-color");
    //         $nav.css("color","white");
    //         $nav.find(".tele").css("color","white");
    //     }else {
    //         // $nav.removeClass("active-color");
    //         $nav.css("color","black");
    //         $nav.find(".tele").css("color","green");
    //     }
    // }
    root.processturn = init;
}(window.homePage))