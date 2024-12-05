var firebaseConfig = {
  apiKey: "AIzaSyAs6nbNK0LZCA0KRnsFxP1-MQVx3cqRWM4",
  authDomain: "nephroureterectomy-data-sheet.firebaseapp.com",
  projectId: "nephroureterectomy-data-sheet",
  storageBucket: "nephroureterectomy-data-sheet.firebasestorage.app",
  messagingSenderId: "1094238243732",
  appId: "1:1094238243732:web:25d4b124bb6e433ec99d81"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function registerUser(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userType = document.getElementById("userType").value;
  
  auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
          const user = userCredential.user;

          return db.collection("users").doc(user.uid).set({
              email: email,
              password: password,
              userType: userType
          });
      })
      .then(() => {
          alert("Registration successful!");
          window.location.href = "login.html";
      })
      .catch(error => {
          console.error("Error during registration:", error);
          alert(error.message);
      });
}

function loginUser(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
          const userId = userCredential.user.uid;

          return db.collection("users").doc(userId).get();
      })
      .then(doc => {
          if (doc.exists) {
              const userType = doc.data().userType;
              alert("Login successful!");

              if (userType === "admin") {
                  window.location.href = "adminDashboard.html";
              } else if (userType === "patient") {
                  window.location.href = "patientDashboard.html";
              } else {
                  console.error("Unknown user type.");
              }
          } else {
              console.error("No user document found!");
          }
      })
      .catch(error => {
          console.error("Error during login:", error);
          alert("Invalid Login Credentials. Try again!!!");
      });
}

