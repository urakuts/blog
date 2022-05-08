const list = document.querySelector(".list-filter"),
    items = document.querySelectorAll('.mn-ctn-blog'),
    listItem = document.querySelectorAll('.lits-item')
function filter (){
    list.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        const target = event.target
        if (target.classList.contains('list-item')){
            listItem.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('.active');
        }
        switch(targetId){
            case 'all':
                getItem('mn-ctn-blog')
                break;
            case 'sea':
               getItem(targetId)
            break;
            case 'euro':
               getItem(targetId)
            break;
            case 'nature':
               getItem(targetId)
            break;
            case 'animals':
               getItem(targetId)
            break;
            case 'air':
               getItem(targetId)
            break;
        }
    })
}
filter()

function getItem(className){
    items.forEach(item=>{
        if(item.classList.contains(className)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}