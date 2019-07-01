/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/* DOMContentLoaded...

I understand that there is a "best practice" method to the madness as it relates every single aspect of a program's
development which would lead one to naturally situate the code at the base of the html's body but I also have come
to understand that great products are developed via teamwork and collaboration so with all that said I believe it
best to wrap all my code from here forward in a DOMContentLoaded event handler so no matter the preference of those
involved regarding the placement of the javascipt files in the html's head or body tags none of the javascript will
fires until the initial HTML document has been completely loaded and parsed. Also regardless as to the connectivity
of the user or should the javascript be turned off on a browser the page's main content will atleast begin to load
without the user having to sit there waiting for the stylesheets, images, and subframes to load b/c of some hangup
involving the javascript. All of this is to provide a very thorough explanation for the utilization of the following
event listener not only here but in all the program's I'm solely responsible for or collaborate on moving forward...*/

window.addEventListener('DOMContentLoaded', (event) => {

   /*================
   global variables
   ================*/

   // "studentList" + "student" variables store the student list item elements in the student list...
   const studentList = document.querySelector('.student-list');
   // variable stores the number of items to show on each “page”, which for this program, is 10...
   const students = document.querySelectorAll(".student-item");
   // "itemsPerpage" variable stores the desired items to be shown on each page...
   const itemsPerPage = 10;

   /*================================
    logic for displaying page(s)...
   ================================*/

   // "show10Students" function serves to show up to 10 of the students we want displayed on a given page...
   // "list" parameter is the list of students that you’ll pass in...
   // "page" parameter represents the page number...
   const show10Students = (list, page) => {
      // Start Index of the list items  = (page parameter * items per page) - items per page
      let start = (page * itemsPerPage) - itemsPerPage;
      // End Index of the list items = page parameter * items per page
      let end = page * itemsPerPage;
      // LOOPING over the list parameter which serves to display any list item
      // with an INDEX that is GREATER THAN OR EQUAL to the start index variable and LESS THAN the end index variable...
      for (var i = 0; i < students.length; i++) {
         if (i >= start || i < end) {
            students[i].style.display = "none";
         } else {
            students[i].style.display = "";
         }
      }
   }

   show10Students(studentList, "");
   // sanity check
   console.log('All The DOM Content has load and you\'re ready to go!');
}); //conclusion of DOMContentLoaded function
