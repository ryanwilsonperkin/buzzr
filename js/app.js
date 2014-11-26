 /*global document, $, jQuery*/
var g_names = [
    'Heesung Ahn',
    'Michael Ball',
    'Trevor Baron',
    'Jacob Barrick',
    'Anuj Bhatia',
    'Patryk Boczon',
    'Jonathan Bourdeau',
    'Eric Boyd',
    'James Brooks',
    'Nicholas Bruner',
    'Patrick Bryan',
    'Vanessa Carneiro Ferreira',
    'Justin Carvalho',
    'Xinwei Chen',
    'Yee Chu',
    'Benjamin Cortens',
    'Andrew DAngelo',
    'Derek Dekroon',
    'Ian Dingle',
    'Kirk Eaton',
    'John Furlone',
    'Maxwell Gardiner',
    'Rhys Hall',
    'Laura Irlinger',
    'Andrija Jovanov',
    'Andrei Letavin',
    'Erick Lucena Palmeira Silva',
    'Derek MacDonald',
    'Nicholas Molloy',
    'Tornike Natsvlishvili',
    'Luis Gustavo',
    'Angela Pang',
    'Mitchell Reynolds',
    'Daniel Robinson',
    'Murray Rush',
    'Felipe Santana de Luna',
    'Sarah Shepherd',
    'Jonathan Snowdon',
    'Jason St Jacques',
    'Horia Stancescu',
    'Matthew Stark',
    'Ben Ventresca',
    'Ryan Wilson-Perkin',
    'Michael Wirth',
    'Lawrence Wong',
    'Stephanie Worsfold',
];

function renderNamesList(names) {
    var namesList = [];
    $.each(names, function(i,name) {
        namesList.push($('<li>', {
            'class': 'list-group-item',
            'data-id': i,
            'text': name,
        }));
    });
    return namesList;
}

$(document).ready(function() {
    console.log("called");
    var $namesList = renderNamesList(g_names);
    $('#names').append($namesList);
});
