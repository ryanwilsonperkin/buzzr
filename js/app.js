 /*global document, $, jQuery*/
var g_names = [
    'Andrei Letavin',
    'Andrew DAngelo',
    'Andrija Jovanov',
    'Angela Pang',
    'Anuj Bhatia',
    'Ben Ventresca',
    'Benjamin Cortens',
    'Daniel Robinson',
    'Derek Dekroon',
    'Derek MacDonald',
    'Eric Boyd',
    'Erick Lucena Palmeira Silva',
    'Felipe Santana de Luna',
    'Heesung Ahn',
    'Horia Stancescu',
    'Ian Dingle',
    'Jacob Barrick',
    'James Brooks',
    'Jason St Jacques',
    'John Furlone',
    'Jonathan Bourdeau',
    'Jonathan Snowdon',
    'Justin Carvalho',
    'Kirk Eaton',
    'Laura Irlinger',
    'Lawrence Wong',
    'Luis Gustavo',
    'Matthew Stark',
    'Maxwell Gardiner',
    'Michael Ball',
    'Michael Wirth',
    'Mitchell Reynolds',
    'Murray Rush',
    'Nicholas Bruner',
    'Nicholas Molloy',
    'Patrick Bryan',
    'Patryk Boczon',
    'Rhys Hall',
    'Ryan Wilson-Perkin',
    'Sarah Shepherd',
    'Stephanie Worsfold',
    'Tornike Natsvlishvili',
    'Trevor Baron',
    'Vanessa Carneiro Ferreira',
    'Xinwei Chen',
    'Yee Chu',
];

// Given a list of names, render a list of elements.
function renderNamesList(names) {
    var namesList = [];
    $.each(names, function() {
        namesList.push($('<a>', {
            'class': 'list-group-item',
            'href': '#buzz-modal',
            'data-toggle': 'modal',
            'text': this,
        }));
    });
    return namesList;
}

$(document).ready(function() {

    // Load tenant names into list.
    var $namesList = renderNamesList(g_names);
    $('#names').append($namesList);

    // Filter names while typing in seach box.
    $('#search').keyup(function() {
        var value = $(this).val().toLowerCase();
        $('#names>a').each(function() {
            var name = $(this).text().toLowerCase();
            if (name.indexOf(value) !== -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Configure modal for user data.
    $('#buzz-modal').on('show.bs.modal', function(e) {
        var $trigger = $(e.relatedTarget);
        var name = $trigger.text();
        $(this).find('.modal-title').text('Buzzing ' + name);
    });
});
