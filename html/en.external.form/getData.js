/**
 * This function will read the Url parameter and turn into Json
 */

function URL2JSON(){
    var getURL_raw = window.location.search.slice(1,window.location.search.length);
    //document.write(getURL_Split_Ary[i]+"<br>");
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
    return getURL_Split_Ary_Splite;
}

var urlJSON = URL2JSON();
// //get the whole URL down
// var getURL_raw = window.location.search.slice(1,window.location.search.length-1);

// //replace "+" to " "   TODO: I don't know how to keep replace all the things.....
// var getURL_raw = getURL_raw.replace("+"," ");
// var getURL_raw = getURL_raw.replace("+"," ");
// var getURL_raw = getURL_raw.replace("+"," ");
// var getURL_raw = getURL_raw.replace("+"," ");

// //decode URI
// var getURL_raw = decodeURIComponent(getURL_raw);

// var getURL_Split_Ary = getURL_raw.split("&");

// var i = 0;
// var getURL_Split_Ary_Splite = {};
// for(i in getURL_Split_Ary){
//   //document.write(getURL_Split_Ary[i]+"<br>");
//   var nameTemp = getURL_Split_Ary[i].split("=")[0];
//   getURL_Split_Ary_Splite[nameTemp] = getURL_Split_Ary[i].split("=")[1];
// }


//-->
infoJson = 
    [
        {
            "icon":"fa-briefcase",
            "word":urlJSON['Employee']
        },
        {
            "icon":"fa-home",
            "word":urlJSON['Home']
        },
        {
            "icon":"fa-envelope",
            "word":"<a href=\"mailto:"+urlJSON['Email']+"\">"+urlJSON['Email']+"</a>"
        },
        {
            "icon":"fa-phone",
            "word":urlJSON['Phone']
        }
    ]
;

//--> Skill

//--> Language
var scoreLangJson =  {
    "spoken":[
        ["Cantonese",urlJSON['Cantonese']],
        ["Mandarian",urlJSON['Putonhua']],
        ["English",urlJSON['English']]
    ],
    "computer":[
        ["C/C++/ Embedded","90"],
        ["Matlab / Octave","76"],
        ["Python","60"]            
    ]
};