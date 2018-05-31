var root = window.homePage;
var headerturn = root.headerturn,
    input = root.input,
    getnum = root.getnum,
    processturn = root.processturn,
    recommend = root.recommend,
    footer = root.footer,
    sidebar = root.sidebar;

var $header = $("header");
var $search = $header.find(".filter-info .info-left input");
var $inputTele = $header.find(".filter-info .info-right input");
var $recommend = $header.find(".filter-info .info-left .recommend");

headerturn("../mock/headerturn.json");
input($search, "搜索你想要的车", $recommend);
input($inputTele, "请输入您的手机号");
getnum("../mock/number.json");
processturn("../mock/processturn.json");
recommend();
footer();
sidebar();