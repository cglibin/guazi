(function(root) {
    function init(url, successfn) {
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                successfn(data);
            },
            error: function () {
                console.log(url);
                console.log("get data error");
            }
        })
    }
    root.getData = init;
}(window.homePage || (window.homePage = {})))