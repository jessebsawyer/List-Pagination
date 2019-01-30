// Global Variables
const students = document.getElementsByClassName("student-item cf");
const pageHeader = document.querySelector('.page-header');
let page = 1;
let studentsPerPage = 10;




//Function to show only 10 students on the page.
const showPage = (list, page) => {
   const highRange = page * studentsPerPage - 1;
   const lowRange = highRange - 9;
   for (let i = 0; i < list.length; i++) {
      if ( i >= lowRange && i <= highRange ) {
         list[i].style.display = 'block';
      }else {
         list[i].style.display = 'none';
      }
   } 
}
 
//Function to append number links at bottom of page.
const appendPageLinks = (list) => {
   const pageNum = Math.ceil(list.length/10);
   const firstDiv = document.querySelector('.page');
   const div = document.createElement("div");
   const ul = document.createElement("ul");
   firstDiv.appendChild(div);
   div.classList.add("pagination");
   div.appendChild(ul);      
  
   for (let i = 1; i <= pageNum; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = i; 
      a.href = "#";
      ul.appendChild(li); 
      li.appendChild(a); 
      li.addEventListener('click', (e) => {
         showPage(students, i);
      });
   } 
}

//function that displays search bar 
const searchForm = (list, name) => {
   const searchDiv = document.createElement("div");
   const input = document.createElement("input");
   const button = document.createElement("button");
   pageHeader.appendChild(searchDiv);
   searchDiv.className = ("student-search");
   searchDiv.appendChild(input);
   searchDiv.appendChild(button);
   input.type = 'text';
   input.placeholder = "Search"
   button.type = 'submit';
   button.textContent = "SUBMIT";

   //Filter function
   const filterNames = () => {
      let filterValue = input.value.toUpperCase();
      for (let i = 0; i < students.length; i++) {
         let a = students[i];
         if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            showPage(a, 1);
            appendPageLinks(a);
         }else {
           students[i].style.display = 'none';

         }
      }
   }
 
   input.addEventListener('keyup', (e) => {
      filterNames();
   })
   button.addEventListener('click', (e) => {
      filterNames();
   })
}   

   
   
   


//Calling the two functions.
showPage(students, page);
appendPageLinks(students);
searchForm(students);