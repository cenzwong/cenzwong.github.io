<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<p id="demo">hello</p>

<script>
var getURL_raw = window.location.search.slice(1,window.location.search.length-1);
var getURL_Split_Ary = getURL_raw.split("&");

var i = 0;
var getURL_Split_Ary_Splite = {};
for(i in getURL_Split_Ary){
  document.write(getURL_Split_Ary[i]+"<br>");
  var nameTemp = getURL_Split_Ary[i].split("=")[0];
  getURL_Split_Ary_Splite[nameTemp] = getURL_Split_Ary[i].split("=")[1];
}
document.write(getURL_Split_Ary_Splite["Employee"]+"<br>");
document.write(getURL_Split_Ary_Splite["Home"]+"<br>");
document.write(getURL_Split_Ary_Splite["Email"]+"<br>");
document.write(getURL_Split_Ary_Splite["Phone"]+"<br>");

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

//document.getElementById("demo").innerHTML = getURL_Split_Ary_Splite;
</script>

</body>
</html>