// הפונקציה מופעלת כאשר לוחצים על כפתור 'חשב'
document.getElementById("calculateBtn").addEventListener("click", function() {
    // קריאת ערכי המחיר והכמות מהמוצר הראשון
    let price1 = parseFloat(document.getElementById("price1").value);
    let quantity1 = parseFloat(document.getElementById("quantity1").value);

    // קריאת ערכי המחיר והכמות מהמוצר השני
    let price2 = parseFloat(document.getElementById("price2").value);
    let quantity2 = parseFloat(document.getElementById("quantity2").value);

    // בדיקה אם לפחות מוצר אחד הוזן
    if (isNaN(price1) || isNaN(quantity1)) {
        document.getElementById("result").innerText = "אנא מלא את השדות למוצר הראשון.";
        return;
    }

    // חישוב המחיר ליחידה למוצר הראשון
    let unitPrice1 = price1 / quantity1;
    let resultText = `מוצר 1: ${unitPrice1.toFixed(2)} ₪ ליחידה.`;

    // בדיקה אם המוצר השני מלא לצורך השוואה
    if (!isNaN(price2) && !isNaN(quantity2)) {
        let unitPrice2 = price2 / quantity2;
        resultText += `\nמוצר 2: ${unitPrice2.toFixed(2)} ₪ ליחידה.`;

        // השוואה בין המחירים ליחידה
        if (unitPrice1 < unitPrice2) {
            resultText += "\nמוצר 1 משתלם יותר.";
        } else if (unitPrice1 > unitPrice2) {
            resultText += "\nמוצר 2 משתלם יותר.";
        } else {
            resultText += "\nשני המוצרים שווים במחיר ליחידה.";
        }
    } else {
        // הודעה ידידותית כאשר רק מוצר אחד מחושב
        resultText += "\nתרצה להשוות למוצר נוסף? מלא את השדות הנוספים!";
    }

    // הצגת התוצאה בדף
    document.getElementById("result").innerText = resultText;
});
