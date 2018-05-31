(function(root) {
    var getData = root.getData;
    var data = root.data;
    var $header = $("header");
    var $number = $header.find(".filter-info .info-right .number")
    function init (url) {
        getData(url, rander);
    }
    function rander (data_get) {
        data.number = data_get;
        $number.text(data_get[0].number);
    }
    root.getnum = init;
    // init();
}(window.homePage))
 