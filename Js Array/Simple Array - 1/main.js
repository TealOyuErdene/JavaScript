let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
//1. console.log() ашиглан array хэвлэх
console.log(itCompanies)
console.log ('\n');


//2. Array дахь компаниудын length хэвлэх
console.log(itCompanies.length)
console.log ('\n');


//3. Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length -1])

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


//4. Компани бүрийг хэвлэх
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}
console.log ('\n');


//5. Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}
console.log ('\n');


//6. Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.
console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд.`)