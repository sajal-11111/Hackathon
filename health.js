// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Health Issue Assessment Form
    const healthForm = document.getElementById('health-form');
    const healthDescription = document.getElementById('health-description');
    const firstAidDiv = document.getElementById('first-aid');
    const lifestyleChangesDiv = document.getElementById('lifestyle-changes');

    healthForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const issue = healthDescription.value.toLowerCase();

        // Simple keyword-based recommendations (you can replace this with a more advanced logic or API call)
        if (issue.includes('headache')) {
            firstAidDiv.innerHTML = '<p>First Aid: Rest in a quiet, dark room. Apply a cold compress to your forehead.</p>';
            lifestyleChangesDiv.innerHTML = '<p>Lifestyle Changes: Ensure regular sleep, stay hydrated, and manage stress.</p>';
        } else if (issue.includes('cut') || issue.includes('wound')) {
            firstAidDiv.innerHTML = '<p>First Aid: Clean the wound with soap and water. Apply antibiotic ointment and cover with a sterile bandage.</p>';
            lifestyleChangesDiv.innerHTML = '<p>Lifestyle Changes: Keep the wound clean and dry. Watch for signs of infection.</p>';
        } else {
            firstAidDiv.innerHTML = '<p>No specific recommendations available. Please consult a healthcare professional.</p>';
            lifestyleChangesDiv.innerHTML = '';
        }
    });

    // Find Nearby Facilities
    const findFacilitiesBtn = document.getElementById('find-facilities');
    const facilityList = document.getElementById('facility-list');

    findFacilitiesBtn.addEventListener('click', function () {
        // Simulate fetching nearby facilities (replace with real API call)
        setTimeout(() => {
            facilityList.innerHTML = `
                <ul>
                    <li><strong>City Hospital</strong> - 2.5 km away</li>
                    <li><strong>Community Clinic</strong> - 1.8 km away</li>
                    <li><strong>Emergency Care Center</strong> - 3.2 km away</li>
                </ul>
            `;
        }, 1000);
    });

    // Real-Time Hospital Information
    const hospitalInfo = document.getElementById('hospital-info');

    function updateHospitalInfo() {
        // Simulate real-time data update (replace with real API call)
        const beds = Math.floor(Math.random() * 50) + 1;
        const staff = Math.floor(Math.random() * 20) + 5;
        const equipment = Math.floor(Math.random() * 100) + 50;

        hospitalInfo.innerHTML = `
            <p><strong>Available Beds:</strong> ${beds}</p>
            <p><strong>Staff Present:</strong> ${staff}</p>
            <p><strong>Equipment Available:</strong> ${equipment}</p>
        `;
    }

    // Update hospital info every 30 seconds
    updateHospitalInfo();
    setInterval(updateHospitalInfo, 30000);

    // Emergency Booking Form
    const bookingForm = document.getElementById('booking-form');
    const bookingType = document.getElementById('booking-type');
    const bookingDetails = document.getElementById('booking-details');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert(`Emergency booking request submitted for ${bookingType.value}. Details: ${bookingDetails.value}`);
        bookingForm.reset();
    });

    // Geolocation for Facility Finder
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        alert(`Your location: Latitude: ${lat}, Longitude: ${lon}`);
        
        // Use this location data to fetch nearby facilities from an API
        // Example: fetch(`https://api.example.com/facilities?lat=${lat}&lon=${lon}`)
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }

    // Call getLocation when "Find Nearby Facilities" is clicked
    findFacilitiesBtn.addEventListener('click', getLocation);

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you shortly.");
        contactForm.reset();
    });

    // Newsletter Subscription Form Submission
    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        newsletterForm.reset();
    });
});
