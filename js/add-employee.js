// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
    function init() {
        "use strict"
  
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    var height =  800;
    var width =  700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
   window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
   window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

   const $ = (id) =>document.getElementById(id);
   

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
   var cancelBtn = $("cancel");
   cancelBtn.addEventListener("click", function() {
       window.close();
   });
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
 // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT      

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
 

   var id = $('id');
    var name = $('name');
    var ext = $('extension');
    var email = $('email');
    var dept = $('department');
    var submitBtn = $('submit');




       submitBtn.addEventListener("click",(event)  => {
       event.preventDefault();
       id = id.value;
       name = name.value;
       ext = ext.value;
       email = email.value;
       dept = dept.value;
      

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

   let parentoutput = window.opener.document.getElementById('loginDetails');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    parentoutput.innerText = `Id: ${id}  \n Name: ${name}  \n Extension:${ext} \n Email:${email} \n Department: ${dept} `
   
// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
     window.close();
  });
};