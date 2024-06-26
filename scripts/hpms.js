// form validation for  Admin_registration
function validateReg(){
    let isValid = true;

    let adminFname = document.getElementById('firstname').value;
    let adminLname = document.getElementById('lastname').value;
    let adminMail = document.getElementById('emailadd').value;
    let adminMobile = document.getElementById('mobilenumber').value;
    let adminUsername = document.getElementById('adminusername').value;
    let adminPassword = document.getElementById('adminpassword').value;
    let adminCpassword = document.getElementById('cpassword').value;
    let adminRole = document.getElementById('role').value;
    let adminOrganisation = document.getElementById('organisation').value;

    if(!adminFname){
        document.getElementById('fnameError').innerHTML ="Please enter Admin first Name";
        document.getElementById('firstname').focus();
        isValid=false;
    } else{
        document.getElementById('fnameError').innerHTML= "";
    }

    if(!adminLname){
        document.getElementById('lnameError').innerHTML ="Please enter Admin last Name";
        document.getElementById('lastname').focus();
        isValid=false;
    } else{
        document.getElementById('lnameError').innerHTML= "";
    }

    
    if(!adminMail){
        document.getElementById('emailError').innerHTML ="Please enter Admin email address";
        document.getElementById('emailadd').focus();
        isValid=false;
    } else{
        document.getElementById('emailError').innerHTML= "";
    }

    if(!adminMobile){
        document.getElementById('mobileError').innerHTML ="Please enter Admin mobile number";
        document.getElementById('mobilenumber').focus();
        isValid=false;
    } else{
        document.getElementById('mobileError').innerHTML= "";
    }

    if(!adminUsername){

        document.getElementById('adminusernameError').innerHTML ="Please enter Admin username";
        document.getElementById('adminusername').focus();
        isValid=false;
    } else{
        document.getElementById('adminusernameError').innerHTML= "";
    }

    if(!adminPassword){
        document.getElementById('adminpassError').innerHTML ="Please enter Admin password";
        document.getElementById('adminpassword').focus();
        isValid=false;
    } else{
        document.getElementById('adminpassError').innerHTML= "";
    }

    if (!adminCpassword) {
        document.getElementById('cpasswordError').innerHTML = "Please confirm Admin password";
        document.getElementById('cpassword').focus();
        isValid = false;
    } else {
        document.getElementById('cpasswordError').innerHTML = "";
    }

    if (adminPassword && adminCpassword && adminPassword !== adminCpassword) {
        document.getElementById('cpasswordError').innerHTML = "Passwords do not match";
        document.getElementById('cpassword').focus();
        isValid = false;
    }

    if (adminRole === 'select one') {
        document.getElementById('roleError').innerHTML = "Please select Admin role";
        document.getElementById('role').focus();
        isValid = false;
    } else {
        document.getElementById('roleError').innerHTML = "";
    }

    if(!adminOrganisation){
        document.getElementById('orgError').innerHTML ="Please enter organisation";
        document.getElementById('organisation').focus();
        isValid=false;
    } else{
        document.getElementById('orgError').innerHTML= "";
        
    }
    return isValid;    
}

function validateFname(){
    let adminFname = document.getElementById('firstname').value;
    let namepattern = /^[A-Za-z/s]*$/;

    if(!adminFname.match(namepattern)){
        document.getElementById('fnameError').innerHTML ="Invalid name pattern(letters and whitespace only)";
        document.getElementById('firstname').focus();
        return false;
    } else{
        document.getElementById('fnameError').innerHTML = "";
    }
    return true
}

function validateLname(){
    let adminLname =  document.getElementById('lastname').value;;
    let namepattern = /^[A-Za-z/s]*$/;

    if(!adminLname.match(namepattern)){
        document.getElementById('lnameError').innerHTML ="Invalid name pattern(letters and whitespace only)";
        document.getElementById('lastname').focus();
        return false;
    } else{
        document.getElementById('lnameError').innerHTML = "";
    }
    return true
}

function validatemobile() {
    let adminMobile = document.getElementById('mobilenumber').value;
    let mobilepattern = /^\+[1-9]\d{1,14}$/;
    if (!adminMobile.match(mobilepattern)) {
        document.getElementById('mobileError').innerHTML = "Invalid mobile number (10 to 14digits required)";
        return false;
    } else {
        document.getElementById('mobileError').innerHTML = "";
        return true;
    }
}

