/*window.alert(document.URL);*/

String.prototype.startsWith = function(str)
{return (this.match("^"+str)==str)}

if((location.protocol + '//' + location.host + location.pathname) === "http://coderwall.com/p/new") {
    
    var parts = window.location.search.substr(1).split("&");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    
    //alert($_GET['foo']); // 1
    //alert($_GET.bar);    // 2
    
    var title = document.getElementById("protip_title");
    var body = document.getElementById("protip_body");
    title.value = $_GET['hacktitle'];
    body.value = $_GET['hackurl'];
//    document.getElementById("protip_title").value($_GET['hacktitle']);
//    document.getElementById("protip_body").value($_GET['hackurl']);
}