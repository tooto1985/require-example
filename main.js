require.config({
    paths: {
        "jquery": "http://code.jquery.com/jquery-1.11.1.min",
        "mCustomScrollbar": "http://www.caco.com.tw/Shop/CustomUc/C12Coconut201212/201506/js/jquery.mCustomScrollbar.min",
        "elevatezoom": "http://www.elevateweb.co.uk/wp-content/themes/radial/jquery.elevatezoom.min"
    },
    shim: {
        "mCustomScrollbar": ["jquery"],
        "elevatezoom": ["jquery"]
    }
});
require(["jquery", "mCustomScrollbar", "elevatezoom"], function() {
    var jsfile = location.pathname.split(".")[0] + ".js";
    if (/^file\:\/\/\//i.test(location.href)) {
        var scripttag = document.createElement("script");
        scripttag.setAttribute("src", jsfile);
        document.getElementsByTagName("head")[0].appendChild(scripttag);
    } else {
        $.getScript(jsfile);
    }
});