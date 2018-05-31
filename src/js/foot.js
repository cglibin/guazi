(function(root) {
    var $footer = $("footer"),
        $icon = $footer.find(".hot .hot-item i"),
        $ul = $footer.find(".hot .hot-item ul");
    var flag = [0,0,0,0,0,0];
    var index;
    function init() {
        bind();
    }
    function bind() {
        var len = $ul.length;
        for(let i = 0; i < len; i++) {
            $icon.eq(i).click(function () {
                if(!flag[i]) {
                    flag[i] = 1;
                    $(this).removeClass("default-icon").addClass("active-icon");
                    $ul.eq(i).addClass("active"); 
                }else {
                    flag[i] = 0;
                    $(this).removeClass("active-icon").addClass("default-icon");
                    $ul.eq(i).removeClass("active");
                }
            })
        }
    }
    root.footer = init;
}(window.homePage))