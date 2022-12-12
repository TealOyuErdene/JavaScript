// Array дотор гараас орсон үг хэдэн ширхэг орсныг тоолдог алгоритм бичнэ үү. 
// (Шаардлага: том жижиг үсэг ялгахгүй тоолдог байх)
// Input: нүүрc
// Output: нүүрс гэдэг үг 2 орсон байна.

let data = [ 'Zasgiin', 'gazart', '6.4', 'say', 'tonn', 'nuurs', 'aldagdsan', 'geh', 'medeelel', 'ireegui', 'baina', 'Bodit', 'baidal', 'iim', 'ih', 'hemjeenii', 'NUURS', 'aldagdsan', 'geh', 'asuudal', 'ergelzeetei', 'baina', 'Huuli', 'hynaltiin', 'baiguullaga', 'hynalt', 'shalgaltiin', 'ajil', 'yvuulj', 'baina'];


let ug = prompt('Ugee oruul')
let count = 0
for(let i = 0; i < data.length; i++){
    if(ug.toLowerCase() == data[i].toLowerCase()){///  Nuurs   nuurs  toLowrCase() --- >   nuurs  == nuurs
        count++
    }
}
console.log(`${ug} gedeg ug ni ${count} udaa baina`)
