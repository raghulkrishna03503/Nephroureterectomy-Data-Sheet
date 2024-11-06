// const firebaseConfig = {
  // apiKey: "AIzaSyAs6nbNK0LZCA0KRnsFxP1-MQVx3cqRWM4",
  // authDomain: "nephroureterectomy-data-sheet.firebaseapp.com",
  // projectId: "nephroureterectomy-data-sheet",
  // storageBucket: "nephroureterectomy-data-sheet.firebasestorage.app",
  // messagingSenderId: "1094238243732",
  // appId: "1:1094238243732:web:25d4b124bb6e433ec99d81"
// };
  
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore();
  
// // function loginUser(event) {
// //   event.preventDefault();
// //   const email = document.getElementById("email").value;
// //   const password = document.getElementById("password").value;

// //   auth.signInWithEmailAndPassword(email, password)
// //     .then(userCredential => {
// //       const user = userCredential.user;
// //       checkUserType(user.uid);
// //     })
// //     .catch(error => {
// //       alert("Error signing in: Invalid Credentials");
// //     });
// // }

// function submitPatientData(event) {
//   event.preventDefault();
//   const patientData = {
//     name: document.getElementById("name").value,
//     year: document.getElementById("year").value,
//     uhid: document.getElementById("uhid").value,
//     ipNo: document.getElementById("ipNo").value,
//     telNo: document.getElementById("telNo").value,
//     location: document.getElementById("location").value,
//     age: document.getElementById("age").value,
//     sex: document.getElementById("sex").value,
//     ht: document.getElementById("ht").value,
//     wt: document.getElementById("wt").value,
//     bmi: document.getElementById("bmi").value,
//     smoking: document.getElementById("smoking").value,
//     alcohol: document.getElementById("alcohol").value,
//     comorbidities: document.getElementById("comorbidities").value,
//     diagnosis: document.getElementById("diagnosis").value,
//     presentingSymptoms: document.getElementById("presentingSymptoms").value,
//     hematuria: document.getElementById("hematuria").value,
//     luts: document.getElementById("luts").value,
//     prevTreatment: document.getElementById("prevTreatment").value,
//     cytology: document.getElementById("cytology").value,
//     cect: document.getElementById("cect").value,
//     mri: document.getElementById("mri").value,
//     pet: document.getElementById("pet").value,
//     bladderCuff: document.getElementById("bladderCuff").value,
//     tumorSize: document.getElementById("tumorSize").value,
//     tumorLocation: document.getElementById("tumorLocation").value,
//     preOpBiopsy: document.getElementById("preOpBiopsy").value,
//     preOpCr: document.getElementById("preOpCr").value,
//     preOpEgfr: document.getElementById("preOpEGFR").value,
//     lowerTractStatus: document.getElementById("lowerTractStatus").value,
//     asa: document.getElementById("asa").value,
//     bladderTumour: document.getElementById("bladderTumour").value,
//     neoAdjuvantTherapy: document.getElementById("neoAdjuvantTherapy").value,
//     chemotherapyRegimen: document.getElementById("chemoRegimen").value,
//     noOfNacCycles: document.getElementById("noOfNacCycles").value,
//     approach: document.getElementById("approach").value,
//     procedurePerformed: document.getElementById("procedurePerformed").value,
//     doP: document.getElementById("dop").value,
//     opTime: document.getElementById("opTime").value,
//     postOpMitomycin: document.getElementById("postOpMitomycin").value,
//     los: document.getElementById("los").value,
//     bloodLoss: document.getElementById("bloodLoss").value,
//     intraopComp: document.getElementById("intraopComp").value,
//     bloodTransfusion: document.getElementById("bloodTransfusion").value,
//     normDiet: document.getElementById("normDiet").value,
//     ambulation: document.getElementById("ambulation").value,
//     fitForDisch: document.getElementById("fitForDisch").value,
//     postOpComp: document.getElementById("postOpComp").value,
//     postOpCr: document.getElementById("postOpCr").value,
//     hpr: document.getElementById("hpr").value,
//     stage: document.getElementById("stage").value,
//     adjuvantChemo: document.getElementById("adjuvantChemo").value,
//     noOfAdjChemoCycles: document.getElementById("noOfAdjChemoCycles").value,
//     followupCysto: document.getElementById("followupCysto").value,
//     cystoscopyFindings: document.getElementById("cystoscopyFindings").value,
//     threeMonthCreatinine: document.getElementById("threeMonthCreatinine").value,
//     threeMonthEgfr: document.getElementById("threeMonthEgfr").value,
//     threeMonthCt: document.getElementById("threeMonthCt").value,
//     sixMonthCreatinine: document.getElementById("sixMonthCreatinine").value,
//     sixMonthEgfr: document.getElementById("sixMonthEgfr").value,
//     sixMonthCt: document.getElementById("sixMonthCt").value,
//     twelveMonthCreatinine: document.getElementById("twelveMonthCreatinine").value,
//     twelveMonthEgfr: document.getElementById("twelveMonthEgfr").value,
//     twelveMonthCt: document.getElementById("twelveMonthCt").value,
//     twentyFourMonthCreatinine: document.getElementById("twentyFourMonthCreatinine").value,
//     twentyFourMonthEgfr: document.getElementById("twentyFourMonthEgfr").value,
//     twentyFourMonthCt: document.getElementById("twentyFourMonthCt").value,
//     thirtySixMonthCreatinine: document.getElementById("thirtySixMonthCreatinine").value,
//     thirtySixMonthEgfr: document.getElementById("thirtySixMonthEgfr").value,
//     thirtySixMonthCt: document.getElementById("thirtySixMonthCt").value,
//     dateOfLastFollowUp: document.getElementById("dateOfLastFollowUp").value,
//     recurrence: document.getElementById("recurrence").value,
//     comments: document.getElementById("comments").value
//   };
//   const userId = auth.currentUser.uid;
//   db.collection("patients").doc(userId).set(patientData)
//     .then(() => {
//       alert("Patient data saved successfully!");
//     })
//     .catch(error => {
//       console.error("Error saving patient data:", error);
//       alert("Error saving data. Please try again.");
//     });
// }