function validateemail() {
    let adminMail = document.getElementById('emailadd').value;
    let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!adminMail.match(emailpattern)) {
        document.getElementById('emailError').innerHTML = "Invalid email address";
        return false;
    } else {
        document.getElementById('emailError').innerHTML = "";
        return true;
    }
}

function togglePasswordVisibility() {
    let passwordField = document.getElementById('adminpassword');
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function validatepassword() {
    let adminPassword = document.getElementById('adminpassword').value;
    let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!adminPassword.match(passwordpattern)) {
        document.getElementById('adminpassError').innerHTML = "Password must be at least 8 characters long and contain at least one letter, one number, and one special character";
        document.getElementById('adminpassword').focus();
        return false;
    } else {
        document.getElementById('adminpassError').innerHTML = "";
        return true;
    }
} 

function validatepassconfirmation() {
    let adminPassword = document.getElementById('adminpassword').value;
    let adminCpassword = document.getElementById('cpassword').value;
    if (adminPassword !== adminCpassword) {
        document.getElementById('cpasswordError').innerHTML = "Passwords do not match";
        document.getElementById('cpassword').focus();
        return false;
    } else {
        document.getElementById('cpasswordError').innerHTML = "";
        return true;
    }
}

function validatepassusername() {
    let adminUsername = document.getElementById('adminusername').value;
    let usernamePattern = /^[a-zA-Z0-9]{3,15}$/
    
    if (!adminUsername.match(usernamePattern)) {
        document.getElementById('adminusernameError').innerHTML = "Invalid format(letters and numbers only)";
        document.getElementById('adminusername').focus();
        return false;
    } else {
        document.getElementById('adminusernameError').innerHTML = "";
        return true;
    }

    
}


