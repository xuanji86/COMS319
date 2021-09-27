function validate1(){
    valCheck = true;
    var resultNameCheck1 = nameCheck(document.forms["User information"]["FirstName"].value);
    var image1 = getImage(Boolean(resultNameCheck1), "FirstName");
    var labelNotifyName1=nameGetNotification(Boolean(resultNameCheck1), "FirstName");
    document.getElementById("First name").appendChild(image1);
    document.getElementById("First name").appendChild(labelNotifyName1);

    var resultNameCheck2 = nameCheck(document.forms["User information"]["LastName"].value);
    var image2 = getImage(Boolean(resultNameCheck2), "LastName");
    var labelNotifyEmail2=nameGetNotification(Boolean(resultNameCheck2), "LastName");
    document.getElementById("Last name").appendChild(image2);
    document.getElementById("Last name").appendChild(labelNotifyEmail2);

    var resultgenderCheck = dropDownCheck(document.forms["User information"]["Gender Select"].value)
    var image3 = getImage(Boolean(resultgenderCheck), "Gender");
    var labelNotifyGender=genderGetNotification(Boolean(resultgenderCheck),"Gender");
    document.getElementById("Gender").appendChild(image3);
    document.getElementById("Gender").appendChild(labelNotifyGender)

    var resultStateCheck = dropDownCheck(document.forms["User information"]["State Select"].value)
    var image3 = getImage(Boolean(resultStateCheck), "State");
    var labelNotifyState=genderGetNotification(Boolean(resultStateCheck),"State");
    document.getElementById("State").appendChild(image3);
    document.getElementById("State").appendChild(labelNotifyState)
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

function genderGetNotification(bool, ID){
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Gender can't be null";
    return label;
}

function stateGetNotification(bool, ID){
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "State can't be null";
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

function dropDownCheck(entry){
    if(entry != "0"){
        return true
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

function deleteCookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