// // function registerUser(event) {
// //   event.preventDefault();
// //   const email = document.getElementById("email").value;
// //   const password = document.getElementById("password").value;
// //   const userType = document.getElementById("userType").value;

// //   auth.createUserWithEmailAndPassword(email, password)
// //     .then(userCredential => {
// //       return db.collection("users").doc(userCredential.user.uid).set({
// //         userType: userType
// //       });
// //     })
// //     .then(() => {
// //       if (userType === 'admin') {
// //         window.location.href = "adminDashboard.html";
// //       } else {
// //         window.location.href = "patientDashboard.html";
// //       }
// //     })
// //     .catch(error => {
// //       console.error("Error registering:", error);
// //     });
// // }
  
// function checkUserType(userId) {
//   db.collection("users").doc(userId).get().then(doc => {
//     if (doc.exists) {
//       const userType = doc.data().userType;
//       if (userType === 'admin') {
//         window.location.href = "adminDashboard.html";
//       } else {
//         window.location.href = "patientDashboard.html";
//       }
//     }
//   });
// } 

// function searchPatients(searchValue) {
//   db.collection("patients").where("UHID", "==", searchValue).get()
//     .then(querySnapshot => {
//       const tbody = document.getElementById("patientData");
//       tbody.innerHTML = "";
//       querySnapshot.forEach(doc => {
//         const patient = doc.data();
//         const row = `<tr>
//                       <td>${patient.UHID}</td>
//                       <td>${patient.name}</td>
//                       <!-- Add other fields similarly -->
//                       </tr>`;
//         tbody.innerHTML += row;
//       });
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// }


// function loadPatientData() {
//   const userId = auth.currentUser.uid;
  
//   db.collection("patients").doc(userId).get()
//     .then((doc) => {
//       if (doc.exists) {
//         const patientData = doc.data();

