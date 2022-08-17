// 6. Click vào btn ---> Biến thẻ div thành hình tròn
//    Click lại lần nữa ---> Biến thẻ trở lại hình dáng ban đầu



// let div=document.getElementById("exercise");
// let btn = document.getElementById("btn");
// btn.onclick = function () {
//     if (div.style.borderRadius!=="50%") {
//         div.style.borderRadius="50%";
//     } else {
//         div.style.borderRadius=0;
        
//     }
// }


// bai1
// 1. click vaoo btn---> bien mat the div
    //  click lai lan nua thi hien the div


    // let div = document.getElementById('exercise');
    // let btn=document.getElementById('btn');
  
// cah1
// btn.onclick= function(){
//     if(div.style.display !=="none"){
//         div.style.display="none";
//     }else{
//         div.style.display="block";
//     }
// }
// cach2
// btn.onclick= function(){
//         if(div.style.opacity !=="0"){
//             div.style.opacity="0";
//         }else{
//             div.style.opacity="1"
//         }
//     }



// 4. Click vào btn ---> Giảm fontSize của thẻ div đi 1px
// let div=document.getElementById('exercise');
// let btn = document.getElementById('btn');
// let count =0;
// btn.onclick = function () {
//     count=count-1;
//     div.style.fontSize =`${count+100}px`;
// }


// 3. Click vào btn ---> Tăng fontSize của thẻ div lên 1px

// let div=document.getElementById('exercise');
// let btn = document.getElementById('btn');
// let count =0;
// btn.onclick = function () {
//     count=count+1;
//     div.style.fontSize =`${count+20}px`;
// }


// baitap :doi vi tri
// let div=document.getElementById('exercise1');
// let div2=document.getElementById('exercise');
// let btn = document.getElementById('btn');
// btn.onclick = function () {
// let contentTemp="";
// let bgColorTemp="";

// // getComputedStyle( lay ham style set ben css)
// let style = getComputedStyle(div);
// let style2= getComputedStyle(div2);


// bgColorTemp =style.backgroundColor;
// div.style.backgroundColor =style2.backgroundColor;
// div2.style.backgroundColor = bgColorTemp;

// contentTemp=div.innerHTML;
// div.innerHTML=div2.innerHTML;
// div2.innerHTML=contentTemp;
// }




//  5. Click vào btn ---> Mỗi lần click đổi 1 màu ngẫu nhiên
//  cho thẻ div


// let div=document.getElementById('exercise');
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//   let r = Math.floor((Math.random())*256) ;
//   let g = Math.floor((Math.random())*256)  ;
//   let b = Math.floor((Math.random())*256) ;
//   console.log(r,g,b);
//   let color = `rgb(${r},${g},${b})`;

//   div.style.backgroundColor = color;
// }