var version;
if(urlJSON['version']==null){
    version = "en";
}else{
    version = urlJSON['version'];
}


var eduExJson = [{
    "en":{
            "Name":"The Hong Kong Polytechnic University",
            "Link":"http://www.eie.polyu.edu.hk/",
            "Date":"2015 - 2020 <span class=\"w3-tag w3-teal w3-round\">planned</span>",
            "Description":"Bachelor Degree - Studying Electronics, Circuit, Communication, Embedded Controller, PCB design, Machine Learning etc"
        },
    "zh":{
            "Name":"香港理工大學",
            "Link":"http://www.eie.polyu.edu.hk/",
            "Date":"2015 - 2020 <span class=\"w3-tag w3-teal w3-round\">預計</span>",
            "Description":"本科 - 學習電子，電路，通信，嵌入式控制器，PCB設計，機器學習等"
        }
},{
    "en":{
            "Name":"ELCHK Yuen Long Lutheran Secondary School",
            "Link":"http://www.yll.edu.hk/",
            "Date":"2009 - 2015",
            "Description":"<p>Secondary School</p>\
                            <p>Subject taken: Physics, Chemistry, Biology, MATHEMATICS Extended Part Module 2 (Algebra and Calculus)</p>\
                            "
        },
    "zh":{
            "Name":"基督教香港信義會元朗信義中學",
            "Link":"http://www.yll.edu.hk/",
            "Date":"2009 - 2015",
            "Description":"<p>中學</p>\
                    <p>就讀科目: 物理、化學、生物學、數學延伸部分單元二（代數與微積分）</p>\
                    "
        }
}];

