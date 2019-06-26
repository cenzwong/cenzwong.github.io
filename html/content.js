var version = "en";
//var version = "zh";

var eduExJson = 
[{
    "en":{
            "Name":"The Hong Kong Polytechnic University",
            "Link":"http://www.eie.polyu.edu.hk/",
            "Date":"Sep 2015 - 2020 <span class=\"w3-tag w3-teal w3-round\">planned</span>",
            "Description":"Bachelor Degree"
        },
    "zh":{
            "Name":"香港理工大學",
            "Link":"http://www.eie.polyu.edu.hk/",
            "Date":"Sep 2015 - 2020 <span class=\"w3-tag w3-teal w3-round\">planned</span>",
            "Description":"Bachelor Degree"
        }
},
{
    "en":{
        "Name":"ELCHK Yuen Long Lutheran Secondary School",
        "Link":"http://www.yll.edu.hk/",
        "Date":"3 Jun 2019 - 11 Jul 2019",
        "Description":"<p>Secondary School</p>\
                        <p>Subject taken: Physics, Chemistry, Biology, MATHEMATICS Extended Part Module 2 (Algebra and Calculus)</p>\
                        "
        },
    "zh":{
                "Name":"基督教香港信義會元朗信義中學",
                "Link":"http://www.yll.edu.hk/",
                "Date":"3 Jun 2019 - 11 Jul 2019",
                "Description":"<p>Secondary School</p>\
                        <p>Subject taken: Physics, Chemistry, Biology, MATHEMATICS Extended Part Module 2 (Algebra and Calculus)</p>\
                        "
        }
}];

var scoreLangJson =  {
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
};

