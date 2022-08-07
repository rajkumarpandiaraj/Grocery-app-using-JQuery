
$(document).ready(function(){
    let groceryList = JSON.parse(localStorage.getItem('grocery'))
    if(groceryList == null){
        localStorage.setItem('grocery', JSON.stringify([]))
    }else{
        renderToUI(groceryList)
    }
})



$('.form').on('submit',function(e){
    e.preventDefault();
    let groceryList = JSON.parse(localStorage.getItem('grocery'))
    groceryList.push($('.form').serializeArray()[0])
    localStorage.setItem('grocery',JSON.stringify(groceryList))
    renderToUI($('.form').serializeArray())
    $('.grocery').val('')

})

function renderToUI(groceryList){
    $.each(groceryList,function(index, value){
        $('.list').append(`<li><span class="grocery-item">${value.value}</span>
    <span class="grocery-item-delete">X</span></li>`)
    })

    $('.grocery-item-delete').each(function(){
        $(this).click(function(){
            $(this).parent().remove()
            console.log(this);
            let groceryList = JSON.parse(localStorage.getItem('grocery'))
            console.log(groceryList);
            let filtered = groceryList.filter((item) => item.value != $(this).siblings().text())
            localStorage.setItem('grocery',JSON.stringify(filtered))
        })
    })

}

