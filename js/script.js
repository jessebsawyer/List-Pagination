// Global Variables
const students = document.getElementsByClassName("student-item cf");
const pageHeader = document.querySelector('.page-header');
let page = 1;
let studentsPerPage = 10;


//Function to show only 10 students on the page
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
 
//Function to append number links at bottom of page
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
      const currentActive = document.querySelector('a')
      currentActive.className = 'active';
      a.addEventListener('click', (e) => {
         showPage(students, i);
         let current = document.getElementsByClassName('active');
         if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
         }
         e.target.className = 'active';
         
      });
   } 
}

//function that displays search bar 
const searchForm = () => {
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

   const deletePage = () => {
      const paginationDiv = document.getElementsByClassName('pagination')[0];
      const parent  = paginationDiv.parentNode;
      parent.removeChild(paginationDiv);
   }
   
   
   //Filter function
   const filterNames = () => {
      let filterValue = input.value.toUpperCase();
      let list = [];
      let noRes = document.createElement('h3');
      let h2 = document.getElementsByTagName('h2')[0];
      
      for (let i = 0; i < students.length; i++) {
         let a = students[i].getElementsByTagName('h3')[0];
         
         if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            list.push(students[i]);
         }else {
           students[i].style.display = 'none';
         }
      }

      
      if (list.length === 0) {
         h2.appendChild(noRes);
         noRes.textContent = "No results found...";
         noRes.style.fontSize = '12px';
         noRes.style.paddingTop = '20px';
         console.log(noRes);
      }

      if (list.length >= 1) {
         noRes.style.display = 'none';
      }
       
         
      
      

      deletePage();
      showPage(list, page);
      appendPageLinks(list);
   }

   //Call event listeners.
   input.addEventListener('keyup', (e) => {
      filterNames();
   })
   button.addEventListener('click', (e) => {
      filterNames();
   })
}   

//Calling the main functions
showPage(students, page);
appendPageLinks(students);
searchForm();