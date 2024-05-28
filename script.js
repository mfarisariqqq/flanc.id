document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('https://script.google.com/macros/s/AKfycbx6EuMSmXvT9I6r7PBxfYwR7GwJgy3FbjilHPr0VbHRW5uUZIcoJZ1F1K5_1zMRIAlHlg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    }).then(response => {
        alert('Data berhasil dikirim!');
    }).catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, silakan coba lagi.');
    });
});
