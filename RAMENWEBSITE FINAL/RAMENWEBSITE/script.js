document.getElementById("calculateBtn").addEventListener("click", function () {
    // Define the course prices
    const coursePrices = {
        childMinding: 750,
        cooking: 750,
        gardenMaintenance: 750,
        firstAid: 1500,
        landscaping: 1500,
        lifeSkills: 1500,
        sewing: 800
    };

    // Get all the checkboxes
    const selectedCourses = document.querySelectorAll("input[type=checkbox]:checked");

    // Initialize the total cost
    let totalCost = 0;

    // Loop through the selected courses and sum up the total cost
    selectedCourses.forEach(course => {
        totalCost += coursePrices[course.value];
    });

    // Apply discount based on the number of selected courses
    let discount = 0;
    if (selectedCourses.length === 2) {
        discount = 0.05; // 5% discount
    } else if (selectedCourses.length === 3) {
        discount = 0.10; // 10% discount
    } else if (selectedCourses.length > 3) {
        discount = 0.15; // 15% discount
    }

    // Calculate the total cost after applying the discount
    let discountedTotal = totalCost - (totalCost * discount);

    // Add VAT (15%)
    let vat = discountedTotal * 0.15;
    let finalTotal = discountedTotal + vat;

    // Display the total cost and discount
    document.getElementById("totalCost").innerText = `Total Fee (after discount and VAT): R${finalTotal.toFixed(2)}`;
});


  