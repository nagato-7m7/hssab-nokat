function awamil(){
    if (window.localStorage.getItem("A5")) {
      A5.value = window.localStorage.getItem("A5");
      Z5.value = window.localStorage.getItem("Z5");
      E5.value = window.localStorage.getItem("E5");
      R5.value = window.localStorage.getItem("R5");
     
      Y5.value = window.localStorage.getItem("Y5");
      Q5.value = window.localStorage.getItem("Q5");
      S5.value = window.localStorage.getItem("S5");
      
      F5.value = window.localStorage.getItem("F5");
    
    
    }
   
  
    }
  
  
      function dala(){
         var elements = document.getElementsByTagName("input");
         for (var ii=0; ii < elements.length; ii++) {
         if (elements[ii].value == "") {
           elements[ii].value = "0";
      
         }}
  
  
         window.localStorage.setItem("A5", A5.value);
         window.localStorage.setItem("Z5", Z5.value);
         window.localStorage.setItem("E5", E5.value);
         window.localStorage.setItem("R5", R5.value);
         
         window.localStorage.setItem("Y5", Y5.value);
         window.localStorage.setItem("Q5", Q5.value);
         window.localStorage.setItem("S5", S5.value);
        
         window.localStorage.setItem("F5", F5.value);
  
  
  
  var natija=document.getElementById("natija");
  natija.value=((parseFloat(((parseFloat(A1.value)*parseFloat(A5.value))))+parseFloat(((parseFloat(Z1.value)*parseFloat(Z5.value))))+parseFloat(((parseFloat(E1.value)*parseFloat(E5.value))))+parseFloat(((parseFloat(R1.value)*parseFloat(R5.value))))+parseFloat(((parseFloat(Y1.value)*parseFloat(Y5.value))))+parseFloat(((parseFloat(Q1.value)*parseFloat(Q5.value))))+parseFloat(((parseFloat(S1.value)*parseFloat(S5.value))))+parseFloat(((parseFloat(F1.value)*parseFloat(F5.value))))
  /(parseFloat(A5.value)+parseFloat(Z5.value)+parseFloat(E5.value)+parseFloat(R5.value)+parseFloat(Y5.value)+parseFloat(Q5.value)+parseFloat(S5.value)+parseFloat(F5.value)).toFixed(2))); }
  
  
    function mssh(){
         var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].value == "10") {
        elements[ii].value = "";
        document.getElementById("mssh").innerHTML="3mr"
      }
      else if (elements[ii].value == "0" || elements[ii].value == "") {
        elements[ii].value = "10";
        document.getElementById("mssh").innerHTML="mssh"
      }
    }  } 
  
    
    console.log(window.localStorage.getItem("A5"));
    console.log(window.localStorage.getItem("Z5"));
    console.log(window.localStorage.getItem("E5"));
    console.log(window.localStorage.getItem("R5"));
   
    console.log(window.localStorage.getItem("Y5"));
    console.log(window.localStorage.getItem("Q5"));
    console.log(window.localStorage.getItem("S5"));
    
    console.log(window.localStorage.getItem("F5"));
   
  //   function sav() {
  //      var name = document.getElementById("A5").value;
  //      localStorage.setItem("userName", parseFloat(A5.value));
  //      }
  //      function set() {  
  //      document.getElementById("A5").innerHTML = localStorage.getItem("userName");
  //  }
  