// BANKING
let customer = [
  {
    accountno: 123,
    name: "Sai",
    password: "sai123",
    account_type: "Saving",
    address: "Hyderabad",
    balance: 500,
    transactions: [],
  },
  {
    accountno: 124,
    name: "Ravi",
    password: "ravi123",
    account_type: "Current",
    address: "Secunderabad",
    balance: 10000,
    transactions: [],
  },
  {
    accountno: 125,
    name: "Kiran",
    password: "kiran123",
    account_type: "Saving",
    address: "Kukatpally",
    balance: 5000,
    transactions: [],
  },
];
let loggedInCustomer = null; // Stores currently logged-in customer
// 1.ACCOUNT LOGIN
let login = (accountno, password) => {
  // ← Parameters
  let result = customer.find(
    (customer) =>
      customer.accountno === accountno && customer.password === password,
  );
  if (result) {
    loggedInCustomer = result; // ← Stores customer details
    console.log("Login Successful");
  } else {
    loggedInCustomer = null;
    console.log("Invalid Login Details");
  }
};
login(123, "sai123"); // ← Arguments
// 2.BALANCE ENQUERY
let balanceEnquiry = () => {
  if (!loggedInCustomer) {
    console.log("Please Login First");
    return;
  }
  console.log("Available Balance: ₹" + loggedInCustomer.balance);
};
balanceEnquiry(); // ← Function Call
// 3.DEPOSIT
let deposit = (amount) => {
  // ← Parameter: deposit amount
  if (!loggedInCustomer) {
    console.log("Please Login First");
    return;
  }
  if (amount <= 0) {
    console.log("Enter Valid Amount");
    return;
  }
  loggedInCustomer.balance += amount;
  loggedInCustomer.transactions.push("Deposit: ₹" + amount);
  console.log("Deposited: ₹" + amount);
  console.log("Updated Balance: ₹" + loggedInCustomer.balance);
};
deposit(1000); // ← Argument
// 4.WITHDRAW
let withdraw = (amount) => {
  // ← Parameter: withdrawal amount
  if (!loggedInCustomer) {
    console.log("Please Login First");
    return;
  }

  if (amount <= 0) {
    console.log("Enter Valid Amount");
    return;
  }

  if (amount <= loggedInCustomer.balance) {
    loggedInCustomer.balance -= amount;
    loggedInCustomer.transactions.push("Withdraw: ₹" + amount);
    console.log("Withdrawn: ₹" + amount);
    console.log("Remaining Balance: ₹" + loggedInCustomer.balance);
  } else {
    console.log("Insufficient Balance");
  }
};

withdraw(200); // ← Argument
// 5.LOGOUT
let logout = () => {
  if (!loggedInCustomer) {
    console.log("No Active Login");
    return;
  }
  loggedInCustomer = null; // ← Clears login session
  console.log("Logout Successful");
  console.log("Thank You for Banking!");
};
logout();

// hospetial managment system
let hospitalData = {
  // PATIENT DETAILS
  patients: [
    {
      patientId: 101,
      name: "Ravi",
      age: 25,
      gender: "Male",
      phone: "9876543210",

      medicalHistory: [
        {
          date: "2025-05-10",
          disease: "Fever",
          treatment: "Medication",
          doctorName: "Dr. Kumar",
        },
        {
          date: "2025-08-15",
          disease: "Cold",
          treatment: "Tablets",
          doctorName: "Dr. Ravi",
        },
      ],
    },

    {
      patientId: 102,
      name: "Sai",
      age: 30,
      gender: "Male",
      phone: "9123456780",

      medicalHistory: [
        {
          date: "2025-09-20",
          disease: "Headache",
          treatment: "Medication",
          doctorName: "Dr. Priya",
        },
      ],
    },
  ],

  // DOCTOR DETAILS
  doctors: [
    {
      doctorId: 201,
      doctorName: "Dr. Ravi",
      specialization: "Cardiologist",
      available: true,
      consultationFee: 500,
    },
    {
      doctorId: 202,
      doctorName: "Dr. Suresh",
      specialization: "Dermatologist",
      available: true,
      consultationFee: 400,
    },
    {
      doctorId: 203,
      doctorName: "Dr. Kumar",
      specialization: "Orthopedic",
      available: false,
      consultationFee: 600,
    },
    {
      doctorId: 204,
      doctorName: "Dr. Priya",
      specialization: "Neurologist",
      available: true,
      consultationFee: 700,
    },
  ],

  // APPOINTMENT DETAILS
  appointments: [
    {
      appointmentId: 1,
      patientId: 101,
      doctorId: 201,
      date: "2026-11-20",
      time: "10:00 AM",
      status: "Booked",
    },
  ],

  // PRESCRIPTION DETAILS
  prescriptions: [],

  // BILL DETAILS
  bills: [],

  // PAYMENT DETAILS
  payments: [],
};
// 1. PATIENT REGISTRATION