//         // Set placeholders if data exists
//         document.getElementById("name").value = patientData.name || "";
//         document.getElementById("year").value = patientData.year || "";
//         document.getElementById("uhid").value = patientData.uhid || "";
//         document.getElementById("ipNo").value = patientData.ipNo || "";
//         document.getElementById("telNo").value = patientData.telNo || "";
//         document.getElementById("location").value = patientData.location || "";
//         document.getElementById("age").value = patientData.age || "";
//         document.getElementById("sex").value = patientData.sex || "";
//         document.getElementById("ht").value = patientData.ht || "";
//         document.getElementById("wt").value = patientData.wt || "";
//         document.getElementById("bmi").value = patientData.bmi || "";
//         document.getElementById("smoking").value = patientData.smoking || "";
//         document.getElementById("alcohol").value = patientData.alcohol || "";
//         document.getElementById("comorbidities").value = patientData.comorbidities || "";
//         document.getElementById("diagnosis").value = patientData.diagnosis || "";
//         document.getElementById("presentingSymptoms").value = patientData.presentingSymptoms || "";
//         document.getElementById("hematuria").value = patientData.hematuria || "";
//         document.getElementById("luts").value = patientData.luts || "";
//         document.getElementById("prevTreatment").value = patientData.prevTreatment || "";
//         document.getElementById("cytology").value = patientData.cytology || "";
//         document.getElementById("cect").value = patientData.cect || "";
//         document.getElementById("mri").value = patientData.mri || "";
//         document.getElementById("pet").value = patientData.pet || "";
//         document.getElementById("bladderCuff").value = patientData.bladderCuff || "";
//         document.getElementById("tumorSize").value = patientData.tumorSize || "";
//         document.getElementById("tumorLocation").value = patientData.tumorLocation || "";
//         document.getElementById("preOpBiopsy").value = patientData.preOpBiopsy || "";
//         document.getElementById("preOpCr").value = patientData.preOpCr || "";
//         document.getElementById("preOpEGFR").value = patientData.preOpEgfr || "";
//         document.getElementById("lowerTractStatus").value = patientData.lowerTractStatus || "";
//         document.getElementById("asa").value = patientData.asa || "";
//         document.getElementById("bladderTumour").value = patientData.bladderTumour || "";
//         document.getElementById("neoAdjuvantTherapy").value = patientData.neoAdjuvantTherapy || "";
//         document.getElementById("chemoRegimen").value = patientData.chemotherapyRegimen || "";
//         document.getElementById("noOfNacCycles").value = patientData.noOfNacCycles || "";
//         document.getElementById("approach").value = patientData.approach || "";
//         document.getElementById("procedurePerformed").value = patientData.procedurePerformed || "";
//         document.getElementById("dop").value = patientData.doP || "";
//         document.getElementById("opTime").value = patientData.opTime || "";
//         document.getElementById("postOpMitomycin").value = patientData.postOpMitomycin || "";
//         document.getElementById("los").value = patientData.los || "";
//         document.getElementById("bloodLoss").value = patientData.bloodLoss || "";
//         document.getElementById("intraopComp").value = patientData.intraopComp || "";
//         document.getElementById("bloodTransfusion").value = patientData.bloodTransfusion || "";
//         document.getElementById("normDiet").value = patientData.normDiet || "";
//         document.getElementById("ambulation").value = patientData.ambulation || "";
//         document.getElementById("fitForDisch").value = patientData.fitForDisch || "";
//         document.getElementById("postOpComp").value = patientData.postOpComp || "";
//         document.getElementById("postOpCr").value = patientData.postOpCr || "";
//         document.getElementById("hpr").value = patientData.hpr || "";
//         document.getElementById("stage").value = patientData.stage || "";
//         document.getElementById("adjuvantChemo").value = patientData.adjuvantChemo || "";
//         document.getElementById("noOfAdjChemoCycles").value = patientData.noOfAdjChemoCycles || "";
//         document.getElementById("followupCysto").value = patientData.followupCysto || "";
//         document.getElementById("cystoscopyFindings").value = patientData.cystoscopyFindings || "";
//         document.getElementById("threeMonthCreatinine").value = patientData.threeMonthCreatinine || "";
//         document.getElementById("threeMonthEgfr").value = patientData.threeMonthEgfr || "";
//         document.getElementById("threeMonthCt").value = patientData.threeMonthCt || "";
//         document.getElementById("sixMonthCreatinine").value = patientData.sixMonthCreatinine || "";
//         document.getElementById("sixMonthEgfr").value = patientData.sixMonthEgfr || "";
//         document.getElementById("sixMonthCt").value = patientData.sixMonthCt || "";
//         document.getElementById("twelveMonthCreatinine").value = patientData.twelveMonthCreatinine || "";
//         document.getElementById("twelveMonthEgfr").value = patientData.twelveMonthEgfr || "";
//         document.getElementById("twelveMonthCt").value = patientData.twelveMonthCt || "";
//         document.getElementById("twentyFourMonthCreatinine").value = patientData.twentyFourMonthCreatinine || "";
//         document.getElementById("twentyFourMonthEgfr").value = patientData.twentyFourMonthEgfr || "";
//         document.getElementById("twentyFourMonthCt").value = patientData.twentyFourMonthCt || "";
//         document.getElementById("thirtySixMonthCreatinine").value = patientData.thirtySixMonthCreatinine || "";
//         document.getElementById("thirtySixMonthEgfr").value = patientData.thirtySixMonthEgfr || "";
//         document.getElementById("thirtySixMonthCt").value = patientData.thirtySixMonthCt || "";
//         document.getElementById("dateOfLastFollowUp").value = patientData.dateOfLastFollowUp || "";
//         document.getElementById("recurrence").value = patientData.recurrence || "";
//         document.getElementById("comments").value = patientData.comments || "";

