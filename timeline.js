
var timeline = [
    {
        "Posistion":"timeline_left",
        "Time":"2017",
        "Content":"Lorem iakafhjglk jhadfgkjhdfa kgj hflkjhsfalfkjhd slkfjhald ksfhjldkjwh flkajdhfl ksj kadjfhl adkjhf\
                    dkaj fhsdllk djfhlk sdh kjadhslk jspsum.."
    },{
        "Posistion":"timeline_right",
        "Time":"2015",
        "Content":"Graduate in Secondary school. <br/>\
                    Ready for PolyU Study. <br/>\
                    <img src=\"http://www.polyu.edu.hk/aado/aa/filemanager/en/ebulletin/2012Jul/polyu3.jpg\" style=\"width:80%\">"
    }
]

for(let i in timeline){
    document.write("<div class=\"timeline_container "+timeline[i].Posistion+" \">");
    document.write("<div class=\"timeline_content\">");
    document.write("<h4>"+timeline[i].Time+"</h4>");
    document.write("<p>"+timeline[i].Content+"</p>");
    document.write("</div></div>");
}