const patientRegistration = (patientId, name, age, gender, phone) => {
  const existingPatient = hospitalData.patients.find(
    (patient) => patient.patientId === patientId,
  );

  if (existingPatient) {
    console.log("Patient Already Registered");
    return;
  }

  if (!name || age <= 0 || !phone) {
    console.log("Invalid Patient Details");
    return;
  }

  const newPatient = {
    patientId,
    name,
    age,
    gender,
    phone,
    medicalHistory: [],
  };

  hospitalData.patients.push(newPatient);

  console.log("Patient Registration Successful");
  console.log(newPatient);
};
patientRegistration(103, "Kiran", 28, "Male", "9988776655");

// 2. DOCTOR AVAILABILITY

const doctorAvailability = () => {
  const availableDoctors = hospitalData.doctors.filter(
    (doctor) => doctor.available === true,
  );

  if (availableDoctors.length === 0) {
    console.log("No Doctors Available");
    return;
  }

  console.log("----- AVAILABLE DOCTORS -----");

  availableDoctors.forEach((doctor) => {
    console.log(
      "Doctor ID:",
      doctor.doctorId,
      "| Name:",
      doctor.doctorName,
      "| Specialization:",
      doctor.specialization,
      "| Fee: ₹" + doctor.consultationFee,
    );
  });
};
doctorAvailability();

// 3. APPOINTMENT BOOKING

const appointmentBooking = (patientId, doctorId, date, time) => {
  const patient = hospitalData.patients.find(
    (patient) => patient.patientId === patientId,
  );

  if (!patient) {
    console.log("Patient Not Registered");
    return;
  }

  const doctor = hospitalData.doctors.find(
    (doctor) => doctor.doctorId === doctorId,
  );

  if (!doctor || !doctor.available) {
    console.log("Doctor Not Available");
    return;
  }

  const existingAppointment = hospitalData.appointments.find(
    (appointment) =>
      appointment.doctorId === doctorId &&
      appointment.date === date &&
      appointment.time === time &&
      appointment.status === "Booked",
  );

  if (existingAppointment) {
    console.log("This Time Slot Is Already Booked");
    return;
  }

  const newAppointment = {
    appointmentId: hospitalData.appointments.length + 1,
    patientId,
    doctorId,
    date,
    time,
    status: "Booked",
  };

  hospitalData.appointments.push(newAppointment);

  console.log("Appointment Booked Successfully");
  console.log(newAppointment);
};
appointmentBooking(103, 201, "2026-11-20", "10:00 AM");

// 4. PATIENT HISTORY

const patientHistory = (patientId) => {
  const patient = hospitalData.patients.find(
    (patient) => patient.patientId === patientId,
  );

  if (!patient) {
    console.log("Patient Not Found");
    return;
  }

  console.log("Patient Name:", patient.name);
  console.log("----- MEDICAL HISTORY -----");

  if (patient.medicalHistory.length === 0) {
    console.log("No Previous Medical History");
    return;
  }

  patient.medicalHistory.forEach((record, index) => {
    console.log("Record:", index + 1);
    console.log("Date:", record.date);
    console.log("Disease:", record.disease);
    console.log("Treatment:", record.treatment);
    console.log("Doctor:", record.doctorName);
  });
};
patientHistory(103);

// 5. GENERATE PRESCRIPTION

