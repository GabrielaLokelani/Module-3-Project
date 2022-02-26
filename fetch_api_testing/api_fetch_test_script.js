let pp_award_sel_theme = "motivation";
const awardsDIV = document.getElementById('game_award');
console.log(awardsDIV);
awardsDIV.innerHTML = "";

// Cat API

fetch("https://api.thecatapi.com/v1/images/search?q=appid=ad5e525a-6994-4f91-a7fd-dcb8c84ef9c8") 
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then((data) => {
        
        console.log(data)
        const api_cats = data;
        console.log(api_cats);

        api_cats.forEach(cat => {
            console.log(cat.url);
            let tempCatHTML = `<div class="text-center"> 
            <img style="height:100vh; max-width:95%; object-fit: contain;" src="${cat.url}">
            </div>`;

            awardsDIV.innerHTML += tempCatHTML;
            pp_award_sel_theme = api_cats;
        })
    });
________________________________________________
// Space API

// fetch("https://api.nasa.gov/planetary/apod?api_key=5akgAwJqTYMb0w4loSNz2Swxda8NERKSonOvOWQx")
//     .then((res) => {
//         console.log(res)
//         return res.json()
//     })
//     .then((data) => {
        
//         // console.log(data)
//         const api_space = data;
//         // console.log(api_space);

//         // api_space.forEach(space_image => {
//             console.log(api_space.hdurl);
//             let tempSpaceHTML = `<div class="text-center"> 
//             <img style="height:100vh; max-width:95%; object-fit: contain;" src="${api_space.hdurl}">
//             </div>`;

//             awardsDIV.innerHTML += tempSpaceHTML;
//             pp_award_sel_theme = api_space;
//         // })
//     });
// // ____________________________________________
// Motivation API

// fetch("https://type.fit/api/quotes")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         let index = 0;
//         document.addEventListener("click", e => {
        
//         let api_motivation = data.pop();
//         //   let api_motivation = (data[index]);
//         // //   console.log(Object.values(data[0]));
//         // //   console.log(api_motivation);
//             console.log(api_motivation.text);
//             console.log(api_motivation.author);
//                 // let quote = api_motivation.text;
//                 // let author = api_motivation.author;
//         // //         console.log(quote);
//         // //         console.log(author);

//         // // //   data.forEach((quote) => {
//         // // //     console.log(quote.text);
//         // // //     console.log(quote.author);
//         // // //    pp_award_sel_theme = api_motivation;  

//         let tempQuoteHTML = "";
//         tempQuoteHTML = `
//         <div class="h-90 text-center container-fluid border-start rounded-3 border p-2 mb-5">
//             <div class="h-75 shadow p-1 mb-5 bg-body roundedtext-center">
//                 <h2>${api_motivation.text}</2>
//                 <h4> ~ ${api_motivation.author}</h4>      
//             </div>
//         </div>`;

//         // api_motivation.addEventListener("click", e => {
//         //     data.pop();
//         // });

//         awardsDIV.innerHTML += tempQuoteHTML;
//         // awardsDIV.innerHTML = "";
//         pp_award_sel_theme = api_motivation;
        
//         // pp_award_sel_theme.addEventListener
//         //   });
//         // data.pop();
//         // index = index++;
//         // api_motivation = data.pop();
//         tempQuoteHTML = "";
//     }, {capture: true});
// });