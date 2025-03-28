
        // Theme Toggle
        document.getElementById("themeToggle").addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });

        // Dynamic Number Counter
        function animateCounter(element, target, speed) {
            let count = 0;
            let interval = setInterval(() => {
                count += Math.ceil(target / speed);
                if (count >= target) {
                    count = target;
                    clearInterval(interval);
                }
                element.textContent = count;
            }, 30);
        }

        // Array of Quotes
        const quotes = [
            "The beautiful thing about learning is that no one can take it away from you.",
            "Success is not the key to happiness. Happiness is the key to success.",
            "Education is the most powerful weapon you can use to change the world.",
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "An investment in knowledge pays the best interest."
        ];

        document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];

        // Rotating Testimonials
        const testimonials = [
            "LearnHub changed my learning experience!",
            "Excellent platform with amazing instructors!",
            "I got my dream job thanks to LearnHub!",
            "The courses are well-structured and easy to follow!"
        ];
        
        let index = 0;
        setInterval(() => {
            document.getElementById("testimonial").textContent = testimonials[index];
            index = (index + 1) % testimonials.length;
        }, 5000);

        // Ask user for feedback
        setTimeout(() => {
            let feedback = confirm("Do you like LearnHub? Click OK to give us a 5-star rating!");
            if (feedback) {
                alert("Thank you for your support! 😊");
            } else {
                alert("We'll work harder to improve your experience! 🙌");
            }
            }, 10000);
    