(function(root) {
    var $sidebar = $(".sidebar"),
        $item = $sidebar.find(".tool-wrapper .tool-item"),
        $hover_content = $item.find(".hover-content"),
        $up = $sidebar.find(".tool-wrapper .up");
    var len = $item.length;

    function init() {
        bind();
    }
    function bind () {
        for(let i = 0; i < len; i++) {
            $item.eq(i).mouseover(function () {
                $hover_content.eq(i).css("display","inline-block");
                
            })
            $item.eq(i).mouseout(function () {
                $hover_content.eq(i).css("display","none");
            }) 
        }
        $(document).scroll(function () {
            if($(document).scrollTop()) {
                $up.css("display", "inline-block");
            }else {
                $up.css("display", "none");
            }
        })
        $up.click(function () {
            $(document).scrollTop(0);
            $up.css("display", "none");

        })
    }
    root.sidebar = init;
}(window.homePage || (window.homePage = {})))