// ART validation form
try {
    function validateartprescription() {
        let isValid = true;

        const patient_id = document.getElementById('patient_id').value;
        const prescription_date = document.getElementById('prescription_date').value;
        const currentart_regimen = document.getElementById('currentart_regimen').value;
        const dosage = document.getElementById('dosage').value;
        const frequency = document.getElementById('frequency').value;
        const artstart_date = document.getElementById('artstart_date').value;
        const duration = document.getElementById('duration').value;
        const refills = document.getElementById('refills').value;
        const adherence = document.getElementById('adherence').value;
        const side_effects = document.getElementById('side_effects').value;
        const drug_interactions = document.getElementById('drug_interactions').value;
        const previousart_regimen = document.getElementById('previous_art_regimen').value;
        const reason = document.getElementById('reason_for_change').value;
        const other_medications = document.getElementById('other_medications').value;
        const treatment_notes = document.getElementById('treatment_notes').value;
        const follow_up_date = document.getElementById('follow_up_date').value;
        const monitoring_plan = document.getElementById('monitoring_plan').value;
        const prescriber_name = document.getElementById('prescriber_name').value;
        const prescriber_contact = document.getElementById('prescriber_contact').value;
        const prescriber_license = document.getElementById('prescriber_license').value;

        if (!patient_id) {
            document.getElementById('patidErr').innerHTML = 'Kindly enter patient id number';
            document.getElementById('patient_id').focus();
            isValid = false;
        } else {
            document.getElementById('patidErr').innerHTML = '';
        }

        if (!prescription_date) {
            document.getElementById('prescriptiondateErr').innerHTML = 'Kindly enter prescription date';
            document.getElementById('prescription_date').focus();
            isValid = false;
        } else {
            document.getElementById('prescriptiondateErr').innerHTML = '';
        }

        if (!currentart_regimen) {
            document.getElementById('currentartErr').innerHTML = 'Kindly enter current Art-Regimen';
            document.getElementById('currentart_regimen').focus();
            isValid = false;
        } else {
            document.getElementById('currentartErr').innerHTML = '';
        }

        if (!dosage) {
            document.getElementById('dosareErr').innerHTML = 'Kindly enter Art Dosage';
            document.getElementById('dosage').focus();
            isValid = false;
        } else {
            document.getElementById('dosareErr').innerHTML = '';
        }

        if (!frequency) {
            document.getElementById('artfrequencyErr').innerHTML = 'Kindly enter dosage frequency';
            document.getElementById('frequency').focus();
            isValid = false;
        } else {
            document.getElementById('artfrequencyErr').innerHTML = '';
        }

        if (!artstart_date) {
            document.getElementById('artstartdateErr').innerHTML = 'Kindly indicate Art start date';
            document.getElementById('artstart_date').focus();
            isValid = false;
        } else {
            document.getElementById('artstartdateErr').innerHTML = '';
        }

        if (!follow_up_date) {
            document.getElementById('followupdateErr').innerHTML = 'Kindly indicate follow-up dates';
            document.getElementById('follow_up_date').focus();
            isValid = false;
        } else {
            document.getElementById('followupdateErr').innerHTML = '';
        }

        if (!monitoring_plan) {
            document.getElementById('monitoringplaErr').innerHTML = 'Kindly enter monitoring plan for patient';
            document.getElementById('monitoring_plan').focus();
            isValid = false;
        } else {
            document.getElementById('monitoringplaErr').innerHTML = '';
        }

        if (!prescriber_name) {
            document.getElementById('precribernameErr').innerHTML = 'Kindly enter name of physician';
            document.getElementById('prescriber_name').focus();
            isValid = false;
        } else {
            document.getElementById('precribernameErr').innerHTML = '';
        }

        if (!prescriber_contact) {
            document.getElementById('prescontantErr').innerHTML = 'Kindly enter physician contact information';
            document.getElementById('prescriber_contact').focus();
            isValid = false;
        } else {
            document.getElementById('prescontantErr').innerHTML = '';
        }

        return isValid;
    }

    function validatepatientid() {
        const patientidpattern = /^[a-zA-Z0-9\s]*$/;
        const patient_id = document.getElementById('patient_id').value;

        if (!patient_id.match(patientidpattern)) {
            document.getElementById('patidErr').innerHTML = 'Kindly enter a valid id number';
            document.getElementById('patient_id').focus();
            isValid = false;
        } else {
            document.getElementById('patidErr').innerHTML = '';
        }
    }

    function clearError(fieldId, errorId) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(errorId);

        if (field.value.trim() !== '') {
            errorSpan.innerHTML = '';
        }
    }

} catch (err) {
    window.alert(err.message);
}

