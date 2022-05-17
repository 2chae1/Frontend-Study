const nav = document.querySelectorAll('.tab_btn');
const cont = document.querySelectorAll('.tab_cont');

let tabCount = nav.length;
const h1 = document.getElementsByTagName('h1');
console.log(h1);
h1[0].innerHTML = `Study With Me : ${tabCount}`; 

// Tab Function
nav.forEach((n) => {
    n.addEventListener('click', (e) => {
        if(!e.target.classList.contains('tab_btn')) return;
    
        const selectedTab = e.target.dataset.id;
    
        // Change Content
        cont.forEach((c) => {
            if(c.id === selectedTab)
                c.classList.remove("hidden");
            else
                c.classList.add("hidden");
        });     
        
        // Change Button
        nav.forEach((n) => {
            if(n==e.target) 
                n.classList.add("clicked");
            else
                n.classList.remove("clicked");
        });
    });
});
