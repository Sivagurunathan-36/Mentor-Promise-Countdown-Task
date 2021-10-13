// setTimeout(function() {
//     document.getElementById("content1").innerText = 10;
//     setTimeout(function() {
//         document.getElementById("content1").innerText = 9;
//         setTimeout(function() {
//             document.getElementById("content1").innerText = 8;
//             setTimeout(function() {
//                 document.getElementById("content1").innerText = 7;
//                 setTimeout(function() {
//                     document.getElementById("content1").innerText = 6;
//                     setTimeout(function() {
//                         document.getElementById("content1").innerText = 5;
//                         setTimeout(function() {
//                             document.getElementById("content1").innerText = 4;
//                             setTimeout(function() {
//                                 document.getElementById("content1").innerText = 3;
//                                 setTimeout(function() {
//                                     document.getElementById("content1").innerText = 2;
//                                     setTimeout(function() {
//                                         document.getElementById("content1").innerText = 1;
//                                         setTimeout(function() {
//                                             document.getElementById("content1").innerText = "";
//                                             document.getElementById("content2").innerText = "happy Independence day".toUpperCase();
//                                         }, 1000);
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 0);

// function countDown(i) {
//     return promise = new Promise((resolve, reject) => {

//         console.log(i--);

//         if (i > 0) {
//             setTimeout(() => {
//                 countDown(i).then(resolve);
//             }, 1000);
//         } else {
//             resolve('Happy Independece Day');
//         }

//     });

// }



const msg = (count) =>
    new Promise((resolve, reject) => {
        // let count = 10;
        if (count >= 1) {
            setTimeout(() => {
                document.querySelector(".countdown").innerText = count;
                resolve(count);
            }, 1000);
        } else {
            // reject
            setTimeout(() => {
                document.querySelector(".countdown").innerText = " Happy Independence Day ";
                reject("completed");
            }, 1000);
        }

    });

msg(9) //ct is->  9  --ct -->8
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .catch((err) => console.log(err));