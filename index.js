

// let ceangetext=document.getElementById('myH1');

// function text(){
//     console.log("button clicked");
// ceangetext.innerText= "Hello World!";
// ceangetext.style.backgroundColor="red";
   
//     ceangetext.toggleAttribute("hidden");  //this will hide the element if it is visible, and show it if it
   
    
    
// }


// uper cod not need



let num  = 0;
  
  document.getElementById('result+').addEventListener('click',function(){
    num +=1 ;
    document.getElementById('display').innerText =num;
  })

  document.getElementById('result-').addEventListener('click',function(){
    num -=1 ;
    document.getElementById('display').innerText =num;

    if(num < 0){
      // alert('Negative number is not allowed');
      
      document.getElementById('display').innerText='0';
      document.getElementById('display').style.backgroundColor="red";
      
    }
    
    
  })

  let reset =document.getElementById('reset').addEventListener('click',function(){
    // num=0 ;
    reset= location.reload(true);
  })

  document.getElementById('submit').addEventListener('click',function(){
    alert('first choice your product');
  })



function modalHide() {
    location.reload();
    
  }





  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[id^="btn"]'); // Select all buttons with IDs starting with "btn"
  
    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        // Your custom logic here
        console.log(`Button clicked: ${button.textContent} `);
        modal.showModal()
        // Replace the above line with your desired action for each button
      });
    });
  });