var workExJson = 
    [
        {
            "en":{
                "Pos_Com":"Summer Intern / Wuxi Murata Electronics Co., Ltd.",
                "info":[{
                    "icon":"fa-globe",
                    "Link":"https://www.murata.com/"
                }],
                "Date":"20 Jul 2019 - 30 Aug 2019",
                "Outcome":[
                    "Develop RPA (Robot Process Automation) program;",
                    "Understand the industrial process of manufacturing;",
                    "Learn about the management culture of the company;"
                ]
            },
            "zh":{
                "Pos_Com":"暑期實習 / 日本村田電子有限公司(無錫)",
                "info":[{
                    "icon":"fa-globe",
                    "Link":"https://www.murata.com/"
                }],
                "Date":"20 Jul 2019 - 30 Aug 2019",
                "Outcome":[
                    "開發RPA（機器人過程自動化）程序;",
                    "了解製造業的工業過程;",
                    "了解公司的管理文化;"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Summer Intern (Embedded Middleware Team) / Shenzhen Skyworth-RGB Electronic Co Ltd",
                "info":[{
                    "icon":"fa-globe",
                    "Link":"http://investor.skyworth.com/en/index.php"
                },{
                    "icon":"fa-picture-o",
                    "Link":"javascript:window.open('../ig/ig.html?photo=Skyworth', '', 'width=540,height=622');"
                }],
                "Date":"3 Jun 2019 - 11 Jul 2019",
                "Outcome":[
                    "Learn about management of huge project;",
                    "Study different screen mirroring technology;",
                    "Learning the proper program document writing and team management;"
                ]
            },
            "zh":{
                "Pos_Com":"暑期實習 (嵌入式中間件軟體組) / 深圳創維-RGB電子有限公司",
                "info":[{
                    "icon":"fa-globe",
                    "Link":"http://investor.skyworth.com/tc/index.php"
                }],
                "Date":"3 Jun 2019 - 11 Jul 2019",
                "Outcome":[
                    "了解有關大型項目的管理;",
                    "研究不同的屏幕鏡像技術;",
                    "學習適當的程序文檔編寫和團隊管理;"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Electronic Engineer Trainee / RF Tech Ltd. - ITE Smartcard Solutions Limited",
                "info":[{
                    "icon":"fa-globe",
                    "Link": "http://www.hkite.com/"
                }],
                "Date": "Aug 2018 - May 2019",
                "Outcome":[
                    "Research and product development of LoRa, NB-IoT;",
                    "PCB manufacture including Schematics, Layout and Soldering;",
                    "Machine assembly and Coordination;"
                ]
            },
            "zh":{
                "Pos_Com":"實習電子工程師 / RF Tech Ltd. - 智控系統有限公司",
                "info":[{
                    "icon":"fa-globe",
                    "Link": "http://www.hkrft.com/"
                }],
                "Date": "Aug 2018 - May 2019",
                "Outcome":[
                    "LoRa，NB-IoT的研究和產品開發;",
                    "PCB設計，包括原理圖，佈局和焊接;",
                    "機器組裝與協調;"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Summer Intern (Millimeter Wave Product Team)/ Nuctech Company Limited",
                "info":[{
                    "icon":"fa-globe",
                    "Link": "http://www.nuctech.com/en"
                }],
                "Date":"Jul 2018 - Aug 2018",
                "Outcome":[
                    "Preparation work of Machine Learning;",
                    "Data collation and Analysis;",
                    "Tools building for desktop automation;"
                ]
            },
            "zh":{
                "Pos_Com":"暑期實習 (電磁感知事業部 毫米波產品部) / 同方威視技術股份有限公司",
                "info":[{
                    "icon":"fa-globe",
                    "Link": "http://www.nuctech.com/"
                }],
                "Date":"Jul 2018 - Aug 2018",
                "Outcome":[
                    "機器學習前期準備工作;",
                    "數據整理與分析;",
                    "用於桌面自動化的工具構建;"
                ]
            }
        },
        {
            "en":{
                "Pos_Com":"Part-time tutor / Robot Insitute of Hong Kong",
                "info":[{
                    "icon":"fa-globe",
                    "Link": "https://www.rihk.com/"
                }],
                "Date":"2017 - 2018",
                "Outcome":[
                    "Teaching Kids with LEGO Mindstorms with NXT, EV3;",
                    "Teaching Arduino and Basic Electronics for Mini-Robocon 2018;",
                    "Project Implementer;"
                ]
            },
            "zh":{
                "Pos_Com":"兼職導師 / 香港機械人學院",
                "info":[{
                    "icon":"fa-globe",
                    "Link": "https://www.rihk.com/"
                }],
                "Date":"2017 - 2018",
                "Outcome":[
                    "教授 LEGO Mindstorms with NXT, EV3;",
                    "為Mini-Robocon 2018教授Arduino和基礎電子學;",
                    "項目實施者；"
                ]
            }
        }
        
    ]
;

var scoreLangJson =  {
    "spoken":[
        {
            "en":["Cantonese","100"],
            "zh":["粵語","100"]
        },
        {
            "en":["Mandarin","90"],
            "zh":["普通話","90"]
        },
        {
            "en":["English","85"],
            "zh":["英語","85"]
        }  
    ],
    "computer":[
        ["C/C++/ Embedded","90"],
        ["Matlab / Octave","76"],
        ["Python / MicroPython","70"]            
    ]
};

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
            "icon":"fa-id-card",
            "word":{
                "en":"Wong Tsz Ho, Cenz",
                "zh":"黃子豪 (Cenz)"
            }
        },
        {
            "icon":"fa-briefcase",
            "word":{
                "en":"Electronic and Information Engineering Student",
                "zh":"電子與資訊工程專業學生"
            }
        },
        {
            "icon":"fa-home",
            "word":{
                "en":"HKSAR of PRC",
                "zh":"中國香港"
            }
        },
        {
            "icon":"fa-envelope",
            "word":{
                "en":"<a href=\"mailto:webmaster@example.com\">cenz@engineer.com</a>",
                "zh":"<a href=\"mailto:webmaster@example.com\">cenz@engineer.com</a>"
            }
        },
        {
            "icon":"fa-phone",
            "word":{
                "en":"+852 6158 5094, (+86 150 0204 3095)",
                "zh":"+852 6158 5094, (+86 150 0204 3095)"
            }
        }
    ]
;



// code
function displayPersonalInfo(){
    var i = 0;
    var len = infoJson.length;
    for(i in infoJson){
        document.write("<p><i class=\"fa "+ infoJson[i].icon +" fa-fw w3-margin-right w3-large w3-text-teal\"></i>");
        document.write(infoJson[i].word[version]+"</p>");
    }
    
}

function displayEduEx() {
    var i = 0;
    var len = eduExJson.length;
    for(i in eduExJson){
        document.write("<div class=\"w3-container\">");
        document.write("<h5 class=\"w3-opacity\"><b id=\"EduName"+i+"\">"+eduExJson[i][version].Name+"</b>");
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
        document.write("<p>"+scoreLangJson.spoken[i][version][0]+"</p>");
        document.write("<div class=\"w3-light-grey w3-round-xlarge\">");
        // document.write("<div class=\"w3-round-xlarge w3-teal\" style=\"height:"
        //                 +Math.pow(scoreLangJson.spoken[i][version][1]/100,4)*30
        //                 +"px;width:"
        //                 +scoreLangJson.spoken[i][version][1]
        //                 +"%\"></div>");
        //<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
        document.write("<div class=\"w3-round-xlarge w3-teal\" style=\"height:15px;width:"
                            +scoreLangJson.spoken[i][version][1]
                            +"%\"></div>")
        document.write("</div>");
    }
    document.write("<hr>");

    for(i in scoreLangJson.computer){
        document.write("<p>"+scoreLangJson.computer[i][0]+"</p>");
        document.write("<div class=\"w3-light-grey w3-round-xlarge\">");
        document.write("<div class=\"w3-round-xlarge w3-teal\" style=\"height:"
                        +"15"
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

        for(let j in workExJson[i][version].info){
            document.write("<a href=\""+workExJson[i][version].info[j].Link+"\" target=\"_blank\">");
            document.write("<i class=\"fa "+workExJson[i][version].info[j].icon+" fa-fw w3-margin-centre\"></i>");
            document.write("</a>");
        }


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

function displayTitleAll(){
    if(version == "en"){
        document.getElementById("L1").innerHTML 
        = "<i class=\"fa fa-asterisk fa-fw w3-margin-right w3-text-teal\"></i>Skills";
        document.getElementById("L2").innerHTML 
            = "<i class=\"fa fa-globe fa-fw w3-margin-right w3-text-teal\"></i>Languages";
        document.getElementById("R1").innerHTML 
            = "<i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Work Experience";
        document.getElementById("R2").innerHTML 
            = "<i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Education";
    }else if(version == "zh"){
        document.getElementById("L1").innerHTML 
        = "<i class=\"fa fa-asterisk fa-fw w3-margin-right w3-text-teal\"></i>技能";
        document.getElementById("L2").innerHTML 
            = "<i class=\"fa fa-globe fa-fw w3-margin-right w3-text-teal\"></i>語言能力";
        document.getElementById("R1").innerHTML 
            = "<i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>工作經驗";
        document.getElementById("R2").innerHTML 
            = "<i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>教育";
    }

}

function translate_refresh(){
    if(version == "en"){
        document.getElementById("translate").setAttribute("href","?version=zh");
    }else if(version == "zh"){
        document.getElementById("translate").setAttribute("href","?version=en");
    }
}