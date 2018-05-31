(function(root) {
    var getData = root.getData;
    var data = root.data;
    var $recommend = $(".content .recommend");
    var $title = $recommend.find(".title-wrapper .title"),
        $green_line = $recommend.find(".title-wrapper .title .green-line"),
        $content = $recommend.find(".content-wrapper .content"),
        $content_img = $content.find("img"),
        $content_title = $content.find(".title"),
        $content_time = $content.find(".time"),
        $content_price_final_num = $content.find(".price .final-price .number"),
        $content_price_original =  $content.find(".price .original-price"),
        $content_price_original_text = $content.find(".price .original-price .text"),
        $tag = $content.find(".price .tag ul");
    
    console.log($content_img);

    var len = 8, taglen = 0;

    function init() {
        getData("../mock/caixihuan.json", rander);
        bind();
    }
    function bind() {
        $title.click(function () {
            var index = $(this).index();
            $green_line.removeClass("active");
            $green_line.eq(index).addClass("active");
            switch (index) {
                case 0:
                    getData("../mock/caixihuan.json", rander);
                    break;
                case 1:
                    getData("../mock/baomai.json", rander); 
                    break; 
                case 2:
                    getData("../mock/zuixin.json", rander);
                    break;
                case 3:
                    getData("../mock/jiangjia.json", rander);
                    break;
                case 4:
                    getData("../mock/zhunxin.json", rander);
                    break;
                case 5:
                    getData("../mock/lianshou.json", rander);
                    break;
                case 6:
                    getData("../mock/suv.json", rander); 
            } 
        })
    }
    function rander(data_get) {
        var taghtml;
        for (var i = 0; i < len; i++) {
            $content_img.eq(i).attr("src", data_get[i].pic)
            $content_title.eq(i).text(data_get[i].title);
            $content_time.eq(i).text(data_get[i].time + "年 | " + data_get[i].distance);
            $content_price_final_num.eq(i).text(data_get[i].final_price);
            if(data_get[i].original_price) {
                $content_price_original_text.eq(i).text(data_get[i].original_price + "万");
            }else {
                $content_price_original.eq(i).text("");
            }
            taglen = data_get[i].mark.length;
            taghtml = "";
            for(var j = 0; j < taglen; j++) {
                taghtml += "<li>" + data_get[i].mark[j] + "</li>";
            }
            $tag.html(taghtml);

        }
    }
    root.recommend = init;
}(window.homePage))