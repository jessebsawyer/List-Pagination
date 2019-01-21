// Global Variables
const list = document.getElementsByClassName("student-list");
const students = document.getElementsByClassName("student-item cf");



//Function to show only 10 students on the page.
const showPage = (list) => {
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
  
for (let i = 1; i <= pageNum; i++) {
   const li = document.createElement("li");
   const a = document.createElement("a");
   a.textContent = i; 
   a.href = "#";
   ul.appendChild(li); 
   li.appendChild(a); 
   li.addEventListener('click', (e) => {
      showPage(students);
   });
  } 
  
}

//Calling the two functions.
showPage(students);
appendPageLinks(students);