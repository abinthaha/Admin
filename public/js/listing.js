let ItemArray = [{
    id: "tile_item1",
    name: 'Air Cooler',
    img_path: './assets/images/items/air-cooler.png',
    active: true
}, {
    id: "tile_item2",
    name: 'Air Cooler1',
    img_path: './assets/images/items/air-cooler.png',
    active: false
}, {
    id: "tile_item3",
    name: 'Air Cooler1',
    img_path: './assets/images/items/air-cooler.png',
    active: false
}, {
    id: "tile_item4",
    name: 'Air Cooler1',
    img_path: './assets/images/items/air-cooler.png',
    active: true
}, {
    id: "tile_item5",
    name: 'Air Cooler1',
    img_path: './assets/images/items/air-cooler.png',
    active: false
}, {
    id: "tile_item6",
    name: 'Air Cooler1',
    img_path: './assets/images/items/air-cooler.png',
    active: false
}]
let activeItemsArray = [];
$(document).ready(function() {
    ItemArray.forEach(function(item) {
        let checkItem = '<span class="active-check"></span>'
        let itemImg = '<span class="item-img" style="background-image: url(' + item.img_path + ')"></span>'
        let itemName = '<span class="item-name" title="' + item.name + '"><a href="edit.html">' + item.name + '</a></span>'
        let activeClass = item.active ? ' active' : ''
        item.active && activeItemsArray.push(item.id)
        $('#tile-view ul').append('<li id=' + item.id + ' class="tile-item' + activeClass + '">' + checkItem + itemImg + itemName + '</li>')
    })

    $('#tile-view').on('click', '.tile-item', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            activeItemsArray.push($(this).attr('id'));
        } else {
            let index = activeItemsArray.indexOf($(this).attr('id'));
            if (index !== -1)
                activeItemsArray.splice(index, 1)
        }
    })
})
