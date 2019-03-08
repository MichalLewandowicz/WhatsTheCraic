// Navigation Bar

function openNav() {
  document.getElementById("myNav").style.width = "75%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// function navFunction() {
//   var x = document.getElementById("burgerBar");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else {
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// function w3_open() {
//     document.getElementById("burgerBar").style.display = "block";
// }
// function w3_close() {
//     document.getElementById("burgerBar").style.display = "none";
// }

// Select BOX
// var x, i, j, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("custom-select");
// for (i = 0; i < x.length; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   /* For each element, create a new DIV that will act as the selected item: */
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /* For each element, create a new DIV that will contain the option list: */
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < selElmnt.length; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /* When an item is clicked, update the original select box,
//         and the selected item: */
//         var y, i, k, s, h;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < s.length; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             for (k = 0; k < y.length; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
//
// function closeAllSelect(elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var x, y, i, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   for (i = 0; i < y.length; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < x.length; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
//
// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);
//
// // Populate selectbox
// (function() {
//   var county  = document.getElementById('county');// County select box
//   var town = document.getElementById('town');        // town select box
//   var cavan = {                                      					// Object stores cavan
//     cavan: 'Cavan',
//     bailieborough: 'Bailieborough',
//     kingscourt: 'Kingscourt',
//     virginia: 'Virginia'
//   };
//   var offaly = {                                  				// Store roscommon
//     banagher: 'Banagher',
//     birr: 'Birr',
//     shannonbridge: 'Shannonbridge',
//     tullamore: 'Tullamore'
//   };
//   var roscommon = {                                  				// Store roscommon
//     athleague: 'Athleague',
//     boyle: 'Boyle',
//     castlerea: 'Castlerea',
//     roscommon: 'Roscommon'
//   };
//     var westmeath = {                                  				// Store westmeath
//     athlone: 'Athlone',
//     kilbegan: 'Kilbegan',
//     moate: 'Moate',
//     horseleap: 'Horseleap'
//   };
//
//   // WHEN THE USER CHANGES THE select-custom-20 SELECT BOX
//   addEvent(county, 'change', function() {
//     if (this.value === 'choose') {                // No selection made
//       town.innerHTML = '<option>Please choose a county first</option>';
//       return;                                     // No need to proceed further
//     }
//     var towns = gettowns(this.value);           // Select the right object
//
//     // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
//     var options = '<option>Please choose a town</option>';
//     var key;
//     for (key in towns) {                     // Loop through towns
//       options += '<option value="' + key + '">' + towns[key] + '</option>';
//     } // If an option could contain a quote, key should be escaped (see pXXX)
//     town.innerHTML = options;                    // Update select box
//   });
//
//   function gettowns(county) {
//     if (county === 'cavan') {            // If county is cavan
//       return cavan;                             // Return cavan object
//     } else if (county === 'roscommon') {  // If county is roscommon
//       return roscommon;                          // Return roscommon object
//     } else if (county === 'offaly') {
//       return offaly;
//     } else if (county === 'westmeath') {
//       return westmeath;
//     }
//   }
// }());
//
// // Helper function to add an event listener
// function addEvent (el, event, callback) {
//   if ('addEventListener' in el) {                  // If addEventListener works
//     el.addEventListener(event, callback, false);   // Use it
//   } else {                                         // Otherwise
//     el['e' + event + callback] = callback;         // CreateIE fallback
//     el[event + callback] = function () {
//       el['e' + event + callback](window.event);
//     };
//     el.attachEvent('on' + event, el[event + callback]);
//   }
// }
//
// // Helper function to remove an event listener
// function removeEvent(el, event, callback) {
//   if ('removeEventListener' in el) {                      // If removeEventListener works
//     el.removeEventListener(event, callback, false);       // Use it
//   } else {                                                // Otherwise
//     el.detachEvent('on' + event, el[event + callback]);   // Create IE fallback
//     el[event + callback] = null;
//     el['e' + event + callback] = null;
//   }
// }

var countyTown = {};
countyTown['cavan'] = ['Cavan', 'Bailieborough', 'Kingscourt', 'Virginia'];
countyTown['offaly'] = ['Banagher', 'Birr', 'Shannonbridge', 'Tullamore'];
countyTown['roscommon'] = ['Athleague', 'Boyle', 'Castlerea', 'Roscommon'];
countyTown['westmeath'] = ['Athlone', 'Kilbegan', 'Moate', 'Horseleap'];

function ChangeCountyList() {
  var countyList = document.getElementById("county");
  var townList = document.getElementById("town");
  var selCounty = countyList.options[countyList.selectedIndex].value;
  while (townList.options.length) {
    townList.remove(0);
  }
  var towns = countyTown[selCounty];
  if (towns) {
    var i;
    for (i = 0; i < towns.length; i++) {
      var town = new Option(towns[i], i);
      townList.options.add(town);
    }
  }
}

// Display selected town
function displayTown() {
  var x = document.getElementById("town");
  var i = x.selectedIndex;
  document.getElementById("townSel").innerHTML = x.options[i].text;
}
