let myReq = new XMLHttpRequest();
myReq.open("GET", "newsletter.json", true);
myReq.send();
myReq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    console.log(data.subscribers);
    printTable(data.subscribers);
  } else {
    console.log("ololo");
  }
}

function printTable(m) {
  //console.log(m[0].index);
  for (let i = 0; i < m.length; i++) {
    m[i].index = `<td>${m[i].index}</td>`;
    m[i].name = `<td>${m[i].name}</td>`;
    m[i].surname = `<td>${m[i].surname}</td>`;
    m[i].email = `<td>${m[i].email}</td>`;
    //console.log(m[i].index);
    m[i] = `<tr>${m[i].index}${m[i].name}${m[i].surname}${m[i].email}</tr>`
  }
  result = "<table>" + m.join("") + "</table>";
  //console.log(m);

  document.getElementById("main").innerHTML = result;
}