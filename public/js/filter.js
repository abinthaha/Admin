$(".dropdown-menu .dropdown-item").click(function() {
    var selText = $(this).text();
    let btnGroupName = $(this).parents('.btn-group').attr('data-groupname'); //Which can be used to idenify the group.
    let id = $(this).attr('id'); //Which can be used to identify the selected element.
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
});
