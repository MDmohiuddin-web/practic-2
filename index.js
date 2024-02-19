

let ceangetext=document.getElementById('myH1');

function text(){
    console.log("button clicked");
ceangetext.innerText= "Hello World!";
ceangetext.style.backgroundColor="red";
   
    ceangetext.toggleAttribute("hidden");  //this will hide the element if it is visible, and show it if it
   
    
    
}


// uper cod not need





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

