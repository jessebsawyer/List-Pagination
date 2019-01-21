// Global Variables
const list = document.getElementsByClassName("student-list");
const students = document.getElementsByClassName("student-item cf");



//Function to show only 10 students on the page.
const showPage = (list, page) => {
   for (let i = 0; i < list.length; i++) {
      if ( i >= 0 && i <= 9 ) {
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
  
for (let i = 1; i < pageNum.length; i++) {
   const li = document.createElement("li");
   const a = document.createElement("a");
   a.textContent = i; 
   ul.appendChild(li); // li is not showing up in the DOM.
   li.appendChild(a); 
   a[i].addEventListener('click', (e) => {
      showPage(students, i);
      let current = document.getElementsByClassName(".active"); // I've selected the active class but not sure where to go from here.
      
   });
  } 
  
}

//Calling the two functions.
showPage(students, 1);
appendPageLinks(students);