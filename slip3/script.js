        function validateForm() {
            let isValid = true;

            // Clear all error messages
            document.querySelectorAll('.error').forEach(el => el.innerText = '');

            // Patient ID (required, alphanumeric)
            const patientId = document.getElementById("patientId").value.trim();
            if (patientId === "" || !/^[a-zA-Z0-9]+$/.test(patientId)) {
                document.getElementById("patientIdError").innerText = "Please enter a valid alphanumeric Patient ID.";
                isValid = false;
            }

            // Patient Name (required, alphabets only)
            const patientName = document.getElementById("patientName").value.trim();
            if (patientName === "" || !/^[a-zA-Z ]+$/.test(patientName)) {
                document.getElementById("patientNameError").innerText = "Enter a valid name (letters only).";
                isValid = false;
            }

            // Address (required)
            const address = document.getElementById("address").value.trim();
            if (address === "") {
                document.getElementById("addressError").innerText = "Address is required.";
                isValid = false;
            }

            // City (required, alphabets only)
            const city = document.getElementById("city").value.trim();
            if (city === "" || !/^[a-zA-Z ]+$/.test(city)) {
                document.getElementById("cityError").innerText = "Enter a valid city name.";
                isValid = false;
            }

            // Contact Number (10-digit number only)
            const contact = document.getElementById("contact").value.trim();
            if (!/^\d{10}$/.test(contact)) {
                document.getElementById("contactError").innerText = "Enter a valid 10-digit contact number.";
                isValid = false;
            }

            // Date of Birth (required and must not be future date)
            const dob = document.getElementById("dob").value;
            if (!dob) {
                document.getElementById("dobError").innerText = "Date of Birth is required.";
                isValid = false;
            } else {
                const dobDate = new Date(dob);
                const today = new Date();
                if (dobDate >= today) {
                    document.getElementById("dobError").innerText = "Date of Birth cannot be today or in the future.";
                    isValid = false;
                }
            }

            return isValid;
        }
