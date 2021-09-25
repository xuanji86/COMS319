function validate1(){
    valCheck = true;
    var resultNameCheck1 = nameCheck(document.forms["User information"]["FirstName"].value);
    var image1 = getImage(Boolean(resultNameCheck1), "FirstName");
    var labelNotifyName1=nameGetNotification(Boolean(resultNameCheck1), "FirstName");
    document.getElementById("FirstName").appendChild(image1);
    document.getElementById("FirstName").appendChild(labelNotifyName1);
    // var resultNameCheck2 = nameCheck(document.forms["User information"]["LastName"].value);
    // var image2 = getImage(Boolean(resultNameCheck2), "LastName");
    // var labelNotifyEmail2=nameGetNotification(Boolean(resultNameCheck2), "LastName");
    // document.getElementById("LastName").appendChild(image2);
    // document.getElementById("LastName").appendChild(labelNotifyEmail2);
    console.log(labelNotifyName1);
}

function nameGetNotification(bool, ID){
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Must contain onlyalphabetic or numericcharacters.";
    return label;
}

function getImage(bool, ID){
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}
function nameCheck(name) {

    if (alphaNumCheck(name) == true){
        return true;
    }
    valCheck = false;
    return false;
}

function alphaNumCheck(entry){
    var regName = /^[a-z0-9]+$/i;
    if(entry != null && entry.match(regName)){
        return true;
    }else{
        return false;
    }
}



