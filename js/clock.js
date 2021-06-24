var interval = setInterval(function(){
    var eventDate = new Date("July 19, 2021 00:00:00").getTime();
    var now = new Date().getTime();
    var remTime =  eventDate - now;
    //document.getElementById("remTime").innerHTML = remTime;
    var s = Math.floor((remTime/1000)%60);
    var mn = Math.floor(((remTime/1000)/60)%60);
    var hr = Math.floor((((remTime/1000)/60)/60)%24);
    var day = Math.floor((remTime/1000/60/60/24));
    
    document.querySelector("#day").innerHTML = day+"<span class='label'>Days</span>";
    document.querySelector("#hr").innerHTML = hr+"<span class='label'>Hr</span>";
    document.querySelector("#min").innerHTML = mn+"<span class='label'>Mins</span>";
    document.querySelector("#sec").innerHTML = s+"<span class='label'>s</span>";

    if(remTime <= 0)
    {
      clearInterval(interval);
      document.getElementById("demo").innerHTML = "IT's TIME!"
    }
    }, 1000);