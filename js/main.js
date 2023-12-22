siteName= document.getElementById("siteName");
siteURL=document.getElementById("siteURL");


var siteList=[];

if(localStorage.getItem("siteList")!=null){
    siteList=JSON.parse(localStorage.getItem("siteList"));
    display();
}
//^===============>Add function==============>//
function add(){
   if(validationName()==true && validationURL()==true){
    var site ={
        name:siteName.value,
        url:siteURL.value,
    }
    siteList.push(site);
    localStorage.setItem("siteList",JSON.stringify(siteList)); 
    clear();
    display();

   }else{
    document.getElementById("validation-box").classList.remove("d-none");

   }
  

}

//^===============>remove validation box function==============>//
function removeValidationBox(){
    document.getElementById("validation-box").classList.add("d-none");

}

//^================> Display function===========>//
function display(){
    var cartoona="";
    for(var i=1; i<siteList.length; i++){
       cartoona+=`
       <tr>
         <td class="text-center">${i}</td>
         <td  class="text-center">${siteList[i].name}</td>
         <td  class="text-center"><button id="visit" class="btn btn-success "><i class="fa-solid fa-eye"></i> <a class="text-white text-decoration-none" target="_blank" href="${siteList[i].url}">Visit</a></button> </td>
         <td  class="text-center"><button onclick="deleteitem(${i})" id="delete" class="btn btn-danger "><i class="fa-solid fa-trash"></i> Delete</button></td>  
       </tr>
        `;  
    }
    document.getElementById("tableRow").innerHTML=cartoona;
}  

//^==============>clear function=================>//
function clear(){
    siteName.value="";
    siteURL.value="";

}

//^==============>delete function=================>//
function deleteitem(index){
    siteList.splice(index,1);
    localStorage.setItem("siteList",JSON.stringify(siteList));
    display();

}

//^==============>validation name function=================>//

function validationName(){
     var data = siteName.value;
     var regex = /^[a-zA-Z]{3,}$/
     if(regex.test(data)){
        siteName.classList.add("is-valid");  
        siteName.classList.remove("is-invalid"); 
        return true;

     }else{
        siteName.classList.add("is-invalid");
        //siteName.classList.remove("is-valid");
        return false;  
     }

}

//^==============>validation URL function=================>//

function validationURL(){ 
    var data = siteURL.value;
    var regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if(regex.test(data)){
        siteURL.classList.add("is-valid");  
        siteURL.classList.remove("is-invalid"); 
        return true;
       

     }else{
        siteURL.classList.add("is-invalid");
        siteName.classList.remove("is-valid");
        return false;  
     }



}