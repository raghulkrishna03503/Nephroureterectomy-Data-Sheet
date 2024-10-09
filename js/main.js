const firebaseConfig = {
  apiKey: "AIzaSyDEGxdd4ug0e998EQ8cZtw59ZPFmfPq_zQ",
  authDomain: "fir-website-3ccb5.firebaseapp.com",
  projectId: "fir-website-3ccb5",
  storageBucket: "fir-website-3ccb5.appspot.com",
  messagingSenderId: "88427595026",
  appId: "1:88427595026:web:d3b8f0764db919a7b09fcb"
};
  
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
  
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      checkUserType(user.uid);
    })
    .catch(error => {
      alert("Error signing in: Invalid Credentials");
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

function registerUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userType = document.getElementById("userType").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      return db.collection("users").doc(userCredential.user.uid).set({
        userType: userType
      });
    })
    .then(() => {
      if (userType === 'admin') {
        window.location.href = "adminDashboard.html";
      } else {
        window.location.href = "patientDashboard.html";
      }
    })
    .catch(error => {
      console.error("Error registering:", error);
    });
}
  
function checkUserType(userId) {
  db.collection("users").doc(userId).get().then(doc => {
    if (doc.exists) {
      const userType = doc.data().userType;
      if (userType === 'admin') {
        window.location.href = "adminDashboard.html";
      } else {
        window.location.href = "patientDashboard.html";
      }
    }
  });
} 

function searchPatients(searchValue) {
  db.collection("patients").where("UHID", "==", searchValue).get()
    .then(querySnapshot => {
      const tbody = document.getElementById("patientData");
      tbody.innerHTML = "";
      querySnapshot.forEach(doc => {
        const patient = doc.data();
        const row = `<tr>
                      <td>${patient.UHID}</td>
                      <td>${patient.name}</td>
                      <!-- Add other fields similarly -->
                      </tr>`;
        tbody.innerHTML += row;
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}
  