document.addEventListener('DOMContentLoaded', function() {
    const meetingForm = document.getElementById('meeting-form');

    meetingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(meetingForm);

        fetch(meetingForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you! Your meeting request has been submitted. We will contact you shortly to confirm the details.');
                meetingForm.reset();
            } else {
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form. Please try again.');
            console.error('Error:', error);
        });
    });
});