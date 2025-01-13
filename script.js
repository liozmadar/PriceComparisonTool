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
        document.getElementById('result1').innerHTML = "אנא הזן ערכים נכונים עבור מוצר 1.";
        return;
    }

    const pricePerUnit1 = price1 / quantity1;
    document.getElementById('result1').innerHTML = `מחיר ליחידה עבור מוצר 1: ₪${pricePerUnit1.toFixed(2)}.`;

    // אם יש מוצר שני, השווה בין המחירים
    if (price2 && quantity2) {
        const pricePerUnit2 = price2 / quantity2;
        document.getElementById('result2').innerHTML = `מחיר ליחידה עבור מוצר 2: ₪${pricePerUnit2.toFixed(2)}.`;

        // השוואה בין המוצרים
        if (pricePerUnit1 < pricePerUnit2) {
            document.getElementById('comparison').innerHTML = "מוצר 1 זול יותר.";
        } else if (pricePerUnit1 > pricePerUnit2) {
            document.getElementById('comparison').innerHTML = "מוצר 2 זול יותר.";
        } else {
            document.getElementById('comparison').innerHTML = "שני המוצרים עולים אותו מחיר ליחידה.";
        }
    } else {
        document.getElementById('comparison').innerHTML = "האם תרצה להשוות עם מוצר נוסף?";
    }
}