//       } else {
//         console.log("No patient data found.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching patient data:", error);
//     });
// }

// function searchPatientByUHID(uhid) {
//   if (!uhid) {
//     document.getElementById("patientData").innerHTML = "";
//     return;
//   }

//   db.collection("patients").where("uhid", "==", uhid).get()
//     .then((querySnapshot) => {
//       const tbody = document.getElementById("patientData");
//       tbody.innerHTML = "";

//       if (!querySnapshot.empty) {
//         querySnapshot.forEach((doc) => {
//           const patient = doc.data();

//           const row = `<tr>
//             <td>${patient.uhid || ""}</td>
//             <td>${patient.name || ""}</td>
//             <td>${patient.year || ""}</td>
//             <td>${patient.age || ""}</td>
//             <td>${patient.sex || ""}</td>
//             <td>${patient.diagnosis || ""}</td>
//             <td>${patient.tumorSize || ""}</td>
//             <td>${patient.procedurePerformed || ""}</td>
//             <!-- Add more fields here as needed -->
//           </tr>`;

//           tbody.innerHTML += row;
//         });
//       } else {
//         tbody.innerHTML = `<tr><td colspan="8" class="text-center">No patient found with the given UHID</td></tr>`;
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching patient data: ", error);
//     });
// }

// function downloadExcel() {
//   db.collection("patients").get()
//     .then((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         const patient = doc.data();
//         const patientData = {
//           UHID: patient.uhid || "",
//           Name: patient.name || "",
//           Year: patient.year || "",
//           Age: patient.age || "",
//           Sex: patient.sex || "",
//           Diagnosis: patient.diagnosis || "",
//           "Tumor Size (cm)": patient.tumorSize || "",
//           "Procedure Performed": patient.procedurePerformed || "",
//         };
//         data.push(patientData);
//       });
//       const ws = XLSX.utils.json_to_sheet(data);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, "Patients Data");
//       XLSX.writeFile(wb, "Patients_Report.xlsx");
//     })
//     .catch((error) => {
//       console.error("Error fetching patient data for Excel download: ", error);
//     });
// }

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

auth.onAuthStateChanged(user => {
  if (user) {
      console.log("User logged in:", user);
  } else {
      console.log("No user is logged in.");
  }
});
