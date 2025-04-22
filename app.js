

    function add(){
    
    let m=document.getElementById("nam");
    let n=document.getElementById("con2");
    let p=document.getElementById("dd");
    let de=document.getElementById("k");

    console.log(m.value);
    console.log(n.value);
    console.log(p.value);
   
    
  if(m.value===""){
    seterror(m,"name is empty");
  }
  else{
    setsuccess(m);
  }

  if(n.value===""){
    seterror(n,"number is empty");
  }
  else{
    setsuccess(n)
  }

  if(p.value===""){
    seterror(p,"Empty date of birth");
  }
  else{
    setsuccess(p)
  }
  //radio
let r1= document.getElementsByName("gender");
let res2="";
for(let val of r1){
  if(val.checked){
      res2=val.value;
      break;
  }
}
console.log(res2);
    }

    function seterror(element,msg){
      let parent=element.parentElement;
      let resfinal=parent.querySelector(".error")
      resfinal.innerText=msg;
    }

    function setsuccess(element,msg){
      let parent=element.parentElement;
      let resfinal=parent.querySelector(".error")
      resfinal.innerText="";
    }

      
    

