document.getElementById('ajaxButton').addEventListener('click', function () {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erro ao buscar dados via AJAX:', error);
        });
});
