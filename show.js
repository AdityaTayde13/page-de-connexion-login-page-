$(document).ready(function (){
    $("#checkbox-field").change(function (){
        if(this.checked){
                $("#password-field")[0].type="text";
                // also $("#password-field").get(0).type="text";

            
        }
        else {
                    document.getElementById("password-field").type="password";
                }
    })
})