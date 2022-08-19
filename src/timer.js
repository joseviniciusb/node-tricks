const myInterval = setInterval(myTimer, 1000);
setInterval(stopTimer, 15000)

function myTimer() {
  const date = new Date();
    console.log(date.toLocaleTimeString()) ;
}

function stopTimer(){
    clearInterval(myInterval)
}
