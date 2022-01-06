console.log('hellow world');

let backpack = []

    // strings
backpack.push ('sword');
backpack.push ('shield');
backpack.push ('potion');

// console.log(backpack)

let onBelt = backpack.splice(0, 1);
    

let furCoat = 'fur-coat';
    backpack.push(furCoat);

    backpack.pop();

let itemCount = backpack.length
    backpack.push("flint","blanket","knife","toothbrush")

let pouchbag = backpack.splice(3, 3)


for (let i = 0; i< 3; i++) {
    console.log(backpack[i])
}
  console.log('-----------------')

for (let i = 0; i< pouchbag.length; i++) {
    console.log(pouchbag[i])
}
  console.log('-----------------')

    console.log('Backpack:' , backpack)
    console.log('Belt:' , onBelt)
    console.log('PouchBag:' , pouchbag)
    console.log('Equip:', pouchbag[1])