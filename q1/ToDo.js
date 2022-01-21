// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j;
          for (j = 0; j < close.length; j++) {
          close[j].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
}
let items =document.getElementById("leftItems");
let x = document.getElementById("myUL").childElementCount;
let numItems = document.querySelectorAll('.checked').length;
items.innerText=`${x-numItems} items left`
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    numItems++;
    items.innerText=`${x-numItems} items left`
  }
}, false);
// leftItems


// Create a new list item when clicking on the "Add" button
function newElement() {
          var li = document.createElement("li");
          var inputValue = document.getElementById("myInput").value;
          var t = document.createTextNode(inputValue);
          li.appendChild(t);
          if (inputValue === '') {
                    alert("You must write something!");
          } else {
                    document.getElementById("myUL").appendChild(li);
          }
          document.getElementById("myInput").value = "";

          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);

          for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
          }
}
//_________________________________________
// Get the input field
let input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
       newElement();
  }
});
//change mode
function changeCSS(cssFile, cssLinkIndex) {

  let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
  let oldhref = oldlink.getAttribute("href")
  let newlink = document.createElement("link");
  if(oldhref == "/q1/assets/lightMode.css"){
    cssFile ="/q1/assets/darkMode.css"
  }
  else{
    cssFile="/q1/assets/lightMode.css"
  }
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}



