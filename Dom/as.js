//  2211985030

//task 1
let p = document.querySelector('p');
console.log(p);
let arr = p.innerText.split(' ');
let newarr = arr.map(ele => {
    if (ele.length > 8) {
        return `<span style=background-color:yellow;>${ele}</span>`;
    }
    else
    return ele;
}).join(' ');
p.innerHTML=newarr;

//task 2
let body=document.querySelector('body')
let a=document.createElement('a');
a.href="https://forcemipsum.com/";
a.innerText="this is link to forcem ipsum"
body.appendChild(a);

// task 3

let newp=p.innerText.split('. ').join("<br>");
p.innerHTML=newp;

//task 4

let count = p.innerText.split(' ').length;
let h1=document.querySelector('h1');
//h1.insertAdjacentHTML('afterend',`<span>${count}</span>`);
let h2=document.createElement('h2');
h2.innerText=count;
h1.append(h2)

//task 5

// let emj1=p.innerHTML.split('?').join('🤔');
// p.innerHTML=emj1;

// let emj2=p.innerHTML.split('!').join('😲');
// p.innerHTML=emj2;

//another method 
const str=p.innerText;
p.innerHTML=str.replaceAll('?','🤔').replaceAll('!','😲');