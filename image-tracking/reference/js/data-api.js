WL.registerComponent('data-api', {
    param: { type: WL.Type.Float, default: 1.0 },
    call: { type: WL.Type.Object },
    mail: { type: WL.Type.Object },
    web: { type: WL.Type.Object },
    location: { type: WL.Type.Object },
    linkedIn: { type: WL.Type.Object },
    instagram: { type: WL.Type.Object },

}, {
    init: function () {

    },
    start: function () {
        this.dataread = 0;
    },
    update: function () {
        if(this.dataread==0){
            try{
                this.call.getComponent('text').text= data["Telephone"].toString();
                this.mail.getComponent('text').text=data["Mail"];
                this.web.getComponent('text').text=data["Website"];
                this.location.getComponent('text').text="private";
                this.linkedIn.getComponent('text').text=data["LinkedIn ID"];
                this.instagram.getComponent('text').text=data["Instagram ID"];       
                //console.log( data["LinkedIn ID"]);
            }catch(error){
                console.warn("Can't fetch data ! Ensure your URL contains valid ID and password variables ")
            }
            
            this.dataread=1;
        }
    },
});

/** 
 * ID: 6421235
Instagram ID: "https://www.instagram.com/digi_tonics/"
LinkedIn ID: "https://www.linkedin.com/in/nithin-steven-f-9a5b63195/"
Mail: "nstcg32@gmail.com"
Name: "ns"
Surname: "tcg"
Telephone: 919495321820
Vcasrd: "Vcard Data"
Website: "https://tvroom.in"

*/
