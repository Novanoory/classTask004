document.getElementById('Button').addEventListener('click', function() {
    var body = document.body;
    var button = this; 

    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        button.textContent = 'Night'; 
    } else {
        body.style.backgroundColor = 'white'; 
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.textContent = 'Day'; 
    }
});