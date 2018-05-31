(function(root) {

    function init (dom, str, _dom) {
        bind(dom, str, _dom);
    }
    function bind (dom, str, _dom) {
        dom.focus(function () {
            console.log(dom.val())
            if (_dom) {
                console.log(_dom);
                _dom.css("display", "inline-block");
            }
            if(dom.val() === str) {
                dom.val("");
                dom.css("color","black");
            }
            
        })
        dom.blur(function () {
            console.log(dom.val());
            if (_dom) {
                _dom.css("display", "none");
            }
            if(dom.val() === "") {
                dom.val(str);
                dom.css("color","rgb(172, 172, 172)");
            }else {
               dom.css("color","black");
            }
        })
        
    }
    root.input = init;
    // init();
}(window.homePage))
 