function submitPatientData(event) {
  event.preventDefault();
  const isUmol = document.getElementById("serumCreatinineUnitMOL").checked;
  const assay1 = document.getElementById("stdAssaysOption1").checked;
  const assay2 = document.getElementById("stdAssaysOption2").checked;
  const assay3 = document.getElementById("stdAssaysOption3").checked;
  const adj1 = document.getElementById("adjBodySurfOption1").checked;
  const adj2 = document.getElementById("adjBodySurfOption2").checked;
  const adj3 = document.getElementById("adjBodySurfOption3").checked;
  let unit, assay, adjVol;
  if (isUmol){
    unit = "μmol/L";
  }
  else{
    unit = "mg/dL";
  }
  if (assay1){
    assay = "Yes";
  }

  else if (assay2){
    assay = "No";
  }

  else if (assay3){
    assay = "Not Sure";
  }

  if (adj1){
    adjVol = "Yes";
  }

  else if (adj2){
    adjVol = "No";
  }

  else if (adj3){
    adjVol = "No";
  }

  const patientData = {
    participantInitial: document.getElementById("participantInitial").value,
    yearOfBirth: Number(document.getElementById("year").value),
    participantStudyNo: document.getElementById("participantStudyNo").value,
    // ipNo: document.getElementById("ipNo").value,
    // telNo: document.getElementById("telNo").value,
    patientResidingState: document.getElementById("patientResidingState").value,
    age: Number(document.getElementById("age").value),
    gender: document.getElementById("gender").value,
    height: Number(document.getElementById("height").value),
    weight: Number(document.getElementById("weight").value),
    bmi: document.getElementById("bmi").value,
    smoking: document.getElementById("smoking").value,
    alcohol: document.getElementById("alcohol").value,
    comorbidities: document.getElementById("comorbidities").value,
    otherComorbidities : document.getElementById("other-comorbidity").value,
    commentComorbidities : document.getElementById("comment-comorbidity").value,
    diagnosis: document.getElementById("diagnosis").value,
    presentingSymptoms: document.getElementById("presentingSymptoms").value,
    hematuria: document.getElementById("hematuria").value,
    luts: document.getElementById("luts").value,
    prevTreatment: document.getElementById("prevTreatment").value,
    cytology: document.getElementById("cytology").value,
    cect: document.getElementById("cect").value,
    commentCect: document.getElementById("comment-cect").value,
    mri: document.getElementById("mri").value,
    commentMri: document.getElementById("comment-mri").value,
    pet: document.getElementById("pet").value,
    bladderCuff: document.getElementById("bladderCuff").value,
    tumorSize: document.getElementById("tumorSize").value,
    tumorLocation: document.getElementById("tumorLocation").value,
    preOpBiopsy: document.getElementById("preOpBiopsy").value,
    preOpCr: document.getElementById("preOpCr").value,
    preOpEgfr: document.getElementById("preOpEGFR").value,
    lowerTractStatus: document.getElementById("lowerTractStatus").value,
    asa: document.getElementById("asa").value,
    bladderTumour: document.getElementById("bladderTumour").value,
    neoAdjuvantTherapy: document.getElementById("neoAdjuvantTherapy").value,
    chemotherapyRegimen: document.getElementById("chemoRegimen").value,
    noOfNacCycles: document.getElementById("noOfNacCycles").value,
    approach: document.getElementById("approach").value,
    procedurePerformed: document.getElementById("procedurePerformed").value,
    doP: document.getElementById("dop").value,
    opTime: document.getElementById("opTime").value,
    postOpMitomycin: document.getElementById("postOpMitomycin").value,
    los: document.getElementById("los").value,
    bloodLoss: document.getElementById("bloodLoss").value,
    intraopComp: document.getElementById("intraopComp").value,
    bloodTransfusion: document.getElementById("bloodTransfusion").value,
    normDiet: document.getElementById("normDiet").value,
    ambulation: document.getElementById("ambulation").value,
    fitForDisch: document.getElementById("fitForDisch").value,
    postOpComp: document.getElementById("postOpComp").value,
    postOpCr: document.getElementById("postOpCr").value,
    hpr: document.getElementById("hpr").value,
    stage: document.getElementById("stage").value,
    adjuvantChemo: document.getElementById("adjuvantChemo").value,
    noOfAdjChemoCycles: document.getElementById("noOfAdjChemoCycles").value,
    followupCysto: document.getElementById("followupCysto").value,
    cystoscopyFindings: document.getElementById("cystoscopyFindings").value,
    threeMonthCreatinine: document.getElementById("threeMonthCreatinine").value,
    threeMonthEgfr: document.getElementById("threeMonthEgfr").value,
    threeMonthCt: document.getElementById("threeMonthCt").value,
    sixMonthCreatinine: document.getElementById("sixMonthCreatinine").value,
    sixMonthEgfr: document.getElementById("sixMonthEgfr").value,
    sixMonthCt: document.getElementById("sixMonthCt").value,
    twelveMonthCreatinine: document.getElementById("twelveMonthCreatinine").value,
    twelveMonthEgfr: document.getElementById("twelveMonthEgfr").value,
    twelveMonthCt: document.getElementById("twelveMonthCt").value,
    twentyFourMonthCreatinine: document.getElementById("twentyFourMonthCreatinine").value,
    twentyFourMonthEgfr: document.getElementById("twentyFourMonthEgfr").value,
    twentyFourMonthCt: document.getElementById("twentyFourMonthCt").value,
    thirtySixMonthCreatinine: document.getElementById("thirtySixMonthCreatinine").value,
    thirtySixMonthEgfr: document.getElementById("thirtySixMonthEgfr").value,
    thirtySixMonthCt: document.getElementById("thirtySixMonthCt").value,
    dateOfLastFollowUp: document.getElementById("dateOfLastFollowUp").value,
    recurrence: document.getElementById("recurrence").value,
    comments: document.getElementById("comments").value,
    serumCreatinine : document.getElementById("serumCreatinine").value,
    serumCreatinineUnitMOL : unit,
    serumCystatinC : document.getElementById("serumCystatinC").value,
    stdAssaysOption : assay,
    adjBodySurfOption : adjVol,
    ckdepic : document.getElementById("ckdepic").value,
    ckdepicc : document.getElementById("ckdepicc").value,
    ckdepicC : document.getElementById("ckdepicC").value
  };
  const userId = auth.currentUser.uid;
  db.collection("patients").doc(userId).set(patientData)
    .then(() => {
      alert("Patient data saved successfully!");
    })
    .catch(error => {
      console.error("Error saving patient data:", error);
      alert("Error saving data. Please try again.");
    });
}

