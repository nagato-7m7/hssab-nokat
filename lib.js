function awamil(){
    // Add fade-in animation to main container
    document.querySelector('.main-container').classList.add('fade-in');
    
    // Add slide-up animation to table
    setTimeout(() => {
        document.querySelector('.table-modern').classList.add('slide-up');
    }, 200);
    
    // Add slide-up animation to results container
    setTimeout(() => {
        document.querySelector('.results-container').classList.add('slide-up');
    }, 400);
    
    // Initialize calculation
    dala();
}
  
  
      function dala(){
         var elements = document.getElementsByTagName("input");
         for (var ii=0; ii < elements.length; ii++) {
         if (elements[ii].value == "") {
           elements[ii].value = "0";
         }
         
         // Validate input values
         var value = parseFloat(elements[ii].value);
         if (value < 0 || value > 20) {
             elements[ii].classList.add('invalid');
             elements[ii].classList.remove('valid');
         } else {
             elements[ii].classList.add('valid');
             elements[ii].classList.remove('invalid');
         }
       }

  var natija=document.getElementById("natija");
  var result = (parseFloat(parseFloat(A1.value)*4+parseFloat(Z1.value)*4+parseFloat(E1.value)*4+parseFloat(R1.value)*3+parseFloat(Y1.value)*3+parseFloat(Q1.value)*1+parseFloat(S1.value)*2+parseFloat(F1.value)*1)/22).toFixed(2);
  
  // Update display
  natija.textContent = result;
  
  // Add grade level styling
  natija.className = 'results-value';
  if (result >= 16) {
      natija.classList.add('grade-excellent');
  } else if (result >= 14) {
      natija.classList.add('grade-good');
  } else if (result >= 12) {
      natija.classList.add('grade-average');
  } else {
      natija.classList.add('grade-poor');
  }

  // Add visual feedback
  natija.style.transform = 'scale(1.1)';
  natija.classList.add('success-glow');
  
  setTimeout(() => {
      natija.style.transform = 'scale(1)';
      natija.classList.remove('success-glow');
  }, 600);
}
  
    function mssh(){
         var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].value == "10") {
        elements[ii].value = "";
        document.getElementById("mssh").innerHTML='<i class="fa fa-eraser"></i> إعادة تعبئة'
      }
      else if (elements[ii].value == "0" || elements[ii].value == "") {
        elements[ii].value = "10";
        document.getElementById("mssh").innerHTML='<i class="fa fa-eraser"></i> مسح'
      }
    }
    // Recalculate after clearing/filling
    dala();
  } 
  
    
    // console.log(window.localStorage.getItem("A5"));
    // console.log(window.localStorage.getItem("Z5"));
    // console.log(window.localStorage.getItem("E5"));
    // console.log(window.localStorage.getItem("R5"));
   
    // console.log(window.localStorage.getItem("Y5"));
    // console.log(window.localStorage.getItem("Q5"));
    // console.log(window.localStorage.getItem("S5"));
    
    // console.log(window.localStorage.getItem("F5"));
   
  //   function sav() {
  //      var name = document.getElementById("A5").value;
  //      localStorage.setItem("userName", parseFloat(A5.value));
  //      }
  //      function set() {  
  //      document.getElementById("A5").innerHTML = localStorage.getItem("userName");
  //  }
  