// clinical visit validation form
function validateClinicVisit() {
    var isValid = true;

    // Validate Patient ID
    const patientId = document.getElementById('patientId').value;
    if (patientId.trim() === "") {
        document.getElementById("patientIdErr").textContent = "Please enter Patient ID";
        document.getElementById('patientId').focus();
        isValid = false;
    } else {
        document.getElementById("patientIdErr").textContent = "";
    }

    // Validate previousTests
    const previousTests = document.getElementById('previousTests').value;
    if (previousTests.trim() === "") {
        document.getElementById("ptestErr").textContent = "Please enter Previuos Tests";
        document.getElementById('previousTests').focus();
        isValid = false;
    } else {
        document.getElementById("ptestErr").textContent = "";
    }

    // Validate History of Opportunistic Infections
    const opportunisticInfections = document.getElementById('opportunisticInfections').value;
    if (opportunisticInfections.trim() === "") {
        document.getElementById('OpportunisticErr').innerText = "History of Opportunistic Infections is ";
        document.getElementById('opportunisticInfections').focus();
        isValid = false;
    } else {
        document.getElementById("OpportunisticErr").textContent = "";
    }

    // Validate History of HIV-related Conditions
    const hivRelatedConditions = document.getElementById('hivRelatedConditions').value;
    if (hivRelatedConditions.trim() === "") {
        document.getElementById('relatedcondErr').innerText = "History of HIV-related Conditions is ";
        document.getElementById('hivRelatedConditions').focus();
        isValid = false;
    } else {
        document.getElementById("relatedcondErr").textContent = "";
    }

    // Validate Medications
    const previousMedications = document.getElementById("previousMedications").value;
    if (previousMedications.trim() === "") {
        document.getElementById("previousMedicationsErr").textContent = "Please enter previous and current medications";
        document.getElementById('previousMedications').focus();
        isValid = false;
    } else {
        document.getElementById("previousMedicationsErr").textContent = "";
    }

    // Validate allergies
    const allergies = document.getElementById("allergies").value;
    if (allergies.trim() === "") {
        document.getElementById("allergiesErr").textContent = "Please enter allergies";
        isValid = false;
    } else {
        document.getElementById("allergiesErr").textContent = "";
    }
    // Validate visitDate
    const visitDate = document.getElementById("visitDate").value;
    if (visitDate === "") {
        document.getElementById("visitDateErr").textContent = "Please select a visit date";
        isValid = false;
    } else {
        document.getElementById("visitDateErr").textContent = "";                    
    }
                    
    // Validate reasonForvisit
    const reasonForvisit = document.getElementById("reasonForvisit").value;
    if (reasonForvisit.trim() === "") {
        document.getElementById("reasonForvisitErr").textContent = "Please enter the reason for visit";
        isValid = false;
    } else {
        document.getElementById("reasonForvisitErr").textContent = "";
    }

    // Validate Current Symptoms
    const currentSymptoms = document.getElementById("currentSymptoms").value;
    if (currentSymptoms.trim() === "") {
        document.getElementById("currentSymptomsErr").textContent = "Please enter current symptoms";
        isValid = false;
    } else {
        document.getElementById("currentSymptomsErr").textContent = "";
    }

    // Validate Blood Pressure
    const bloodPressure = document.getElementById("bloodPressure").value;
    if (bloodPressure.trim() === "") {
        document.getElementById("bloodPressureErr").textContent = "Please enter blood pressure";
        isValid = false;
    } else {
        document.getElementById("bloodPressureErr").textContent = "";
    }

    // Validate Heart Rate
    const heartRate = document.getElementById("heartRate").value;
    if (heartRate.trim() === "") {
        document.getElementById("heartRateErr").textContent = "Please enter heart rate";
        isValid = false;
    } else {
        document.getElementById("heartRateErr").textContent = "";
    }

    // Validate temperature
    const temperature = document.getElementById("temperature").value;
    if (temperature.trim() === "") {
        document.getElementById("temptErr").textContent = "Please enter temperature";
        isValid = false;
    } else {
        document.getElementById("temptErr").textContent = "";
    }

    // Validate weight
    const weight = document.getElementById("weight").value;
    if (weight.trim() === "") {
        document.getElementById("weightErr").textContent = "Please enter weight";
        isValid = false;
    } else {
        document.getElementById("weightErr").textContent = "";
    }

    // Validate height
    const height = document.getElementById("height").value;
    if (height.trim() === "") {
        document.getElementById("heightErr").textContent = "Please enter height";
        isValid = false;
    } else {
        document.getElementById("heightErr").textContent = "";
    }

    // Validate HIV Test Mode checkboxes
    const testModeHIVab = document.getElementById("hivTestmodeHIVab").checked;
    const testModePcr = document.getElementById("hivTestmodePcr").checked;
    if (!testModeHIVab && !testModePcr) {
        document.getElementById("testmodeErr").textContent = "Please select at least one HIV test mode";
        isValid = false;
    } else {
        document.getElementById("testmodeErr").textContent = "";
    }

    // Validate hivDiagnosisDate
    const hivDiagnosisDate = document.getElementById("hivDiagnosisDate").value;
    if (hivDiagnosisDate === "") {
        document.getElementById("hivDiagnosisDateErr").textContent = "Please select the date of HIV diagnosis";
        isValid = false;
    } else {
        document.getElementById("hivDiagnosisDateErr").textContent = "";
    }

    // Validate Viral Load
    const viralLoad = document.getElementById("viralLoad").value;
    if (viralLoad.trim() === "") {
        document.getElementById("viralLoadErr").textContent = "Please enter viral load";
        isValid = false;
    } else {
        document.getElementById("viralLoadErr").textContent = "";
    }

// Validate CD4
    const cd4Count = document.getElementById("cd4Count").value;
    if (cd4Count.trim() === "") {
        document.getElementById("cd4CountErr").textContent = "Please enter CD4 count";
        isValid = false;
    } else {
        document.getElementById("cd4CountErr").textContent = "";
    }

// Validate Resistance
    const resistance = document.getElementById("resistance").value;
    if (resistance.trim() === "") {
        document.getElementById("resistancetestErr").textContent = "Please enter resistance testing results";
        isValid = false;
    } else {
        document.getElementById("resistancetestErr").textContent = "";
    }

    return isValid;
}

