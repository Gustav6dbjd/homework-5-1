


 let myMap = new Map();


 myMap.set('name', 'Alice');
 myMap.set('age', 30);
 myMap.set('city', 'New York');


 let index = myMap.get('name');
 console.log(`Имя: ${index}`); 


 let hasAge = myMap.has('age');
 console.log(`Есть ли ключ 'age'? ${hasAge}`); 


 myMap.delete('city');
 console.log(`Удалили ключ 'city'. Текущий размер Map: ${myMap.size}`); 


 myMap.forEach((value, key) => {
     console.log(`${key}: ${value}`);
 });


 myMap.clear();
 console.log(`Размер Map после очистки: ${myMap.size}`);






 const mySet = new Set();

 mySet.add('Alice');
 mySet.add(30);
 mySet.add('New York');


 const hasAlice = mySet.has('Alice');
 console.log(`Содержит ли Set 'Alice'? ${hasAlice}`); 

 mySet.delete('New York');
 console.log(`Удалили 'New York'. Текущий размер Set: ${mySet.size}`); 

 mySet.forEach(value => {
    console.log(value);
 });


 mySet.clear();
 console.log(`Размер Set после очистки: ${mySet.size}`);
 