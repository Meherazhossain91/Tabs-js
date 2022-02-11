
// get Element


const main_tab = document.querySelectorAll('.main-tab .tab-menu ul a');
const tab_pane_all = document.querySelectorAll('.main-tab .tab-pane');




main_tab.forEach(item => {

    item.addEventListener('click',function(e){
        e.preventDefault();

         
        main_tab.forEach(item =>{
            item.classList.remove('active');
        });
        item.classList.add('active');
        const tab_pane= document.querySelector(this.getAttribute('href'));

        tab_pane_all.forEach(item =>{

            item.classList.remove('active');
        });

         item.classList.add('active');
        
    });

});































  
// main_tab.forEach(item =>{


//     item.addEventListener('click',function(e){
//         e.preventDefault();

//         tab_menu.forEach(item => {
        
//             item.classList.remove('active');
//         })
//         item.classList.add('active');
        
//         const tab_pane = document.querySelector(this.getAttribute('herf'));  
//         tab_pane_all.forEach(item => {
//             item.classList.remove('active');
//         })  
//         tab_pane.classList.add('active');     
//     })
// })

main_tab.forEach(item => {

    item.classList.remove('active');
})