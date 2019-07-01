
var timeline = [
    {
        "Posistion":"timeline_left",
        "Time":"2017",
        "Content":"Lorem iakafhjglk jhadfgkjhdfa kgj hflkjhsfalfkjhd slkfjhald ksfhjldkjwh flkajdhfl ksj kadjfhl adkjhf\
                    dkaj fhsdllk djfhlk sdh kjadhslk jspsum.."
    },{
        "Posistion":"timeline_right",
        "Time":"2017",
        "Content":"Lorem iakaf hjglkj hadfgkjhd fakgjhflkjhsf alfkjhds lkfjhal dksfhjld kjwhf lkaj dhflks jlkadjfh ladkjhf\
                    dkaj fhsdllkdj fhlksdh lkjadhs lkj spsu m.."
    }
]

for(let i in timeline){
    document.write("<div class=\"timeline_container "+timeline[i].Posistion+" \">");
    document.write("<div class=\"timeline_content\">");
    document.write("<h2>"+timeline[i].Time+"</h2>");
    document.write("<p>"+timeline[i].Content+"</p>");
    document.write("</div></div>");
}




