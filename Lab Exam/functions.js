function validateForm() {
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const selectedAttendence = document.querySelector('input[name="attendence"]:checked');

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const companyErr = document.getElementById("companyErr");
    const attendenceErr = document.getElementById("attendenceErr");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    companyErr.innerHTML = "";
    attendenceErr.innerHTML = "";

    if (fullName.length < 6 || fullName.length > 100) {
        nameErr.innerHTML = "Name must be between 6 and 100 characters.";
        return false;
    }

    if (!email || email.indexOf("@") === -1 || email.split("@")[1].indexOf(".") === -1) {
        emailErr.innerHTML = "Please enter a valid professional email address.";
        return false;
    }

    if (company !== "" && company.length > 100) {
        companyErr.innerHTML = "Company/Institution must be at most 100 characters.";
        return false;
    }

    if (!selectedAttendence) {
        attendenceErr.innerHTML = "Please select your attendance type.";
        return false;
    }

    return true;
}

let virtualAttendence=0;
let inpersonAttendence=0;
let totalAttendence=0;

function submitForm() {
    if (!validateForm()) return false;

    totalAttendence++;
    const selected = document.querySelector('input[name="attendence"]:checked').value;
    if (selected === "Virtual") {
        virtualAttendence++;
    } else {
        inpersonAttendence++;
    }

    resetForm();

    return true;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("company").value = "";
    document.querySelector('input[name="attendence"]:checked').checked = false;
}

function analytics() {
    const panel = document.getElementById('analytics');
    const btn = document.getElementById('analyticsBtn');
    if (!panel) return;

    if (panel.style.display === 'none' || panel.style.display === '') {
        document.getElementById('totalAttendence').innerHTML = totalAttendence;
        document.getElementById('virtualAttendence').innerHTML = virtualAttendence;
        document.getElementById('inpersonAttendence').innerHTML = inpersonAttendence;
        panel.style.display = 'block';
        if (btn) btn.innerHTML = 'Hide Analytics';
    } else {
        panel.style.display = 'none';
        if (btn) btn.innerHTML = 'Show Analytics';
    }
}
