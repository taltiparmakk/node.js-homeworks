// FS File System Modülü


// Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.



// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.

const fs = require('fs');
//oluşturma
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) =>{
 if (err) console.log (err);
});
 //okuma
fs.readFile('employees.json', 'utf8', (err, data) =>{
    if (err) console.log(err);
    console.log(data);
})
// Güncelleme
fs.appendFile('employees.json', '\n "name": "Employee 2 Name", "salary": 3000', 'utf8', (err)=>{
    if (err) console.log(err);
});
//silme
fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("Employees file unliked");
  });