function searchPatientByParticipantStudyNo(participantStudyNo) {
  if (!participantStudyNo) {
    document.getElementById("patientData").innerHTML = "";
    return;
  }

  db.collection("patients").where("participantStudyNo", "==", participantStudyNo).get()
    .then((querySnapshot) => {
      const tbody = document.getElementById("patientData");
      tbody.innerHTML = "";

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const patient = doc.data();

          const row = `<tr>
            <td>${patient.participantStudyNo || ""}</td>
            <td>${patient.participantInitial || ""}</td>
            <td>${patient.yearOfBirth || ""}</td>
            <td>${patient.patientResidingState || ""}</td>
            <td>${patient.age || ""}</td>
            <td>${patient.gender || ""}</td>
            <td>${patient.height || ""}</td>
            <td>${patient.weight || ""}</td>
            <td>${patient.bmi || ""}</td>
            <td>${patient.diagnosis || ""}</td>
            <td>${patient.tumorSize || ""}</td>
            <td>${patient.procedurePerformed || ""}</td>
            <!-- Add more fields here as needed -->
          </tr>`;

          tbody.innerHTML += row;
        });
      } else {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center">No patient found with the given Participant Study Number</td></tr>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching patient data: ", error);
    });
}

function downloadExcel() {
  db.collection("patients").get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const patient = doc.data();
        const patientData = {
          
          "Participant's Study No.": patient.participantStudyNo || "",
          "Participant's Initial": patient.participantInitial || "",
          "Year of Birth": patient.year || "",
          "Patient's Residing State": patient.patientResidingState || "",
          "Age (in yrs)": patient.age || "",
          "Gender": patient.gender || "",
          "Height (in cms)": patient.height || "",
          "Weight (in kgs)": patient.weight || "",
          "BMI (in kg/m2)": patient.bmi || "",
          "Diagnosis": patient.diagnosis || "",
          "Tumor Size (cm)": patient.tumorSize || "",
          "Procedure Performed": patient.procedurePerformed || "",
        };
        data.push(patientData);
      });
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Patients Data");
      XLSX.writeFile(wb, "Patients_Report.xlsx");
    })
    .catch((error) => {
      console.error("Error fetching patient data for Excel download: ", error);
    });
}

