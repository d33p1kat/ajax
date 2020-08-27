document.getElementById("button");
document.addEventListener("click", extractjson);


// GET  TEXT
// document.addEventListener("click", extractdata);
// function extractdata(){
//    const xhr = new XMLHttpRequest();
//    xhr.open("GET","data.txt", true);
//    xhr.onload = function(){
//      if (this.status === 200){
//          console.log(this.responseText);
//      }
//    };
//    xhr.send();
// }

//GET JSONDATA
// document.addEventListener("click", extractjson);
// function extractjson(){
//    const xhr = new XMLHttpRequest();
//    xhr.open("GET","users.json", true);
//    xhr.onload = function(){
//      let output = ""
//      if (this.status === 200){
//         const data = JSON.parse(this.responseText);
//         data.forEach(function(val){
//             console.log(val.name);
//             output += `<li>${val.name}</li>`
//          })
//      }
//      document.getElementById("output").innerHTML = output;
//    };
//    xhr.send();
// };

//GET EXTERNAL API DATA
document.addEventListener("click", extractapi);
function extractapi(){
   const xhr = new XMLHttpRequest();
   xhr.open("GET","users.json", true);
   xhr.onload = function(){
     let output = ""
     if (this.status === 200){
        const data = JSON.parse(this.responseText);
        data.forEach(function(val){
            console.log(val.name);
            output += `<li>${val.name}</li>`
         })
     }
     document.getElementById("output").innerHTML = output;
   };
   xhr.send();
};
