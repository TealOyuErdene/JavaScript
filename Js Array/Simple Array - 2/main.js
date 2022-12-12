//1 Array - аас эхний 3 компанийг хайчилж ав
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
for(let i = 0; i < 3; i++){
    console.log(itCompanies[i])
}
console.log ('\n');


//2 Array - аас сүүлийн 3 компанийг хайчилж ав
for(let i = itCompanies.length-3; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}
console.log ('\n');


//3 Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
  let k = ''
if(itCompanies.length % 2 == 0){
    k = itCompanies.length / 2
    console.log(k)
}
if(itCompanies.length % 2 == 1){
    k = itCompanies.length / 2
    console.log(itCompanies[k - 1 + 0.5])
}
console.log ('\n');


//4  Эхний мэдээллийн технологийн компанийг array - аас хас
for(let i = 1; i <= itCompanies.length; i++){
    console.log(itCompanies[i])
}

//5  Сүүлийн мэдээллийн технологийн компанийг array - аас хас
for(let i = 0; i < itCompanies.length - 1; i++){
    console.log(itCompanies[i])
}