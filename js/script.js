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

   // provides DOM reference point while in development...
   window.onclick = (e) => {
      console.log(e.target);
      console.log(e.target.tagName);
   }
   /*==============================
   declaration of global variables
   ===============================*/

   // "studentList" + "student" variables store the student list item elements in the student list...
   const entireStudentList = document.querySelector('.student-list');
   // "eachStudentItem" variable stores the number of items to show on each “page”, which for this program, is 10...
   const eachStudentItem = document.querySelectorAll(".student-item");
   // "itemsPerpage" variable stores the desired items to be shown on each page...
   const itemsPerPage = 10;
   let i;

   /*================================
    logic for displaying "page(s)"...
   ================================*/

   // "show10Students" function serves to show up to 10 of the students we want displayed on a given page...
   // "list" parameter is the list of students that you’ll pass in which is a global variable...
   // "page" parameter represents the page number, be mindful that the page parameter's data type is an integer/number
   const show10Students = (list, page) => {
      // Start Index of the list items  = (page parameter * items per page) - items per page
      let start = (page * itemsPerPage) - itemsPerPage;
      // End Index of the list items = page parameter * items per page
      let end = page * itemsPerPage;
      // LOOPING over the list parameter which serves to display any list item
      // with an INDEX that is LESS THAN OR EQUAL to the start index variable and GREATER THAN the end index variable...
      for (i = 0; i < eachStudentItem.length; i++) {
         if (i < start || i >= end) {
            eachStudentItem[i].style.display = "none";
         } else {
            eachStudentItem[i].style.display = "";
         }
      }
   }

   /*================================
      logic for pagination link(s)...
   ================================*/
   // function creates and appends functioning pagination links...
   // accepts a single list parameter to represent the actual list of students passed in as an argument...


   // You can divide list.length by the max number of items per page to figure out how many pages are needed,
   // and you can use a loop that iterates that many times to create the correct number of LI elements.
   const maxNumPages = Math.ceil(eachStudentItem.length / itemsPerPage);
   const paginationDiv = document.createElement('div');
   paginationDiv.style.display = 'flex';
   paginationDiv.style.textAlign = 'center';
   paginationDiv.style.margin = '0, auto';


   const createPagLinks = (list) => {
      //creates unordered list element
      const ul = document.createElement('ul');
      // loops through every index in list allowing access to each students/objects via maxNumPages variable
      for (i = 0; i < maxNumPages; i++) {
         // https://teamtreehouse.com/community/difference-between-classlist-and-classname
         // for each student/object in maxNumPages array the class of "pagination" is added to the newly formed pagination div
         paginationDiv.classList.add("pagination");
         // with the div created & loaded with the class of "pagination" we append that div to the list of students so it's now properly situated on the DOM
         entireStudentList.appendChild(paginationDiv);
         // append an unordered list to the pagaination div
         paginationDiv.appendChild(ul);
         // create the list items for the newly formed unordered list
         const li = document.createElement('li');
         // situate the newly formed list items directly in the unordered list by appending them to the 'ul'
         ul.appendChild(li);
         // create the pagination anchor tags
         const link = document.createElement('a');
         // obtain access to the first list item in the unordered list
         const firstLi = ul.firstChild;
         // set the the value of "a" to the value of that of the first anchor tag
         const a = firstLi.firstChild;
         // // give pagination link's class the class name of "active"
         // firstLi.setAttribute("className", "active");
         //anchor tags become part of each list item
         li.appendChild(link);
         //the list item's anchor tags have their attributes set to where they are loaded with active links
         link.setAttribute("href", "#");
         // https://stackoverflow.com/questions/3496280/set-text-of-anchor-tag-in-javascript
         link.innerHTML = i + 1;
         // when the pagination links are clicked we are setting the "paglinks" variable up to obtain
         // access to the anchor tags that represent each pagination page holding a maximum of 10 studen objects per "page"
         link.addEventListener('click', (e) => {
            // "pagLink" variable serves to gain access to all the program's anchor tags
            const pagLink = document.getElementsByTagName('a');
            // all anchor tags are cleared of the class so the active state is reset every time user clicks on a specific link
            for (i = 0; i < maxNumPages; i++) {
               pagLink[i].classList.remove("active");
               //anchor tag is clicked the class link's class is set to active
            }
            e.target.className = "active";
            // here we are calling the function so all the above code can be executed and manipulation of the DOM can proceed
            show10Students(entireStudentList, link.innerHTML);
         });
      }
   }

   // CALLING show10Students FUNCTION...
   show10Students(entireStudentList, 1);
   createPagLinks(entireStudentList);



   /*======================================
      search bar functionality/animation
   ========================================*/
   const body = document.querySelector('body');
   const searchBar = document.querySelector('#search');
   const searchIcon = document.querySelector('.search-icon');
   // "searchInput" variable affords you access to the search input field
   const searchInput = document.querySelector('#search-input');
   let active = false;


   body.addEventListener('click', (e) => {
      if (e.target.id === 'search' || e.target.id === 'search-input' || e.target.className === 'search-icon') {
         if (!active) {
            searchBar.classList.add('active');
            searchIcon.classList.add('active');
            searchInput.classList.add('active');
            active = true;
         }
      } else if (active) {
         searchBar.classList.remove('active');
         searchIcon.classList.remove('active');
         searchInput.classList.remove('active');
         active = false;
      }
   });

   searchInput.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
         searchBar.classList.remove('active');
         searchIcon.classList.remove('active');
         searchInput.classList.remove('active');
         active = false;
      }
   });


   let errorDomString1 = '<div>Please do not forget to enter a name</div>';
   let errorDomString2 = '<div style="color:rgb(158,3,3); line-height:150%; font-size:80%">SORRY WE DON\'T RECOGNIZE THIS STUDENT \n PLEASE TRY ANOTHER NAME</div > ';
   const errorDiv1 = document.createElement('div');
   const errorDiv2 = document.createElement('div');

   // // ==========================
   // // WHEN USER INPUT IS MISSING
   // // ==========================

   const filter = document.querySelector("#search-input");
   // const errorMessage = document.querySelector("#search > div > div");

   errorDiv1.innerHTML = errorDomString1;
   searchBar.append(errorDiv1);

   errorDiv1.style.display = 'none';
   // errorMessage.style.display = 'none';

   // // =======================
   // // USER INPUT IS NOT FOUND
   // // =======================
   errorDiv2.innerHTML = errorDomString2;
   searchBar.append(errorDiv2);
   //error message set to not display initially
   // errorDiv2.style.display = 'none';
   errorDiv2.firstChild.style.display = 'none';



   /*====================
      FILTER FUNCTION...
   /*====================*/
   function filterList() {
      // Declare variables
      let filter, i, name, txtValue;
      filter = searchInput.value.toUpperCase();
      // const children = [];
      // const remove = document.querySelector("#search > div.error-message > div");

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < eachStudentItem.length; i++) {
         name = eachStudentItem[i].getElementsByTagName("h3")[0];
         txtValue = name.textContent || eachStudentItem.innerText;

         // when an index does not exist the program recognizes it as -1,
         // so this condition gauges whether the value of the user's input
         // is equal to any of the indexes in the current object/array/list of students
         // $ if the value which in this case is the student's name than the code is executed
         // the following code toggles between the student's profile being displayed on DOM or not
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //when you get back a student's name...
            eachStudentItem[i].style.display = "";
         }
         else {
            // when you get no return results...
            eachStudentItem[i].style.display = 'none';
         }
      }
   }


   /*=====================================================
     SEARCH BAR INPUT CAPTURED HERE VIA RETURN/ENTER KEY...
   /*=====================================================*/

   // executing our desired function when the user releases a key (return || enter) on the keyboard
   searchInput.addEventListener("keydown", filterList, (event) => {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
         // Cancel the default action, if needed
         event.preventDefault();
         // capture the value of the input and trigger that input to be logged to the console for testing purposes
         //run filter function after user clicks return/enter key =" keydown"
         filterList();
         // no user input
         if (filter.value == "") {
            //show the message requesting user input a name/string
            errorDiv1.classList = 'error-message';
         } else {
            errorDiv1.classList = 'removedMessage';
         }
      }
   });

   searchInput.addEventListener("keyup", filterList, (event) => {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
         // Cancel the default action, if needed
         event.preventDefault();
         // capture the value of the input and trigger that input to be logged to the console for testing purposes
         //run filter function after user clicks return/enter key =" keydown"
         filterList();
         // no user input
         if (filter.value == "") {
            //show the message requesting user input a name/string
            errorDiv1.classList = 'error-message';
         } else {
            errorDiv1.classList = 'removedMessage';
         }
      }
   });



   /*====================
      RETURN HOME FUNCTION...
   /*====================*/
   // declare the logo variable and store in it the access to the logo image on the DOM
   const logo = document.querySelector("body > img");
   // the logo now prepared for user to it at anytime and reset the current window's url to the home page
   logo.addEventListener('click', () => {
      window.location.href = '/Users/johnhenry/Desktop/techDegree/unit2/techdegree-project-2/index.html'
   });

   console.log('All The DOM Content has load and you\'re ready to go!'); // <--- sanity check
}); // <---- conclusion of DOMContentLoaded function
