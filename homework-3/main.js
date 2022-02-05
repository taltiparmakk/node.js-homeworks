const circleArea = (r) =>{
    const PI = Math.PI;
    const result = PI * r**2;
    console.log(`Dairenin alanı ${result}metrekaredir`)
}

const circleCircumference = (r) => {
    const PI = Math.PI;
    result = 2*PI*r
    console.log(`Dairenin Çevresi ${result} santimdir`)
}
 export {
     circleArea, 
     circleCircumference

 }