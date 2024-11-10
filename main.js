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
  const patientData = {
    name: document.getElementById("name").value,
    year: document.getElementById("year").value,
    uhid: document.getElementById("uhid").value,
    ipNo: document.getElementById("ipNo").value,
    telNo: document.getElementById("telNo").value,
    location: document.getElementById("location").value,
    age: document.getElementById("age").value,
    sex: document.getElementById("sex").value,
    ht: document.getElementById("ht").value,
    wt: document.getElementById("wt").value,
    bmi: document.getElementById("bmi").value,
    smoking: document.getElementById("smoking").value,
    alcohol: document.getElementById("alcohol").value,
    comorbidities: document.getElementById("comorbidities").value,
    diagnosis: document.getElementById("diagnosis").value,
    presentingSymptoms: document.getElementById("presentingSymptoms").value,
    hematuria: document.getElementById("hematuria").value,
    luts: document.getElementById("luts").value,
    prevTreatment: document.getElementById("prevTreatment").value,
    cytology: document.getElementById("cytology").value,
    cect: document.getElementById("cect").value,
    mri: document.getElementById("mri").value,
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
    comments: document.getElementById("comments").value
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

function searchPatientByUHID(uhid) {
  if (!uhid) {
    document.getElementById("patientData").innerHTML = "";
    return;
  }

  db.collection("patients").where("uhid", "==", uhid).get()
    .then((querySnapshot) => {
      const tbody = document.getElementById("patientData");
      tbody.innerHTML = "";

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const patient = doc.data();

          const row = `<tr>
            <td>${patient.uhid || ""}</td>
            <td>${patient.name || ""}</td>
            <td>${patient.year || ""}</td>
            <td>${patient.age || ""}</td>
            <td>${patient.sex || ""}</td>
            <td>${patient.diagnosis || ""}</td>
            <td>${patient.tumorSize || ""}</td>
            <td>${patient.procedurePerformed || ""}</td>
            <!-- Add more fields here as needed -->
          </tr>`;

          tbody.innerHTML += row;
        });
      } else {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center">No patient found with the given UHID</td></tr>`;
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
          UHID: patient.uhid || "",
          Name: patient.name || "",
          Year: patient.year || "",
          Age: patient.age || "",
          Sex: patient.sex || "",
          Diagnosis: patient.diagnosis || "",
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

function calceGFR(){
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const scr = document.getElementById("serumCreatinine").value;
  const cys = document.getElementById("serumCystatinC").value;
  const ckdepic = document.getElementById("ckdepic");
  const ckdepicc = document.getElementById("ckdepicc");
  const ckdepicC = document.getElementById("ckdepicC");

  if (!age || !sex || !scr || !cys){
    window.alert(
      "Please provide all the necessary data points!"
    );
  }
  else{
    if (sex == "M"){
      ckdepic.value = Math.round(142 * Math.pow(Math.min(scr/0.9, 1), -0.302) * Math.pow(Math.max(scr/0.9, 1), -1.200) * Math.pow(0.9938, age));
      ckdepicc.value = Math.round(135 * Math.pow(Math.min(scr/0.9, 1), -0.144) * Math.pow(Math.max(scr/0.9, 1), -0.544) * Math.pow(Math.min(cys/0.8, 1), -0.323) * Math.pow(Math.max(cys/0.8, 1), -0.778) * Math.pow(0.9961, age));
      ckdepicC.value = Math.round(133 * Math.pow(Math.min(cys/0.8, 1), -0.499) * Math.pow(Math.max(cys/0.8, 1), -1.328) * Math.pow(0.996, age));
    }
    else{
      ckdepic.value = Math.round(142 * Math.pow(Math.min(scr/0.7, 1), -0.241) * Math.pow(Math.max(scr/0.7, 1), -1.200) * Math.pow(0.9938, age) * 1.012);
      ckdepicc.value = Math.round(135 * Math.pow(Math.min(scr/0.7, 1), -0.219) * Math.pow(Math.max(scr/0.7, 1), -0.544) * Math.pow(Math.min(cys/0.8, 1), -0.323) * Math.pow(Math.max(cys/0.8, 1), -0.778) * Math.pow(0.9961, age) * 0.963);
      ckdepicC.value = Math.round(133 * Math.pow(Math.min(cys/0.8, 1), -0.499) * Math.pow(Math.max(cys/0.8, 1), -1.328) * Math.pow(0.996, age) * 0.932);
    }
  }
}

auth.onAuthStateChanged(user => {
  if (user) {
      console.log("User logged in:", user);
  } else {
      console.log("No user is logged in.");
  }
});
