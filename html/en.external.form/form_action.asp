<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<p id="demo">hello</p>

<script>
//get the whole URL down
var getURL_raw = window.location.search.slice(1,window.location.search.length-1);

//replace "+" to " "   TODO: I don't know how to keep replace all the things.....
var getURL_raw = getURL_raw.replace("+"," ");
var getURL_raw = getURL_raw.replace("+"," ");
var getURL_raw = getURL_raw.replace("+"," ");
var getURL_raw = getURL_raw.replace("+"," ");

//decode URI
var getURL_raw = decodeURIComponent(getURL_raw);

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


//document.getElementById("demo").innerHTML = getURL_Split_Ary_Splite;
</script>

</body>
</html>