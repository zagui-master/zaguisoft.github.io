export const calculateFinalPriceInShoppingCart=()=>{const e=document.getElementById("conten_final_price_cart"),t=function(e){return e.reduce(((e,t)=>e+parseFloat(t.course_price)),0)}(function(){const e=`${JSON.parse(sessionStorage.getItem("current_user"))}`;return JSON.parse(localStorage.getItem(e))||[]}());e.innerText="Total $ "+Math.round(100*t)/100};calculateFinalPriceInShoppingCart();