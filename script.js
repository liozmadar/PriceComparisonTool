function calculatePrice() {
    // קבלת הערכים מהקלטים
    const price1 = parseFloat(document.getElementById('price1').value);
    const quantity1 = parseFloat(document.getElementById('quantity1').value);
    const price2 = parseFloat(document.getElementById('price2').value);
    const quantity2 = parseFloat(document.getElementById('quantity2').value);

    // שינוי סגנון הכפתור לאחר לחיצה
    const button = document.querySelector("button");
    button.style.backgroundColor = "#3e8e41"; // צבע שונה לכפתור
    button.style.transform = "scale(0.95)"; // מקטין את הכפתור קצת
    setTimeout(() => {
        button.style.backgroundColor = "#4CAF50"; // מחזיר את הצבע הרגיל
        button.style.transform = "scale(1)"; // מחזיר את הגודל הרגיל
    }, 50); // אחרי 200 מילישניות הכפתור יחזור למצבו הרגיל

    // איפוס תוצאות קודמות
    document.getElementById('result1').innerHTML = '';
    document.getElementById('result2').innerHTML = '';
    document.getElementById('comparison').innerHTML = '';

    // בדיקת נכונות קלט עבור המוצר הראשון
    if (!price1 || !quantity1) {
        document.getElementById('result1').innerHTML = "Please enter correct values for product 1";
        return;
    }

    const pricePerUnit1 = price1 / quantity1;
    document.getElementById('result1').innerHTML = `Price per unit for product 1: $${pricePerUnit1.toFixed(2)}.`;

    // אם יש מוצר שני, השווה בין המחירים
    if (price2 && quantity2) {
        const pricePerUnit2 = price2 / quantity2;
        document.getElementById('result2').innerHTML = `Price per unit for product 2: $${pricePerUnit2.toFixed(2)}.`;

        // השוואה בין המוצרים
        if (pricePerUnit1 < pricePerUnit2) {
            document.getElementById('comparison').innerHTML = "Product 1 is cheaper.";
        } else if (pricePerUnit1 > pricePerUnit2) {
            document.getElementById('comparison').innerHTML = "Product 2 is cheaper.";
        } else {
            document.getElementById('comparison').innerHTML = "Both products cost the same per unit.";
        }
    } else {
        document.getElementById('comparison').innerHTML = "Would you like to compare with another product?";
    }
}
