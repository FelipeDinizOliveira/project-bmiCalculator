
function toClose(){
    document.querySelector(".result").classList.add("hide");
    document.querySelector("main").style.opacity = 1;
  
    
   
}
function bmiCalculator(event){
    event.preventDefault();
    let weight = document.getElementById("peso").value;
    let height = document.getElementById("altura").value;

   if(weight !== "" && height !== ""){
    document.querySelector(".message").classList.add("hide");
    let heightInMeters = height / 100;
    let imc = weight / (heightInMeters * heightInMeters).toFixed(2);
    imc = Math.round(imc * 10) / 10; 
    document.querySelector(".result h1").innerHTML = ` Seu IMC é de ${imc}`;
  
    document.querySelector(".result").classList.remove("hide");
    document.querySelector("main").style.opacity = 0.2;

   }
   else{
    document.querySelector(".message").classList.remove("hide");
   }
}
    
  
