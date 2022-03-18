// function slowBeansAdd() {
//   return new Promise(function (resolve, reject) {});
// }

//! slowMath
//   .add(6, 2)
//   .then((beans) => {
//     console.log(`Step 1: ${beans}`);
//     return slowMath.multiply(beans, 2);
//   })
//   .then((carrot) => {
//     console.log(`Step 2: ${carrot}`);
//     return slowMath.divide(carrot, 4);
//   })
//   .then((potato) => {
//     console.log(`Step 3: ${potato}`);
//     return slowMath.subtract(potato, 3);
//   })
//   .then((greemBeam) => {
//     console.log(`Step 4: ${greemBeam}`);
//     return slowMath.add(greemBeam, 98);
//   })
//   .then((beet) => {
//     console.log(`Step 5: ${beet}`);
//     return slowMath.remainder(beet, 2);
//   })
//   .then((parsnip) => {
//     console.log(`Step 6: ${parsnip}`);
//     return slowMath.multiply(parsnip, 50);
//   })
//   .then((broccoli) => {
//     console.log(`Step 7: ${broccoli}`);
//     return slowMath.remainder(broccoli, 40);
//   })
//   .then((eggplant) => {
//     console.log(`Step 8: ${eggplant}`);
//     return slowMath.add(eggplant, 32);
//   })
//   .then((turnip) => {
//     console.log(`The Final Result is: ${turnip}`);
//   })
//   .catch((error) => {
//     console.log(`Ervin Howell dropped the bucket, ${error}`);
//!   });

//.then.multiply(beans, 4)
//.then((beans) => console.log(beans));

async function doMath() {
  try {
    const beans = await slowMath.add(6, 2);
    console.log(`async Step 1: ${beans}`);
    const carrot = await slowMath.multiply(beans, 2);
    console.log(`async Step 2: ${carrot}`);
    const potato = await slowMath.divide(carrot, 4);
    console.log(`async Step 3: ${potato}`);
    const greemBeam = await slowMath.subtract(potato, 3);
    console.log(`async Step 4: ${greemBeam}`);
    const beet = await slowMath.add(greemBeam, 98);
    console.log(`async Step 5: ${beet}`);
    const parsnip = await slowMath.remainder(beet, 2);
    console.log(`async Step 6: ${parsnip}`);
    const broccoli = await slowMath.multiply(parsnip, 50);
    console.log(`async Step 7: ${broccoli}`);
    const eggplant = await slowMath.remainder(broccoli, 40);
    console.log(`async Step 8: ${eggplant}`);
    const turnip = await slowMath.add(eggplant, 32);
    console.log(`The Final Result is: ${turnip}`);
  } catch (error) {
    console.log(`Ervin Howell caught these hands but not the bucket ${error}`);
  }
}

doMath();

// async function doMath2() {
//   let beans = await doMath();
//   console.log(beans);
// }
