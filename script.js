// DOMContentLoaded ensure karta hai ki HTML poora load hone ke baad hi JS chale
document.addEventListener('DOMContentLoaded', () => {
    
    // Step 1: Button ko uski ID ('book-session') se select karna
    const bookSessionBtn = document.getElementById('book-session');

    // Safety Check: Kya page par yeh button sach mein maujood hai?
    if (bookSessionBtn) {
        
        // Step 2: Button par 'click' Event Listener lagana
        bookSessionBtn.addEventListener('click', () => {
            
            // Step 3: Task-1 Requirement - Click hone par Alert Message trigger karna
            alert("📸 Welcome to Pooja Photo Studio!\n\nThank you for your interest in booking a photography session. Please reach out to us at bookings@poojaphotostudio.com or call +91 98765 43210 to confirm your slot!");
            
            // Bonus Interactive Touch: Click hone ke baad button ka text aur style badalna
            bookSessionBtn.textContent = "Request Initiated ✓";
            bookSessionBtn.style.backgroundColor = "#2e7d32"; // Success Green color
            bookSessionBtn.style.color = "#ffffff";
        });
    }
});