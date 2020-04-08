var DropdownData = [
     {
        "Year" : "2020",
        "Time":["Apr","Apr","Mar","Jan"],
        "Activities/Experience":[   "<a href='https://www.coursera.org/account/accomplishments/records/6V8RMF74T37B' target='_blank'>Machine Learning with Python</a> by IBM on Coursera",    
                                    "<a href='https://certificates.mooc.fi/validate/rxz2bdjqpdb' target='_blank'>Elements of AI</a> @ University of Helsinki",   
                                    "FINSPIRE Hackathon",
                                    "<a href='https://courses.nvidia.com/certificates/5baa4dcb2bce4d8a80bd73303cee6e63' target='_blank'>Getting Started with AI on Jetson Nano</a> @ NVIDIA Deep Learning Institute"
                                ]
    },
    {
        "Year" : "2019",
        "Time":["Oct","Summer","Summer","April"],
        "Activities/Experience":[   "<a href='https://www.instagram.com/p/B4HXAbRj5wB/' target='_blank'>SmarTone Hackathon</a>",
                                    "<a href='#' target='_blank'>Work in Murata, WuXi (Intern)</a>",
                                    "<a href='https://www.instagram.com/p/B0FTSRAHbYC/' target='_blank'>Work in Skyworth, ShenZhen (Intern)</a>",
                                    "Hard@UST - Finalist"]
    },{
        "Year" : "2018",
        "Time":["Sep","Summer","Summer", "May", "Jan"],
        "Activities/Experience":[   "Work in RF Tech, Hong Kong (Engineer Trainee)",
                                    "Work in NucTech, Beijing",
                                    "Tongji University - Bauhinia Valley 4th Innovation and Entrepreneurship Training Camp",
                                    "Big Datathon 2018 @ PolyU",
                                    "Cambodia Exchange - Project STARS, PolyU"]
    },{
        "Year" : "2017",
        "Time":["Sep","Sep","Sep", "Summer", "Jan"],
        "Activities/Experience":[   "Project STARS Stage 2 training, (Student Training for Advancement, Relation & Success)",
                                    "Work in Robot Institute of Hong Kong",
                                    "Helper in Robocon Team",
                                    "Joint University (Summer), Feng Chia 2017",
                                    "Myanmar Exchange - Project STARS, PolyU"]
    },{
        "Year" : "2016",
        "Time":["Sep","Summer","Jul", "Mar", "Jan"],
        "Activities/Experience":[   "Project STARS Stage 1 training, (Student Training for Advancement, Relation & Success)",
                                    "Service Learning: Reducing the scientific divide in secondary students through STEM projects",
                                    "Drone Day Camp",
                                    "Startup Weekend, PolyU",
                                    "Entrepreneurial trips to Beijing (Zhongguancun)"]
    },{
        "Year" : "2015",
        "Time":["Sep"],
        "Activities/Experience":["Enter University!!!!!!"]
    }
]


function displayDropdown(){
    document.write("<ul class=\"collapsible\">");
    var dropdownlen = DropdownData.length;
    var i = 0;
    for(i in DropdownData){
        if(i == 0){
            document.write("<li class=\"active\">");
        }else{
            document.write("<li>");
        }
        // document.write("<li class=\"active\">");
        document.write("<div class=\"collapsible-header\"><i class=\"material-icons\">schedule</i>"+DropdownData[i]["Year"]);
        if(i == 0){
            document.write("<span class=\"new badge\">")
        }else{
            document.write("<span class=\"badge\">")
        }
        document.write(DropdownData[i]["Time"].length+"</span></div>");
        document.write("<div class=\"collapsible-body\"><span>\
                        <table>\
                            <tr>\
                            <th>Time</th>\
                            <th>Activities/Experience</th>\
                            </tr>");
        let j = 0;                    
        for(j in DropdownData[i]["Time"]){
            document.write("<tr>\
                            <td>"+ DropdownData[i]["Time"][j]+"</td>\
                            <td>"+ DropdownData[i]["Activities/Experience"][j] +"</td>\
                            </tr>");
        }

        document.write(" </table></span></div>");
    }
    document.write("</ul>");
}
