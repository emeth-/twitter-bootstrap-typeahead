$(function () {

    var source_data = ['Mohamed', 'Youssef', 'Ahmed', 'Mahmoud', 'Mustafa', 'Yassin', 'Taha', 'Khaled', 'Hamza', 'Bilal', 'Ibrahim', 'Hassan', 'Hussein', 'Karim', 'Tareq', 'Abdel-Rahman', 'Ali', 'Omar', 'Halim', 'Murad', 'Selim', 'Abdallah', 'Peter', 'Pierre', 'George', 'John', 'Mina', 'Beshoi', 'Kirollos', 'Mark', 'Fadi', 'Habib', 'Shaimaa', 'Fatma', 'Maha', 'Reem', 'Farida', 'Aya', 'Shahd', 'Ashraqat', 'Sahar', 'Fatin', 'Dalal', 'Doha', 'Fajr', 'Suha', 'Rowan', 'Hosniya', 'Hasnaa', 'Hosna', 'Gamila', 'Gamalat', 'Habiba', 'Mary', 'Marie', 'Mariam', 'Marina', 'Irene', 'Malak', 'Habiba', 'Hana', 'Farah', 'Marwa', 'Nada', 'Salma'];
    source_data.sort();

    jQuery('#demo1').typeahead({
        source: source_data,
        minLength: 1,
        items:10
    });
    
    jQuery('#demo2').typeahead({
        source: source_data,
        minLength: 0,
        items:10
    });
});