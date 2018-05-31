(function(root) {
    var $header = $("header");
    var $input = $header.find(".filter-info .info-left input");
    function init () {
        bind();
    }
    function bind () {
        $input.focus(function () {
            if($input.attr("value") === "搜索你想要的车") {
                $input.attr("value", "");
                $input.css("color","black");
            }
            $input.blur(function () {
                if($input.attr("value") === "") {
                    $input.attr("value", "搜索你想要的车");
                    $input.css("color","rgb(172, 172, 172)");
                }else {
                    $input.css("color","black");
                }
            }) 
            
        })
        
    }
    root.search = init;
    // init();
}(window.homePage)) 