// Function to clear error messages
function clearError(errorId) {
    document.getElementById(errorId).innerText = "";
}


// contact tracing validation form
function validateContactTracingForm() {
    let isValid = true;
    if (!validatePatientId()) isValid = false;
    if (!validateContactFullName()) isValid = false;
    if (!validateContactDateOfBirth()) isValid = false;
    if (!validateContactGender()) isValid = false;
    if (!validateContactPhone()) isValid = false;
    if (!validateContactEmail()) isValid = false;
    if (!validateContactAddress()) isValid = false;
    if (!validateContactRelation()) isValid = false;
    if (!validateLastContactDate()) isValid = false;
    if (!validateContactExposureType()) isValid = false;
    if (!validateContactRiskLevel()) isValid = false;
    if (!validateContactSexualIntercourse()) isValid = false;
    if (!validateContactBloodTransfusion()) isValid = false;
    return isValid;
}

function validatePatientId() {
    let patientId = document.getElementById('patient_id').value;
    let patientidpattern = /^[a-zA-Z0-9\s]*$/;
    if (!patientId.match(patientidpattern)) {
        document.getElementById('patientIdError').innerHTML = "Patient ID is required, Ltters and no combination";
        return false;
    } else {
        document.getElementById('patientIdError').innerHTML = "";
        return true;
    }
}

function validateContactFullName() {
    let contactFullName = document.getElementById('contact_full_name').value;
    if (!contactFullName) {
        document.getElementById('contactFullNameError').innerHTML = "Contact full name is required";
        return false;
    } else {
        document.getElementById('contactFullNameError').innerHTML = "";
        return true;
    }
}

function validateContactDateOfBirth() {
    let contactDateOfBirth = document.getElementById('contact_date_of_birth').value;
    if (!contactDateOfBirth) {
        document.getElementById('contactDateOfBirthError').innerHTML = "Date of birth is required";
        return false;
    } else {
        document.getElementById('contactDateOfBirthError').innerHTML = "";
        return true;
    }
}

function validateContactGender() {
    let contactGender = document.getElementById('contact_gender').value;
    if (!contactGender) {
        document.getElementById('contactGenderError').innerHTML = "Contact gender is required";
        return false;
    } else {
        document.getElementById('contactGenderError').innerHTML = "";
        return true;
    }
}

function validateContactPhone() {
    let contactPhone = document.getElementById('contact_phone').value;
    let phonePattern = /^[0-9]{10}$/;
    if (!contactPhone.match(phonePattern)) {
        document.getElementById('contactPhoneError').innerHTML = "Please enter a valid 10-digit phone number";
        return false;
    } else {
        document.getElementById('contactPhoneError').innerHTML = "";
        return true;
    }
}

function validateContactEmail() {
    let contactEmail = document.getElementById('contact_email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (contactEmail && !contactEmail.match(emailPattern)) {
        document.getElementById('contactEmailError').innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById('contactEmailError').innerHTML = "";
        return true;
    }
}

function validateContactAddress() {
    let contactAddress = document.getElementById('contact_address').value;
    if (!contactAddress) {
        document.getElementById('contactAddressError').innerHTML = "Contact address is required";
        return false;
    } else {
        document.getElementById('contactAddressError').innerHTML = "";
        return true;
    }
}

function validateContactRelation() {
    let contactRelation = document.getElementById('contact_relation').value;
    if (!contactRelation) {
        document.getElementById('contactRelationError').innerHTML = "Relation to patient is required";
        return false;
    } else {
        document.getElementById('contactRelationError').innerHTML = "";
        return true;
    }
}

function validateLastContactDate() {
    let lastContactDate = document.getElementById('last_contact_date').value;
    if (!lastContactDate) {
        document.getElementById('lastContactDateError').innerHTML = "Date of last contact is required";
        return false;
    } else {
        document.getElementById('lastContactDateError').innerHTML = "";
        return true;
    }
}