const generatePrescription = (
  patientId,
  doctorId,
  appointmentId,
  diagnosis,
  medicines,
  instructions,
) => {
  const patient = hospitalData.patients.find(
    (patient) => patient.patientId === patientId,
  );

  const doctor = hospitalData.doctors.find(
    (doctor) => doctor.doctorId === doctorId,
  );

  const appointment = hospitalData.appointments.find(
    (appointment) =>
      appointment.appointmentId === appointmentId &&
      appointment.patientId === patientId &&
      appointment.doctorId === doctorId &&
      appointment.status === "Booked",
  );

  if (!patient || !doctor || !appointment) {
    console.log("Invalid Patient, Doctor or Appointment");
    return;
  }

  if (!diagnosis || !Array.isArray(medicines) || medicines.length === 0) {
    console.log("Invalid Prescription Details");
    return;
  }

  const prescription = {
    prescriptionId: hospitalData.prescriptions.length + 1,
    patientId,
    doctorId,
    appointmentId,
    diagnosis,
    medicines,
    instructions,
    date: appointment.date,
  };

  hospitalData.prescriptions.push(prescription);

  patient.medicalHistory.push({
    date: appointment.date,
    disease: diagnosis,
    treatment: medicines.map((medicine) => medicine.name).join(", "),
    doctorName: doctor.doctorName,
  });

  console.log("Prescription Generated Successfully");
  console.log(prescription);
};
generatePrescription(
  103,
  201,
  1,
  "Fever",
  [
    { name: "Medicine A", dosage: "1 tablet", duration: "3 days" },
    { name: "Medicine B", dosage: "1 tablet", duration: "2 days" },
  ],
  "Take medicines as directed by the doctor",
);

// 6. GENERATE BILL

const generateBill = (patientId, appointmentId, treatmentCharges) => {
  const patient = hospitalData.patients.find(
    (patient) => patient.patientId === patientId,
  );

  const appointment = hospitalData.appointments.find(
    (appointment) =>
      appointment.appointmentId === appointmentId &&
      appointment.patientId === patientId &&
      appointment.status === "Booked",
  );

  if (!patient || !appointment) {
    console.log("Invalid Patient or Appointment");
    return;
  }

  const doctor = hospitalData.doctors.find(
    (doctor) => doctor.doctorId === appointment.doctorId,
  );

  if (!doctor || !Number.isFinite(treatmentCharges) || treatmentCharges < 0) {
    console.log("Invalid Billing Details");
    return;
  }

  const existingBill = hospitalData.bills.find(
    (bill) => bill.appointmentId === appointmentId,
  );

  if (existingBill) {
    console.log("Bill Already Generated");
    return;
  }

  const totalAmount = doctor.consultationFee + treatmentCharges;

  const bill = {
    billId: hospitalData.bills.length + 1,
    patientId,
    appointmentId,
    consultationFee: doctor.consultationFee,
    treatmentCharges,
    totalAmount,
    paymentStatus: "Pending",
  };

  hospitalData.bills.push(bill);

  console.log("----- HOSPITAL BILL -----");
  console.log("Patient:", patient.name);
  console.log("Consultation Fee: ₹" + doctor.consultationFee);
  console.log("Treatment Charges: ₹" + treatmentCharges);
  console.log("Total Amount: ₹" + totalAmount);
};

generateBill(103, 1, 1000);
// 7. PAYMENT

const payment = (billId, paymentMode) => {
  const bill = hospitalData.bills.find((bill) => bill.billId === billId);

  if (!bill) {
    console.log("Bill Not Found");
    return;
  }

  if (bill.paymentStatus === "Paid") {
    console.log("Payment Already Completed");
    return;
  }

  const validModes = ["UPI", "Cash", "Card"];

  if (!validModes.includes(paymentMode)) {
    console.log("Invalid Payment Mode");
    return;
  }

  const paymentDetails = {
    paymentId: hospitalData.payments.length + 1,
    billId,
    amount: bill.totalAmount,
    paymentMode,
    paymentStatus: "Success",
  };

  hospitalData.payments.push(paymentDetails);

  bill.paymentStatus = "Paid";

  console.log("Payment Successful");
  console.log(paymentDetails);
};
payment(1, "UPI");
