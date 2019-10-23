function loadtable(nl, data) { 
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { 
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k];  
    });
    nl.appendChild(tr);
  })
}

function myFunction() {
  var filter = document.querySelector('#city').value.toUpperCase();
  var trs = document.querySelectorAll('#table tr:not(.header)');
  trs.forEach(tr => tr.style.display = [...tr.children].find(td => td.innerHTML.toUpperCase().includes(filter)) ? '' : 'none');
}

var tbody = document.querySelector("#table tbody");
loadtable(tbody, data);








