// // NOM


document.getElementById('Nom').onkeyup=function(){
    
     var Nom = document.getElementById('Nom').value;
     var regex = /^[a-z]{1,30}$/ig;
     if(Nom === '') {
        document.getElementById('name').innerHTML = 'Nom is required.';
         document.getElementById('Nom').style.borderColor="red";

    } else if (regex.test(Nom)) {
        document.getElementById('name').innerHTML = '';
        document.getElementById('Nom').style.borderColor="#09c372";

       
    } else if (Nom.length>30){
        document.getElementById('name').innerHTML = 'where are u going';
        document.getElementById('Nom').style.borderColor= "red";
        
    } else {
        document.getElementById('name').innerHTML = 'dont use numbers or chifre';
        document.getElementById('Nom').style.borderColor="red";

       
    }
}

//PRIX


document.getElementById('prix').onkeyup=function(){
var prix = document.getElementById('prix').value;
var regex = /^\d+,\d{1,2}$|^\d+$/ig;
if(prix === '') {
    document.getElementById('price').innerHTML = 'write something';
    document.getElementById('prix').style.borderColor="red";
    

} else if (regex.test(prix)) {
    document.getElementById('price').innerHTML = '';
    document.getElementById('prix').style.borderColor="#09c372";
}
else {
    document.getElementById('price').innerHTML = 'this is not the price';
    document.getElementById('prix').style.borderColor="red";
   }}

    
       // PROMOTION
       
   var g=0;

document.getElementById('add').addEventListener('click',function(){
    g++;
    document.getElementById('edit3').style.display="none" 
       if (document.getElementById('oui').checked) {
        document.getElementById("promo").innerHTML = '';
    } else if(document.getElementById('non').checked) {
        document.getElementById("promo").innerHTML = 'are you sure haha';
    } else {
        document.getElementById("promo").innerHTML = "select something pls";
        
    };

    // marque


    var marque = document.getElementById("marque");
    if (marque.value === "") {
        document.getElementById("marque").style.border = "2px solid #FF3860";
        document.getElementById("marquepara").innerHTML = "select something.";
    } else {
        document.getElementById("marque").style.border = "2px solid #09C372";
        document.getElementById("marquepara").innerHTML = "";
    }


    //date

    var date = document.getElementById("date").value;
    if (date.length < 1) {
        document.getElementById("paradate").innerHTML =
            "date is required.";
        document.getElementById("date").style.border =
            "2px solid #FF3860";
    } else {
        document.getElementById("paradate").innerHTML = "";
        document.getElementById("date").style.border =
            "2px solid #09C372";
    }


    //type

     // TYPE
     var type = document.getElementById("type");
     if (type.value === "") {
         document.getElementById("type").style.border = "2px solid red";
         document.getElementById("paratype").innerHTML = "You must select a Marque.";
     } else {
         document.getElementById("type").style.border = "2px solid #09C372";
         document.getElementById("paratype").innerHTML = "";
     }

   
   //add

   var table = document.getElementById("table").getElementsByTagName("tbody")[0];
   var newRow = table.insertRow(table.length);
   newRow.setAttribute("id", `f${g}`)
   cell1 = newRow.insertCell(0);
   cell1.innerHTML = document.getElementById("Nom").value;
   
   cell2 = newRow.insertCell(1);
   cell2.innerHTML = document.getElementById("marque").value;

   
   cell3 = newRow.insertCell(2);
   cell3.innerHTML = document.getElementById("prix").value;

   cell4 = newRow.insertCell(3);
   cell4.innerHTML = document.getElementById("date").value;

   cell5 = newRow.insertCell(4);
   cell5.innerHTML = document.getElementById("type").value;

   cell6 = newRow.insertCell(5);
   cell6.innerHTML = document.querySelector('input[name="radio"]:checked').value;
   
   cell7 = newRow.insertCell(6);
   cell7.innerHTML = `<button style="width: 20%; height: 1.3em;" onclick="delet(${g})">Delet</button><button style="width: 20%; height: 1.3em;" onclick="edit(${g})">Edit</button>
   
                      `;
               clear();      
                      
                      
})
function delet(g){
    document.getElementById(`f${g}`).remove();
}
function edit(g){
    
let Nm=document.getElementById(`f${g}`).cells[0].innerHTML;
let mr=document.getElementById(`f${g}`).cells[1].innerHTML;
let pr= document.getElementById(`f${g}`).cells[2].innerHTML;
let dt=document.getElementById(`f${g}`).cells[3].innerHTML;
let typ=document.getElementById(`f${g}`).cells[4].innerHTML;
    document.getElementById("Nom").value= Nm;
    document.getElementById("marque").value= mr;
    document.getElementById("prix").value=pr;
    document.getElementById("date").value= dt;
    document.getElementById("type").value= typ;
    document.getElementById('edit3').style.display="block"
document.getElementById('edit3').onclick=function(){
        document.getElementById(`f${g}`).cells[0].innerHTML=document.getElementById("Nom").value;
        document.getElementById(`f${g}`).cells[1].innerHTML=document.getElementById("marque").value;
        document.getElementById(`f${g}`).cells[2].innerHTML=document.getElementById("prix").value;
        document.getElementById(`f${g}`).cells[3].innerHTML=document.getElementById("date").value;
        document.getElementById(`f${g}`).cells[4].innerHTML=document.getElementById("type").value;
       clear();
       document.getElementById('edit3').style.display="none"  

    }
    
}

function clear(){
    Nom.value='';
    marque.value='';
    prix.value='';
    date.value='';
    type.value='';

   }     
  
