/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/




/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

//I understand that there is a "best practice" method to the madness as it relates every single aspect of a program's
//development which would lead one to naturally situate the code at the base of the html's body but I also have come
//to understand that great products are developed via teamwork and collaboration so with all that said I believe it
//best to wrap all my code from here forward in a DOMContentLoaded event handler so no matter the preference of those
//involved regarding the placement of the javascipt files in the html's head or body tags none of the javascript will
//fires until the initial HTML document has been completely loaded and parsed. Also regardless as to the connectivity
//of the user or should the javascript be turned off on a browser the page's main content will atleast begin to load
//without the user having to sit there waiting for the stylesheets, images, and subframes to load b/c of some hangup
//involving the javascript. All of this is to provide a very thorough explanation for the utilization of the following
//event listener not only here but in all the program's I'm solely responsible for or collaborate on moving forward...
window.addEventListener('DOMContentLoaded', (event) => {

   /*================
   global variables
   ================*/

   // "studentList" + "student" variables store the student list item elements in the student list...
   const studentList = document.querySelector('.student-list');
   const students = document.querySelectorAll(".student-item");

   // variable stores the number of items to show on each “page”, which for this project, is 10...
   let showStudents;

   console.log('All The DOM Content has load and you\'re ready to go!');
}); //conclusion of DOMContentLoaded function
