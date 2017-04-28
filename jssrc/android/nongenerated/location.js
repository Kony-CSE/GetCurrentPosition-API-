/**Function getLocation to find us on map*/
function getLocation() {
    kony.print("::::getLocation 11 ::: ");
    if (kony.os.hasGPSSupport()) {
        kony.print("::::getLocation 22 ::: " + getTimeStamp());
        var positionoptions = new Object();
        positionoptions.enablehighaccuracy = true;
        positionoptions.timeout = 10000;
        positionoptions.maximumage = 4000;
        positionoptions.useBestProvider = true;
        kony.location.getCurrentPosition(getCoordinates, geoErrorCallBack, positionoptions);
        // kony.location.getCurrentPosition(getCoordinates, geoErrorCallBack);
        //      kony.print("::::getLocation 33 ::: " +getTimeStamp());
    } else {
        alert("Please enable your gps.")
    }
}

function getCoordinates(position) {
    //kony.print("::::getLocation 44 ::: " +getTimeStamp());
    var getLatitude = position.coords.latitude;
    var getLongitude = position.coords.longitude;
    kony.print("::::getCoordinates::::::: latitude => " + getLatitude + " longitude = " + getLongitude);
    alert("::::getCoordinates::::::: latitude => " + getLatitude + " longitude = " + getLongitude);
    kony.print("::::getLocation 55 ::: " + getTimeStamp());
    alert("::::getLocation 55 ::: " + getTimeStamp());
}

function geoErrorCallBack(positionerror) {
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg + " message: " + positionerror.message;
    alert(errorMesg);
    kony.print("::::geoErrorCallBack Error::: ");
    alert("::::geoErrorCallBack Error::: ");
}

function getTimeStamp() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
}