document.getElementById("button").addEventListener("click", loadData);

function loadData(){
   
//    const xhr = new XMLHttpRequest();
//    xhr.open("GET", "data.txt", true);
//    xhr.onload = function(){
//        console.log("READY STATE", xhr.readyState);
//        if(this.status === 200) {
//            console.log(this.responseText);
//        }
//    }
//    xhr.send();
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
        }
    };
    xhr.open("GET", "data.txt", true);
    xhr.send();
};
