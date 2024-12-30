let quote = document.querySelector('.quote');
let by = document.querySelector('.by');

let quotes = [
    {
      
        quote : "We cannot solve problems with the kind of thinking we employed when we came up with them",
        by : "—Albert Einstein"
    },
    {
        
        quote : "Learn as if you will live forever, live like you will die tomorrow.",
        by : "—Mahatma Gandhi"
    },
    {
       
        quote : "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        by : "—Mark Twain"
    },
    {
 
        quote : "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
        by : "—Eleanor Roosevelt"
    },
    {
 
        quote : "When you change your thoughts, remember to also change your world",
        by : "—Norman Vincent Peale"
    },
    {
 
        quote : "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        by : "— Winston Churchill"
    },
    {
 
        quote : "Don’t let yesterday take up too much of today",
        by : "— Will Rogers"
    },
    {
 
        quote : "Goal setting is the secret to a compelling future.",
        by : "— Tony Robbins"
    },
    {
 
        quote : "I never dreamed about success. I worked for it.",
        by : "—Estee Lauder "
    },
    {
 
        quote : "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        by : "— Unknown"
    },
    {
 
        quote : "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        by : "— Steve Jobs"
    },
   
]


let btn = document.querySelector('#btn1').addEventListener('click',() =>
{
    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random].quote)
    quote.innerText = quotes[random].quote;
    by.innerText = quotes[random].by;
})