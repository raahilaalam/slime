<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Website</title>
    <style>
        /* Banner Style */
        .banner {
            background-color: pink;
        }

        /* Add Button Style */
        .add-btn {
            background-color: darkviolet;
        }

        /* Delete Button Style */
        .delete-btn {
            background-color: purple;
        }

        /* Plus Symbol */
        .plus-symbol {
            color: indigo;
            position: fixed;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
        }

        /* Order Form */
        #order-form {
            display: none;
            /* Additional styling for form */
        }
    </style>
</head>
<body>
    <div class="banner">
        <!-- Banner Content -->
    </div>

    <button class="add-btn">Add</button>
    <button class="delete-btn">Delete</button>

    <div class="plus-symbol-container">
        <button class="plus-symbol">&#x2b;</button>
    </div>

    <!-- Order Form -->
    <div id="order-form">
        <h2>Create Order Form</h2>
        <input type="text" id="order-input" placeholder="Enter order details here">
        <button id="submit-order">Submit</button>
    </div>

    <script>
        // Add event listener for the plus symbol to show the order form
        document.querySelector('.plus-symbol').addEventListener('click', function() {
            document.getElementById('order-form').style.display = 'block';
        });

        // Handle the order form submission
        document.querySelector('#submit-order').addEventListener('click', function() {
            const orderDetails = document.querySelector('#order-input').value;
            const link = generateLink(orderDetails);
            localStorage.setItem('orderReminder', JSON.stringify({ orderDetails, link }));
            alert('Order form submitted! Here is your link: ' + link);
            document.getElementById('order-form').style.display = 'none'; // Hide the form after submission
        });

        // Load reminder on page load
        window.addEventListener('load', function() {
            const savedReminder = JSON.parse(localStorage.getItem('orderReminder'));
            if (savedReminder) {
                alert('You have a saved reminder: ' + savedReminder.orderDetails);
                // Display reminder or populate form
            }
        });

        // Function to generate a shareable link
        function generateLink(orderDetails) {
            return 'http://example.com/order?data=' + encodeURIComponent(orderDetails);
        }
    </script>
</body>
</html>