function calceGFR() {
  let age = parseFloat(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let scr = parseFloat(document.getElementById("serumCreatinine").value);
  let cys = parseFloat(document.getElementById("serumCystatinC").value);
  const isUmol = document.getElementById("serumCreatinineUnitMOL").checked;
  const ckdepic = document.getElementById("ckdepic");
  const ckdepicc = document.getElementById("ckdepicc");
  const ckdepicC = document.getElementById("ckdepicC");

  if (!age || !gender || isNaN(scr) || isNaN(cys)) {
    window.alert("Please provide all the necessary data points!");
    return;
  }

  if (isUmol) {
    scr *= 0.0113;
  }

  if (gender === "Male") {
    ckdepic.value = Math.round(
      142 * Math.pow(Math.min(scr / 0.9, 1), -0.302) *
      Math.pow(Math.max(scr / 0.9, 1), -1.200) *
      Math.pow(0.9938, age)
    );
    ckdepicc.value = Math.round(
      135 * Math.pow(Math.min(scr / 0.9, 1), -0.144) *
      Math.pow(Math.max(scr / 0.9, 1), -0.544) *
      Math.pow(Math.min(cys / 0.8, 1), -0.323) *
      Math.pow(Math.max(cys / 0.8, 1), -0.778) *
      Math.pow(0.9961, age)
    );
    ckdepicC.value = Math.round(
      133 * Math.pow(Math.min(cys / 0.8, 1), -0.499) *
      Math.pow(Math.max(cys / 0.8, 1), -1.328) *
      Math.pow(0.996, age)
    );
  } else {
    ckdepic.value = Math.round(
      142 * Math.pow(Math.min(scr / 0.7, 1), -0.241) *
      Math.pow(Math.max(scr / 0.7, 1), -1.200) *
      Math.pow(0.9938, age) * 1.012
    );
    ckdepicc.value = Math.round(
      135 * Math.pow(Math.min(scr / 0.7, 1), -0.219) *
      Math.pow(Math.max(scr / 0.7, 1), -0.544) *
      Math.pow(Math.min(cys / 0.8, 1), -0.323) *
      Math.pow(Math.max(cys / 0.8, 1), -0.778) *
      Math.pow(0.9961, age) * 0.963
    );
    ckdepicC.value = Math.round(
      133 * Math.pow(Math.min(cys / 0.8, 1), -0.499) *
      Math.pow(Math.max(cys / 0.8, 1), -1.328) *
      Math.pow(0.996, age) * 0.932
    );
  }
}

function calcAge() {
  const yearOfBirth = parseInt(document.getElementById('year').value);
  const ageField = document.getElementById('age');
  
  if (!isNaN(yearOfBirth) && yearOfBirth > 0) {
      const currentYear = new Date().getFullYear();
      const age = currentYear - yearOfBirth;

      if (age >= 0) {
          ageField.value = age;
      } else {
          ageField.value = "";
          alert("Year of birth cannot be in the future!");
      }
  } else {
      ageField.value = "";
  }
}

function calcBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const bmiField = document.getElementById('bmi');
  
  if (height > 0 && weight > 0) {
      const bmi = weight / ((height / 100) ** 2);
      bmiField.value = bmi.toFixed(1);
  } else {
      bmiField.value = "";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const comorbidityRadios = document.getElementsByName('comorbidities');
  const otherComorbidityField = document.getElementById('other-comorbidity');

  comorbidityRadios.forEach(radio => {
      radio.addEventListener('change', function () {
          if (radio.checked) {
              otherComorbidityField.style.display = 'block';
              otherComorbidityField.required = true;
          } else {
              otherComorbidityField.style.display = 'none';
              otherComorbidityField.required = false;
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const textAreas = [
      { id: "comment-mri", limit: 1200 },
      { id: "comment-cect", limit: 1200 },
      { id: "other-comorbidity", limit: 1200, showOnRadio: true },
      { id: "comment-comorbidity", limit: 1200 }
  ];

  textAreas.forEach(({ id, limit, showOnRadio }) => {
      const textArea = document.getElementById(id);
      
      const counter = document.createElement("div");
      counter.id = `${id}-counter`;
      counter.style.fontSize = "0.9em";
      counter.style.fontWeight = "600";
      counter.style.color = "#3b8f9a";
      counter.style.marginBottom = "5px";
      counter.textContent = `${limit} characters remaining`;

      textArea.parentNode.insertBefore(counter, textArea);

      if (showOnRadio) {
          const radioButton = document.getElementById("comorbidity-other");

          radioButton.addEventListener("change", function() {
              if (radioButton.checked) {
                  counter.style.display = "block";
              } else {
                  counter.style.display = "none";
              }
          });

          if (radioButton.checked) {
              counter.style.display = "block";
          } else {
              counter.style.display = "none";
          }
      }

      textArea.addEventListener("input", function() {
          const remaining = limit - textArea.value.length;

          if (remaining < 0) {
              textArea.value = textArea.value.slice(0, limit);
              counter.textContent = "0 characters remaining";
              counter.style.color = "red";
          } else {
              counter.textContent = `${remaining} characters remaining`;
              counter.style.color = "#3b8f9a";
              if (remaining <= 5) {
                counter.style.color = "red";
              }
          }
      });
  });
});

auth.onAuthStateChanged(user => {
  if (user) {
      console.log("User logged in:", user);
  } else {
      console.log("No user is logged in.");
  }
});
