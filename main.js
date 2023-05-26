let acc = document.getElementsByClassName('accordion');

//classname이라고 했으니까 .찍지말고 부를것

console.log(acc[1])
//console.log(acc.length)

for(let i = 0; i<acc.length;i++){
  acc[i].addEventListener('click',function(){
    this.classList.toggle('active')
  })
}