var workExJson = 
    [
        {
            "en":{
                "Pos_Com":"Summer Intern / Wuxi Murata Electronics Co., Ltd.",
                "Link":"https://www.murata.com/",
                "Date":"20 Jul 2019 - 30 Aug 2019",
                "Outcome":[
                    "You can add as many as you like",
                    "2st sentences",
                    "3st sentences",
                    "4st sentences"
                ]
            },
            "zh":{
                "Pos_Com":"暑期實習 / 日本村田電子有限公司(無錫)",
                "Link":"https://www.murata.com/",
                "Date":"20 Jul 2019 - 30 Aug 2019",
                "Outcome":[
                    "You can add as many as you like",
                    "2st sentences",
                    "3st sentences",
                    "4st sentences"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Summer Intern (Embedded Middleware Team) / Shenzhen Skyworth-RGB Electronic Co Ltd",
                "Link":"http://investor.skyworth.com/en/index.php",
                "Date":"3 Jun 2019 - 11 Jul 2019",
                "Outcome":[
                    "."
                ]
            },
            "zh":{
                "Pos_Com":"暑期實習 (Embedded Middleware Team) / 深圳創維-RGB電子有限公司",
                "Link":"http://investor.skyworth.com/en/index.php",
                "Date":"3 Jun 2019 - 11 Jul 2019",
                "Outcome":[
                    "."
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Electronic Engineer Trainee / RF Tech Ltd. - ITE Smartcard Solutions Limited",
                "Link": "http://www.hkite.com/",
                "Date": "Aug 2018 - May 2019",
                "Outcome":[
                    "Research and product development of LoRa, NB-IoT;",
                    "PCB manufacture including Schematics, Layout and Soldering;",
                    "Machine assembly and Coordination;"
                ]
            },
            "zh":{
                "Pos_Com":"實習電子工程師" / "RF Tech Ltd. - 智控系統有限公司",
                "Link": "http://www.hkrft.com/",
                "Date": "Aug 2018 - May 2019",
                "Outcome":[
                    "Research and product development of LoRa, NB-IoT;",
                    "PCB manufacture including Schematics, Layout and Soldering;",
                    "Machine assembly and Coordination;"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Summer Intern (Millimeter Wave Product Team)/ Nuctech Company Limited",
                "Link":"http://www.nuctech.com/",
                "Date":"Jul 2018 - Aug 2018",
                "Outcome":[
                    "Preparation work of Machine Learning;",
                    "Data collation and Analysis;",
                    "Tools building for desktop automation;"
                ]
            },
            "zh":{
                "Pos_Com":"暑期實習 (電磁感知事業部 毫米波產品部) / 同方威視技術股份有限公司",
                "Link":"http://www.nuctech.com/",
                "Date":"Jul 2018 - Aug 2018",
                "Outcome":[
                    "Preparation work of Machine Learning;",
                    "Data collation and Analysis;",
                    "Tools building for desktop automation;"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Part-time tutor / Robot Insitute of Hong Kong",
                "Link":"https://www.rihk.com/",
                "Date":"2017 - 2018",
                "Outcome":[
                    "Teaching Kids with LEGO Mindstorms with NXT, EV3;",
                    "Teaching Arduino and Basic Electronics for Mini-Robocon 2018;",
                    "Project Implementer;"
                ]
            },
            "zh":{
                "Pos_Com":"兼職導師 / 香港機械人學院",
                "Link":"https://www.rihk.com/",
                "Date":"2017 - 2018",
                "Outcome":[
                    " LEGO Mindstorms with NXT, EV3;",
                    "Teaching Arduino and Basic Electronics for Mini-Robocon 2018;",
                    "Project Implementer;"
                ]
            }
        }
        
    ]
;

var scoreSkillJson = [
    ["STM32/Atmel/Arduino","80"],
    ["PCB Schematic/Layout","70"],
    ["Illustrator","75"],
    ["Media","50"] 
]
;

var infoJson = 
    [
        {
            "icon":"fa-briefcase",
            "word":"Electronic and Information Engineering Student"
        },
        {
            "icon":"fa-home",
            "word":"Hong Kong, China"
        },
        {
            "icon":"fa-envelope",
            "word":"<a href=\"mailto:webmaster@example.com\">cenz@engineer.com</a>"
        },
        {
            "icon":"fa-phone",
            "word":"+852 6158 5094, (+86 150 0204 3095)"
        }
    ]
;

function displayPersonalInfo(){
    var i = 0;
    var len = infoJson.length;
    for(i in infoJson){
        document.write("<p><i class=\"fa "+ infoJson[i].icon +" fa-fw w3-margin-right w3-large w3-text-teal\"></i>");
        document.write(infoJson[i].word+"</p>");
    }
    
}



// code

function displayEduEx() {
    var i = 0;
    var len = eduExJson.length;
    for(i in eduExJson){
        document.write("<div class=\"w3-container\">");
        document.write("<h5 class=\"w3-opacity\"><b>"+eduExJson[i][version].Name+"</b>");
        document.write("<a href=\""+eduExJson[i][version].Link+"\" target=\"_blank\">");
        document.write("<i class=\"fa fa-info-circle fa-fw w3-margin-right\"></i>");
        document.write("</a>");
        document.write("</h5>");
        document.write("<h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>");
        document.write(eduExJson[i][version].Date);
        document.write("</h6>");
        document.write("<p>"+eduExJson[i][version].Description+"</p>");
        if(i == len-1){
            document.write("<br />");
        }else{
            document.write("<hr />");
        }
        document.write("</div>");
    }
}

function displayScoreSkill(){
    var i = 0;
    for(i in scoreSkillJson){
        document.write("<p>"+scoreSkillJson[i][0]+"</p>");
        document.write("<div class=\"w3-light-grey w3-round-xlarge w3-small\">");
        document.write("<div class=\"w3-container w3-center w3-round-xlarge w3-teal\" style=\"width:"+scoreSkillJson[i][1]+"%\">"+scoreSkillJson[i][1]+"%</div>");
        document.write("</div>");
    }
}

function displayScoreLang() {
    var i = 0;
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

function displayWorkEx() {
    for(let i in workExJson){
        document.write("<div class=\"w3-container\">");
        document.write("<h5 class=\"w3-opacity\"><b>"+workExJson[i][version].Pos_Com+"</b>");
        document.write("<a href=\""+workExJson[i][version].Link+"\" target=\"_blank\">");
        document.write("<i class=\"fa fa-info-circle fa-fw w3-margin-right\"></i>");
        document.write("</a>");
        document.write("</h5>");
        document.write("<h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>");
        document.write(workExJson[i][version].Date);
        document.write("</h6>");
        document.write("<ul style=\"list-style-type:circle; padding: 0px;margin: 15px;\">");
        for(let j in workExJson[i][version].Outcome){
            document.write("<li>");
            document.write(workExJson[i][version].Outcome[j]);
            document.write("</li>");
        }
        document.write("</ul>");
        if(i == workExJson.length-1){
            document.write("<br>");
        }else{
            document.write("<hr>");
        }
        document.write("</div>");
    }
}
