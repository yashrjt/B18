// document.getElementById('para').addEventListener('click',function(e){
// console.log(e.target.innerHTML);
// })


$('#para').click((e)=>{
    console.log(e.target.innerHTML);
})


$('button').click((e)=>{
  $('body').append(" <div>THis is created using JS</div>") ;
})

//AJAX

//Javascript
//https://dog.ceo/api/breeds/list/all

//fetch api

// fetch('https://dog.ceo/api/breeds/list/all')
// .then((res)=>{
// console.log("res", res.json())

// })
// .catch((err)=>{
// console.log("err", err)
    
// })


//Jquery ajax

$.ajax({
    method:'get',
    url:'https://dog.ceo/api/breeds/list/all',
    dataType:'json',
    success:(res)=>{
    console.log("res", res)

    },
    error:(err)=>{
    console.log("err", err)
        
    }

})