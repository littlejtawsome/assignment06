// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
 function init() {
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
  var btAdd = document.getElementById('btnAddEmployee');
   btAdd.addEventListener('click', function() {
   "use strict";
   window.open("add-employee.html", "addEmp", "resizable=yes")

// OPEN THE ADD-EMPLOYEE.HTML  PAGE WITHIN A POPUP
  });
};