function validateContactExposureType() {
    let contactExposureType = document.getElementById('contact_exposure_type').value;
    if (!contactExposureType) {
        document.getElementById('contactExposureTypeError').innerHTML = "Type of exposure is required";
        return false;
    } else {
        document.getElementById('contactExposureTypeError').innerHTML = "";
        return true;
    }
}

function validateContactSymptoms() {
    let contactSymptoms = document.getElementById('contact_symptoms').value;
    if (contactSymptoms.length > 500) {
        document.getElementById('contactSymptomsError').innerHTML = "Symptoms description is too long";
        return false;
    } else {
        document.getElementById('contactSymptomsError').innerHTML = "";
        return true;
    }
}

function validateContactRiskLevel() {
    let contactRiskLevel = document.getElementById('contact_risk_level').value;
    if (!contactRiskLevel) {
        document.getElementById('contactRiskLevelError').innerHTML = "Risk level is required";
        return false;
    } else {
        document.getElementById('contactRiskLevelError').innerHTML = "";
        return true;
    }
}

function validateContactTestingDate() {
    let contactTestingDate = document.getElementById('contact_testing_date').value;
    if (contactTestingDate && new Date(contactTestingDate) > new Date()) {
        document.getElementById('contactTestingDateError').innerHTML = "Testing date cannot be in the future";
        return false;
    } else {
        document.getElementById('contactTestingDateError').innerHTML = "";
        return true;
    }
}

function validateContactTestingResults() {
    let contactTestingResults = document.getElementById('contact_testing_results').value;
    if (contactTestingResults === '') {
        document.getElementById('contactTestingResultsError').innerHTML = "Please select testing results";
        return false;
    } else {
        document.getElementById('contactTestingResultsError').innerHTML = "";
        return true;
    }
}

function validateContactSexualIntercourse() {
    let contactSexualIntercourse = document.getElementById('contact_sexual_intercourse').value;
    if (!contactSexualIntercourse) {
        document.getElementById('contactSexualIntercourseError').innerHTML = "Please select an option";
        return false;
    } else {
        document.getElementById('contactSexualIntercourseError').innerHTML = "";
        return true;
    }
}

function validateContactBloodTransfusion() {
    let contactBloodTransfusion = document.getElementById('contact_blood_transfusion').value;
    if (!contactBloodTransfusion) {
        document.getElementById('contactBloodTransfusionError').innerHTML = "Please select an option";
        return false;
    } else {
        document.getElementById('contactBloodTransfusionError').innerHTML = "";
        return true;
    }
}

