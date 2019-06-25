//<span class="w3-tag w3-teal w3-round">Current</span>
displayScoreLang({
        "spoken":[
            ["Cantonese","100"],
            ["Mandarian","90"],
            ["English","85"]
        ],
        "computer":[
            ["C/C++/ Embedded","90"],
            ["Matlab / Octave","76"],
            ["Python","60"]            
        ]
    }
)

function displayScoreLang(scoreLangJson) {
    var i = 0;
    var len = scoreLangJson.length;
    for(i in scoreLangJson.spoken){
        document.write("<p>"+scoreLangJson.spoken[i][0]+"</p>");
        document.write("<div class=\"w3-light-grey w3-round-xlarge\">");
        document.write("<div class=\"w3-round-xlarge w3-teal\" style=\"height:"
                        +Math.pow(scoreLangJson.spoken[i][1]/100,4)*30
                        +"px;width:"
                        +scoreLangJson.spoken[i][1]
                        +"%\"></div>");
        document.write("</div>");
    }
    document.write("<hr>");

    for(i in scoreLangJson.computer){
        document.write("<p>"+scoreLangJson.computer[i][0]+"</p>");
        document.write("<div class=\"w3-light-grey w3-round-xlarge\">");
        document.write("<div class=\"w3-round-xlarge w3-teal\" style=\"height:"
                        +Math.pow(scoreLangJson.computer[i][1]/100,4)*30
                        +"px;width:"
                        +scoreLangJson.computer[i][1]
                        +"%\"></div>");
        document.write("</div>");
    }
}

