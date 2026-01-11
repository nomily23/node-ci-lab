// מייבאים את הפונקציה מהקובץ שיצרנו קודם
const getNumber = require('./app');

// הגדרת הבדיקה
test('Function should return 100', () => {
    // הבדיקה מוודאה שהפונקציה מחזירה בדיוק 100
    expect(getNumber()).toBe(100);
});