// patient Registration validation form
function validatepatientregistration() {
    var valid = true;

    // Validate uniqueid
    var uniqueid = document.getElementById("uniqueid").value;
    if (uniqueid.trim() === "") {
        document.getElementById("uniqueidErr").textContent = "Please enter Unique-Id";
        valid = false;
    } else {
        document.getElementById("uniqueidErr").textContent = "";
    }

    // Validate dateEnrolled
    var dateEnrolled = document.getElementById("dateEnrolled").value;
    if (dateEnrolled.trim() === "") {
        document.getElementById("enrollDateErr").textContent = "Please enter Date Enrolled";
        valid = false;
    } else {
        document.getElementById("enrollDateErr").textContent = "";
    }

    // Validate fullname
    var fullname = document.getElementById("fullname").value;
    if (fullname.trim() === "") {
        document.getElementById("fullnameErr").textContent = "Please enter Full Name";
        valid = false;
    } else {
        document.getElementById("fullnameErr").textContent = "";
    }

    // Validate dob
    var dob = document.getElementById("dob").value;
    if (dob.trim() === "") {
        document.getElementById("dobErr").textContent = "Please enter Date of Birth";
        valid = false;
    } else {
        document.getElementById("dobErr").textContent = "";
    }

    // Validate gender
    var gender = document.getElementById("gender").value;
    if (gender === "select one") {
        document.getElementById("genderErr").textContent = "Please select Gender";
        valid = false;
    } else {
        document.getElementById("genderErr").textContent = "";
    }

    // Validate marital-status
    var maritalStatus = document.getElementById("marital-status").value;
    if (maritalStatus === "select one") {
        document.getElementById("maritalstErr").textContent = "Please select Marital Status";
        valid = false;
    } else {
        document.getElementById("maritalstErr").textContent = "";
    }

    // Validate address
    var address = document.getElementById("address").value;
    if (address.trim() === "") {
        document.getElementById("addErr").textContent = "Please enter Address";
        valid = false;
    } else {
        document.getElementById("addErr").textContent = "";
    }

    // Validate phone-no
    var phoneNo = document.getElementById("phone-no").value;
    if (phoneNo.trim() === "") {
        document.getElementById("phoneNoErr").textContent = "Please enter Phone Number";
        valid = false;
    } else {
        document.getElementById("phoneNoErr").textContent = "";
    }

    // Validate email
    var email = document.getElementById("email").value;
    if (email.trim() === "") {
        document.getElementById("emailAddErr").textContent = "Please enter Email Address";
        valid = false;
    } else {
        document.getElementById("emailAddErr").textContent = "";
    }

    // Validate nationality
    var nationality = document.getElementById("nationality").value;
    if (nationality.trim() === "") {
        document.getElementById("nationalityErr").textContent = "Please enter Nationality";
        valid = false;
    } else {
        document.getElementById("nationalityErr").textContent = "";
    }

    // Validate resisdence
    var resisdence = document.getElementById("resisdence").value;
    if (resisdence.trim() === "") {
        document.getElementById("resisdenceErr").textContent = "Please enter resisdence";
        valid = false;
    } else {
        document.getElementById("resisdenceErr").textContent = "";
    }

     // Validate emergencyContact
     var emergencyContact = document.getElementById("emergencyContact").value;
    if (emergencyContact.trim() === "") {
        document.getElementById("emerContErr").textContent = "Please enter emergencyContact";
        valid = false;
    } else {
        document.getElementById("emerContErr").textContent = "";
    }

    // Validate nok
    var nok = document.getElementById("nok").value;
    if (nok.trim() === "") {
        document.getElementById("nokErr").textContent = "Please enter nok";
        valid = false;
    } else {
        document.getElementById("nokErr").textContent = "";
    }

    
    // Validate nokPhone
    var nokPhone = document.getElementById("nokPhone").value;
    if (nokPhone.trim() === "") {
        document.getElementById("nokPhoneErr").textContent = "Please enter nokPhone";
        valid = false;
    } else {
        document.getElementById("nokPhoneErr").textContent = "";
    }

    // Validate motherUniueid
    var motherUniueid = document.getElementById("motherUniueid").value;
    if (motherUniueid.trim() === "") {
        document.getElementById("motherUniueidErr").textContent = "Please enter motherUniueid";
        valid = false;
    } else {
        document.getElementById("motherUniueidErr").textContent = "";
    }

    // Validate art
    var artYes = document.getElementById("yes").checked;
    var artNo = document.getElementById("no").checked;
    if (!artYes && !artNo) {
        document.getElementById("artErr").textContent = "Please select ART status";
        valid = false;
    } else {
        document.getElementById("artErr").textContent = "";
    }

    return valid;
}

function clearError(inputId, errorId) {
    document.getElementById(errorId).textContent = "";
}

function validatepatientuniqueid() {
    const patientidpattern = /^[a-zA-Z0-9\s]*$/;
    const uniqueid = document.getElementById('uniqueid').value.trim();

    if (!uniqueid.match(patientidpattern)) {
        document.getElementById('uniqueidErr').innerHTML = 'Kindly enter a valid ID number';
        document.getElementById('uniqueid').focus();
        return false;
    } else {
        document.getElementById('uniqueidErr').innerHTML = '';
        return true;
    }
}

function validatepatientname() {
    const namepattern = /^[a-zA-Z\s]*$/;
    const fullname = document.getElementById('fullname').value.trim();

    if (!fullname.match(namepattern)) {
        document.getElementById('fullnameErr').innerHTML = 'Kindly enter a valid name pattern (letters and spaces only)';
        document.getElementById('fullname').focus();
        return false;
    } else {
        document.getElementById('fullnameErr').innerHTML = '';
        return true;
    }
}

function validatehivstatus() {
    // Add custom validation logic for HIV status if needed
}