document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    data = {
        name: formData.get('nome'),
        email: formData.get('email'),
        tel: formData.get('tel'),
        message: formData.get('nome'),
    }

    fetch('http://54.172.210.226/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        document.getElementById('response').textContent = 'Success: ' + JSON.stringify(result);
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Error: ' + error;
      });
});
