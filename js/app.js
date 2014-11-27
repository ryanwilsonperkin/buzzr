/*global document, $, jQuery*/
var g_names = [
    {first_name: 'Andrei', last_name: 'Letavin'},
    {first_name: 'Andrew', last_name: 'DAngelo'},
    {first_name: 'Andrija', last_name: 'Jovanov'},
    {first_name: 'Angela', last_name: 'Pang'},
    {first_name: 'Anuj', last_name: 'Bhatia'},
    {first_name: 'Ben', last_name: 'Ventresca'},
    {first_name: 'Benjamin', last_name: 'Cortens'},
    {first_name: 'Daniel', last_name: 'Robinson'},
    {first_name: 'Derek', last_name: 'Dekroon'},
    {first_name: 'Derek', last_name: 'MacDonald'},
    {first_name: 'Eric', last_name: 'Boyd'},
    {first_name: 'Erick', last_name: 'Lucena Palmeira Silva'},
    {first_name: 'Felipe', last_name: 'Santana de Luna'},
    {first_name: 'Heesung', last_name: 'Ahn'},
    {first_name: 'Horia', last_name: 'Stancescu'},
    {first_name: 'Ian', last_name: 'Dingle'},
    {first_name: 'Jacob', last_name: 'Barrick'},
    {first_name: 'James', last_name: 'Brooks'},
    {first_name: 'Jason', last_name: 'St Jacques'},
    {first_name: 'John', last_name: 'Furlone'},
    {first_name: 'Jonathan', last_name: 'Bourdeau'},
    {first_name: 'Jonathan', last_name: 'Snowdon'},
    {first_name: 'Justin', last_name: 'Carvalho'},
    {first_name: 'Kirk', last_name: 'Eaton'},
    {first_name: 'Laura', last_name: 'Irlinger'},
    {first_name: 'Lawrence', last_name: 'Wong'},
    {first_name: 'Luis', last_name: 'Gustavo'},
    {first_name: 'Matthew', last_name: 'Stark'},
    {first_name: 'Maxwell', last_name: 'Gardiner'},
    {first_name: 'Michael', last_name: 'Ball'},
    {first_name: 'Michael', last_name: 'Wirth'},
    {first_name: 'Mitchell', last_name: 'Reynolds'},
    {first_name: 'Murray', last_name: 'Rush'},
    {first_name: 'Nicholas', last_name: 'Bruner'},
    {first_name: 'Nicholas', last_name: 'Molloy'},
    {first_name: 'Patrick', last_name: 'Bryan'},
    {first_name: 'Patryk', last_name: 'Boczon'},
    {first_name: 'Rhys', last_name: 'Hall'},
    {first_name: 'Ryan', last_name: 'Wilson-Perkin'},
    {first_name: 'Sarah', last_name: 'Shepherd'},
    {first_name: 'Stephanie', last_name: 'Worsfold'},
    {first_name: 'Tornike', last_name: 'Natsvlishvili'},
    {first_name: 'Trevor', last_name: 'Baron'},
    {first_name: 'Vanessa', last_name: 'Carneiro Ferreira'},
    {first_name: 'Xinwei', last_name: 'Chen'},
    {first_name: 'Yee', last_name: 'Chu'},
];

// Given a list of names, render a list of elements.
function renderNamesList(names) {
    var namesList = [];
    names.sort(function(a,b) {
        var val = 0;
        if (a.last_name > b.last_name) {
            val = 1;
        } else if (a.last_name < b.last_name) {
            val = -1;
        }
        return val;
    });
    $.each(names, function() {
        namesList.push($('<a>', {
            'class': 'list-group-item',
            'href': '#buzz-modal',
            'data-toggle': 'modal',
            'text': this.last_name + ', ' + this.first_name,
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
