document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const interests = document.getElementById('interest').value.toLowerCase();
    const goal = document.getElementById('goal').value.toLowerCase();

    let recommendedCourses = [];

    if (interests.includes('programming') || goal.includes('developer')) {
        recommendedCourses.push("Full Stack Web Development");
        recommendedCourses.push("JavaScript for Beginners");
    }
    if (interests.includes('ai') || goal.includes('data scientist')) {
        recommendedCourses.push("Introduction to AI");
        recommendedCourses.push("Machine Learning with Python");
    }
    if (interests.includes('design')) {
        recommendedCourses.push("UI/UX Design Fundamentals");
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = <p>Hi ${name}, based on your inputs, we recommend the following courses:</p>;
    recommendedCourses.forEach(course => {
        outputDiv.innerHTML += <p>- ${course}</p>;
    });

    if (recommendedCourses.length === 0) {
        outputDiv.innerHTML = <p>Sorry ${name}, we couldn't find a recommendation. Please try again with different inputs.</p>;
    }
});