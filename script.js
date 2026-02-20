function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const resultDiv = document.getElementById("result");

    if (!dobInput) {
        resultDiv.innerText = "Please select your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        resultDiv.innerText = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffTime = today - dob;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;

    // Next birthday
    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    resultDiv.innerHTML = `
        You are <strong>${years}</strong> years, <strong>${months}</strong> months and <strong>${days}</strong> days old.<br><br>
        Total months lived: <strong>${totalMonths}</strong><br>
        Total days lived: <strong>${totalDays}</strong><br><br>
        Days until next birthday: <strong>${daysUntilBirthday}</strong>
    `;
}
