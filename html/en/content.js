var eduExJson =  
    [
        {
            "Name":"The Hong Kong Polytechnic University",
            "Link":"http://www.eie.polyu.edu.hk/",
            "Date":"Sep 2015 - 2020 <span class=\"w3-tag w3-teal w3-round\">planned</span>",
            "Description":"Bachelor Degree"
        },
        {
            "Name":"Yuen Long Lutheran Secondary School",
            "Link":"http://www.yll.edu.hk/",
            "Date":"3 Jun 2019 - 11 Jul 2019",
            "Description":"<p>Secondary School</p>\
                        <p>Subject taken: Physics, Chemistry, Biology, MATHEMATICS Extended Part Module 2 (ALgebra and Calculus)</p>\
                        "
        }
    ]
;

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
            "Pos_Com":"Summer Intern / Wuxi Murata Electronics Co., Ltd. 日本村田電子有限公司(無錫)",
            "Link":"https://www.murata.com/",
            "Date":"20 Jul 2019 - 30 Aug 2019",
            "Outcome":[
                ".",
                ".",
                "."
            ]
        },
        {
            "Pos_Com":"Summer Intern (Embedded Middleware Team) / Shenzhen Skyworth-RGB Electronic Co Ltd",
            "Link":"http://investor.skyworth.com/en/index.php",
            "Date":"3 Jun 2019 - 11 Jul 2019",
            "Outcome":[
                ".",
                ".",
                "."
            ]
        },
        {
            "Pos_Com":"Electronic Engineer Trainee / RF Tech Ltd. - ITE (Holdings) Limited",
            "Link": "http://www.hkite.com/",
            "Date": "Aug 2018 - May 2019",
            "Outcome":[
                "Research and product development of LoRa, NB-IoT;",
                "PCB manufacture including Schematics, Layout and Soldering;",
                "Machine assembly and Coordination;"
            ]
        },
        {
            "Pos_Com":"Summer Intern (Millimeter wave product team電磁感知事業部 毫米波產品部)/ Nuctech Company Limited",
            "Link":"http://www.nuctech.com/",
            "Date":"Jul 2018 - Aug 2018",
            "Outcome":[
                "Preparation work of Machine Learning;",
                "Data collation and Analysis;",
                "Tools building for desktop automation;"
            ]
        },
        {
            "Pos_Com":"Part-time tutor / 香港機械人學院 Robot Insitute of Hong Kong",
            "Link":"https://www.rihk.com/",
            "Date":"2017 - 2018",
            "Outcome":[
                "Teaching LEGO Mindstorms with NXT, EV3;",
                "Teaching Arduino and Basic Electronics for Mini-Robocon 2018;",
                "Project Implementer;"
            ]
        }
    ]
;

var scoreSkillJson = [
    ["Adobe Photoshop","90"],
    ["Photography","80"],
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
        document.write("<h5 class=\"w3-opacity\"><b>"+eduExJson[i].Name+"</b>");
        document.write("<a href=\""+eduExJson[i].Link+"\" target=\"_blank\">");
        document.write("<i class=\"fa fa-info-circle fa-fw w3-margin-right\"></i>");
        document.write("</a>");
        document.write("</h5>");
        document.write("<h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>");
        document.write(eduExJson[i].Date);
        document.write("</h6>");
        document.write("<p>"+eduExJson[i].Description+"</p>");
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
    var i = 0;
    var len = workExJson.length;
    for(i in workExJson){
        document.write("<div class=\"w3-container\">");
        document.write("<h5 class=\"w3-opacity\"><b>"+workExJson[i].Pos_Com+"</b>");
        document.write("<a href=\""+workExJson[i].Link+"\" target=\"_blank\">");
        document.write("<i class=\"fa fa-info-circle fa-fw w3-margin-right\"></i>");
        document.write("</a>");
        document.write("</h5>");
        document.write("<h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>");
        document.write(workExJson[i].Date);
        document.write("</h6>");
        document.write("<ul style=\"list-style-type:circle; padding: 0px;margin: 15px;\">");
        document.write("<li>");
        document.write(workExJson[i].Outcome[0]);
        document.write("</li>");
        document.write("<li>");
        document.write(workExJson[i].Outcome[1]);
        document.write("</li>");
        document.write("<li>");
        document.write(workExJson[i].Outcome[2]);
        document.write("</li>");
        document.write("</ul>");
        if(i == len-1){
            document.write("<br>");
        }else{
            document.write("<hr>");
        }
        document.write("</div>");
    }
}
