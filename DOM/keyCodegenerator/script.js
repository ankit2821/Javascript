const key = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  key.innerHTML = `
  <div>
  <table>
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>Key name</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table></div>
  
    `;
});
