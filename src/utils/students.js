export const loginCredentials = {
    uid: '109429',
    password:'54321'
};

export const leave =[
   {
    number:0,
    txt: "Total Application",
    color:"white"
  }, 
   {
    number:0,
    txt: "Pending Review",
    color:"amber-500"
  },
   {
    number:0,
    txt: "Approved",
    color:'sky-500'
  },
   {
    number:0,
    txt: "Rejected",
    color:"green-500"
  }
]

export const students = [
  {
    uid: "108429",
    password: "12345",
    name: "Deepak Kumar",
    email: "kumar.deepk.cg.s@gmail.com",
    mobile: "9472646841",
    university: "SUxCG 714",

    image: "https://avatars.githubusercontent.com/u/225372697?v=4",

    attendance: [{
      
      semester: "Semester 1",
      total: 271,
      present: 251,
      bonus: 0,
      percentLabel: 80,
      startDate: "05/08/2025",
      endDate: "28/01/2026",
    },{
      semester: "Semester 2",
      present: 208,
      total: 208,
      bonus: 0,
      percentLabel: 100,
      startDate: "29/01/2026",
      endDate: "30/06/2026",
    }],

    subjects: [
      { code: "SU11", name: "GIT & GITHUB" },
      { code: "SU12", name: "C Language" },
      { code: "SU13", name: "HTML/CSS/JS" },
      { code: "SU14", name: "UI/UX FIGMA" },
      { code: "SU15", name: "MATHS" },
      { code: "SU16", name: "JavaScript" },
      { code: "SU0201", name: "ReactJS" },
      { code: "SU0202", name: "NodeJS" },
      { code: "SU0203", name: "NoSQL" },
      { code: "SU0204", name: "OOPS" },
      { code: "SU0205", name: "Maths 2" },
      { code: "SU0206", name: "EVS" },
      { code: "SU0207", name: "IR 01" },
      { code: "SU0208", name: "IR 02" },
    ],

    mentors: [
      {
        name: "Ankita",
        batch: "SUxCG 714",
      },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],
  },
];
export const loginDetails = (uid, password) => {
  const student = students.find(
    (s) => s.uid === uid && s.password === password,
  );

  if (!student) return false;

  localStorage.setItem("user", JSON.stringify(student));

  return true;
};