// Array of procedure questions with multiple choices
const questions = [
  {
    question:
      "In the evacuation drill procedure, where should you gather after exiting the classroom?",
    choices: [
      "a) Inside the building",
      "b) Near the restroom",
      "c) In the parking lot",
      "d) At the vending machines",
    ],
    answer: 2,
  },
  {
    question: "How should you behave during the evacuation drill procedure?",
    choices: [
      "a) Find your friends and leave campus",
      "b) Using the restroom during the evacuation",
      "c) Remaining calm and walk",
      "d) Engaging in embarrassing behaviors",
    ],
    answer: 2,
  },
  {
    question:
      "What should you do with your phone/watch during the lockdown procedure?",
    choices: [
      "a) Keep it on silent mode",
      "b) Use it to contact parents",
      "c) Use it to text with friends",
      "d) Use it for any reason",
    ],
    answer: 0,
  },
  {
    question: "What should you do during a lockdown?",
    choices: [
      "a) Shelter under your desk",
      "b) Panic and scream",
      "c) Use your phone to call someone for help",
      "d) Go into the next classroom",
    ],
    answer: 3,
  },
  {
    question:
      "What should you do if you notice suspicious activity or individuals on campus?",
    choices: [
      "a) Ignore it and continue with your day",
      "b) Report it to a teacher or staff member",
      "c) Confront the individuals directly",
      "d) Gossip about it with your friends",
    ],
    answer: 1,
  },
  {
    question:
      "What is the expectation regarding uniforms and identification on the EVIT campus?",
    choices: [
      "a) No uniform or ID required",
      "b) Wear any type of uniform",
      "c) Wear the EVIT uniform and EVIT ID daily",
      "d) Wear any type of ID",
    ],
    answer: 2,
  },
  {
    question:
      "Why do you need to have your EVIT ID and the EVIT logo of your uniform visible at all times?",
    choices: [
      "a) It is a fashion requirement to promote school spirit.",
      "b) It helps identify you as a student of EVIT to enhance campus security.",
      "c) It is a school rule to annoy students.",
      "d) It is a marketing ploy to promote enrollment at EVIT.",
    ],
    answer: 1,
  },
  {
    question:
      "During the start of each class, what should you do when the music ends?",
    choices: [
      "a) Sit down immediately",
      "b) Stand up and socialize with your peers",
      "c) Gather your belongings and leave the classroom",
      "d) Stand behind your chair",
    ],
    answer: 3,
  },
  {
    question:
      "What is the expectation regarding conversations during announcements and the moment of silence?",
    choices: [
      "a) Engage in conversations with your peers",
      "b) Maintain silence and focus",
      "c) Socialize freely with your classmates",
      "d) High five everyone in the class",
    ],
    answer: 1,
  },
  {
    question:
      "What should you do during the recitation of the Pledge of Allegiance?",
    choices: [
      "a) Ignore it and continue with your work",
      "b) At minimum, be quiet and respectful",
      "c) Engage in conversations with your peers",
      "d) Use your devices for entertainment",
    ],
    answer: 1,
  },
  {
    question: "What should you do if you arrive late and during the pledge?",
    choices: [
      "a) Enter quietly and go to your desk",
      "b) Go directly to the teacher and hand in your tardy pass",
      "c) Stand quiet and still just inside the door",
      "d) Enter loudly and announce your excuse for being late",
    ],
    answer: 2,
  },
  {
    question: "How should you sit at your desk?",
    choices: [
      "a) Slouched down so you are practically laying in the seat of your chair.",
      "b) Upright, awake, engaged in your studies and with feet on the floor.",
      "c) Short naps are understandable and acceptable.",
      "d) Spin the chair when you feel you need to move.",
    ],
    answer: 1,
  },
  {
    question: "At the start of class, what should you do during music time?",
    choices: [
      "a) Sit down immediately",
      "b) Stand up and socialize with your peers",
      "c) Gather your belongings and leave the classroom",
      "d) Stand behind your chair",
    ],
    answer: 2,
  },
  {
    question:
      "What is the expectation regarding conversations during class time?",
    choices: [
      "a) Remain silent and working during class time",
      "b) Collaborate in low voices about course-related topics",
      "c) Socialize freely with the people next to you",
      "d) Walk about and chatter with others",
    ],
    answer: 1,
  },
  {
    question: "What should you do at the last 5 minutes of class?",
    choices: [
      "a) Use my phone to text friends about getting together later",
      "b) Keep working, the teacher will give me enough time to get ready to leave",
      "c) Log out of my computer, pack up,  and visit with friends",
      "d) Use a hall pass and exit campus early",
    ],
    answer: 1,
  },
  {
    question: "What is the expectation regarding grades?",
    choices: [
      "a) Getting an A or B for the quarter",
      "b) As long the quarter grade is not an F",
      "c) There is no expectation on grades",
      "d) Perfect work all the time",
    ],
    answer: 0,
  },
  {
    question: "What is discouraged in terms of academic integrity?",
    choices: [
      "a) Collaborating with classmates on assignments",
      "b) Turning in the AI's code as my own",
      "c) Seeking guidance from the teacher",
      "d) Taking help from tutors or study groups",
    ],
    answer: 1,
  },
  {
    question: "We have two goals in this course.  What are they?",
    choices: [
      "a) Build a portfolio and land an internship",
      "b) No absences and everyday in uniform",
      "c) Get certified and pass the TSA",
      "d) Get an A or B every quarter and have no tardies",
    ],
    answer: 2,
  },
  {
    question:
      "What is the most likely quareter grade if you don't earn a certification in that quarter?",
    choices: ["a) A", "b) B", "c) C", "d) D", "f) F"],
    answer: 2,
  },
  {
    question:
      "What is the consequence of accumulating 10 tardies in one semester?",
    choices: [
      "a) No consequences, tardies are not counted",
      "b) After 10, every two tardies counts as an absence",
      "c) Detention for each tardy",
      "d) Reduced grade on assignments",
    ],
    answer: 1,
  },
  {
    question: "What is the expectation regarding the teacher's desk?",
    choices: [
      "a) Students can freely explore behind the teacher's desk",
      "b) Students should avoid the area behind the teacher's desk",
      "c) Students are encouraged to rearrange items on the teacher's desk",
      "d) Students have complete access to all areas of the classroom",
    ],
    answer: 1,
  },
  {
    question: "What is the expectation regarding teamwork and collaboration?",
    choices: [
      "a) Work independently and avoid relying on others",
      "b) Embrace diversity and include different perspectives",
      "c) Put working code on a privately shared Google Doc for everyone else to copy",
      "d) Only collaborate with the students you like",
    ],
    answer: 1,
  },
  {
    question: "How can you create a trusting environment in the classroom?",
    choices: [
      "a) Follow guidelines on professionalism",
      "b) Be nice only to people in your immediate circle",
      "c) Avoid taking responsibility for the success of other students",
      "d) Stick to yourself and don't get involved",
    ],
    answer: 0,
  },
  {
    question: "What is the expectation regarding critical thinking?",
    choices: [
      "a) Give up, get mad, and quit trying when yoru code doesn't work the first time",
      "b) Use resources and ask for help to define and solve the problem",
      "c) Instead of taking the time to work lessons, create super advanced programs by copying it from YouTube ",
      "d) Give your code to the AI to find the bug and then copy the first thing that comes up",
    ],
    answer: 1,
  },
  {
    question: "What is expected when it comes to time management?",
    choices: [
      "a) Work at a slow pace to ensure accuracy",
      "b) Prioritize tasks and balance accuracy with speed",
      "c) Rely solely on others to meet deadlines",
      "d) Ignore the given timeframe and work independently",
    ],
    answer: 1,
  },
  {
    question: "What is the expectation regarding professionalism?",
    choices: [
      "a) Disregard rules for behavior and appearance",
      "b) Communicate using informal and slang language",
      "c) Represent the class and school in a positive way",
      "d) Complete work as quickly as possible at a low quality",
    ],
    answer: 2,
  },
  {
    question: "What is the expectation regarding self-direction?",
    choices: [
      "a) Wait for the teacher to tell you what to know",
      "b) Only do the work that counts for a grade",
      "c) Look for opportunities to advance yourself",
      "d) Relax when you are done with 'today's work",
    ],
    answer: 2,
  },
  {
    question: "What is the expectation regarding leadership roles?",
    choices: [
      "a) Avoid using your individual strengths",
      "b) Ignore unexpected challenges and avoid solutions",
      "c) Take on leadership roles and manage work plans",
      "d) Exclude others who may have leadership potential",
    ],
    answer: 2,
  },
  {
    question:
      "What is the expectation regarding aligning with the class's values and EVIT's values?",
    choices: [
      "a) Work in a way that goes against the class's values",
      "b) Contribute to the success of the class only",
      "c) Work in a manner that aligns with the class's values",
      "d) Disregard EVIT's values while working",
    ],
    answer: 2,
  },
  {
    question:
      "What is the expectation regarding following laws, rules, and ethical practices?",
    choices: [
      "a) Disregard laws and regulations in the classroom",
      "b) Respect EVIT's property and take responsibility for the campus",
      "c) Ignore harmful conditions in the class or on campus",
      "d) Deviate from policies and procedures in the classroom only when you have a different opinion of how things should be done",
    ],
    answer: 1,
  },
  {
    question:
      "What is the expectation regarding loyalty to the class and EVIT?",
    choices: [
      "a) Show loyalty only to the class's mission and resources",
      "b) Disregard the class's mission and resources",
      "c) Show loyalty to the class and EVIT",
      "d) Prioritize personal interests over the class and EVIT",
    ],
    answer: 2,
  },
  {
    question: "What is the expectation regarding using resources wisely?",
    choices: [
      "a) Use the class's and EVIT's resources carelessly",
      "b) Mismanage resources for personal benefit",
      "c) Use resources carefully for the benefit of the class and EVIT",
      "d) Ignore the availability of resources in the classroom",
    ],
    answer: 2,
  },
  {
    question: "What is the expectation regarding acting with integrity?",
    choices: [
      "a) Be dishonest and unreliable",
      "b) Act in a trustworthy manner",
      "c) Disregard the importance of honesty",
      "d) Ignore the need for reliability",
    ],
    answer: 1,
  },
  {
    question:
      "What is the expectation regarding treating classmates and other students?",
    choices: [
      "a) Handle information inappropriately",
      "b) Work towards creating an unfair and unequal classroom",
      "c) Disrespect classmates and other students",
      "d) Treat classmates and other students with respect",
    ],
    answer: 3,
  },
  {
    question:
      "What is the expectation regarding acting prudently with resources?",
    choices: [
      "a) Misuse and waste school and classroom resources",
      "b) Act responsibly with school and classroom resources",
      "c) Ignore the importance of managing resources",
      "d) Neglect the use of resources in the classroom",
    ],
    answer: 1,
  },
  {
    question: "What is the rule regarding food and drinks in the classroom?",
    choices: [
      "a) Food and drinks are allowed in the classroom.",
      "b) Only water bottles are allowed in the classroom.",
      "c) Food and drinks are allowed during specific times in the classroom.",
      "d) No food or drinks are allowed in the classroom.",
    ],
    answer: 3,
  },
  {
    question: "What is the expectation regarding using resources wisely?",
    choices: [
      "a) Use the class's and EVIT's resources carelessly",
      "b) Mismanage resources for personal benefit",
      "c) Use resources carefully for the benefit of the class and EVIT",
      "d) Ignore the availability of resources in the classroom",
    ],
    answer: 2,
  },
  {
    question: "What is the expectation regarding acting with integrity?",
    choices: [
      "a) Be dishonest and unreliable",
      "b) Act in a trustworthy manner",
      "c) Disregard the importance of honesty",
      "d) Ignore the need for reliability",
    ],
    answer: 1,
  },
  {
    question:
      "What is the expectation regarding treating classmates and other students?",
    choices: [
      "a) Handle information inappropriately",
      "b) Work towards creating an unfair and unequal classroom",
      "c) Disrespect classmates and other students",
      "d) Treat classmates and other students with respect",
    ],
    answer: 3,
  },
  {
    question: "What does it mean to act prudently with resources?",
    choices: [
      "a) Make origami with post-it notes",
      "b) Don't be wasteful with school and classroom resources",
      "c) Pocket pens, pencils, and makers for personal use",
      "d) Leave caps off of markers",
    ],
    answer: 1,
  },
  {
    question: "What is the rule regarding food and drinks in the classroom?",
    choices: [
      "a) Food and drinks are allowed in the classroom.",
      "b) Only water bottles are allowed in the classroom.",
      "c) Food and drinks are allowed during specific times in the classroom.",
      "d) Food is okay as long as long as you don't get caught.",
    ],
    answer: 1,
  },
  {
    question:
      "What should you do with food or drinks before entering the classroom?",
    choices: [
      "a) Leave food and drinks near or outside of the door of the classroom.",
      "b) Share food and drinks with the teacher as you enter the classroom.",
      "c) Put food or drinks in your bag or in the trash before entering the room.",
      "d) Finish consuming food and drinks near the door of the classroom.",
    ],
    answer: 2,
  },
  {
    question:
      "What is the consequence for bringing food or drinks into the classroom?",
    choices: [
      "a) The teacher will eat your food or drinks.",
      "b) The teacher will save the food or drinks until after class.",
      "c) The teacher will throw away the food or drinks.",
      "d) The teacher will ignore food or drinks in the classroom.",
    ],
    answer: 2,
  },
  {
    question: "What is the rule regarding the presence of phones?",
    choices: [
      "a) Phones are allowed if they are face down on your desk and in silent mode.",
      "b) Phones can be accessed to change your music selection.",
      "c) Phones are allowed if your parent or employer texts you during class.",
      "d) Phones are not to be seen during instructional hours in the classroom.",
    ],
    answer: 3,
  },
  {
    question: "What is the procedure for handling phones in the classroom?",
    choices: [
      "a) Keep phones on silent mode and place them on the teacher's desk upon entering the class.",
      "b) Keep phones on silent mode and place them face down on your desk.",
      "c) Keep phones in your lap for quick and discreet access.",
      "d) Turn phones on silent mode and stow them in your bag or pocket.",
    ],
    answer: 3,
  },
  {
    question:
      "What is the consequence for having a phone out in the classroom?",
    choices: [
      "a) The teacher will nag you.",
      "b) The teacher will confiscate the phone.",
      "c) The teacher will send you to the program director.",
      "d) The teacher will write you up and call your parent/guardian.",
    ],
    answer: 1,
  },
  {
    question:
      "Why is it important to follow the rules regarding food, drinks, and phones in the classroom?",
    choices: [
      "a) To maintain a clean and organized learning environment.",
      "b) To prevent distractions and disruptions during class.",
      "c) To comply with the school's policies and guidelines.",
      "d) All of the above.",
    ],
    answer: 3,
  },
  {
    question: "What is the rule regarding student uniforms on campus?",
    choices: [
      "a) Students are required to wear program uniforms only on Fridays.",
      "b) Students must wear  program uniforms only when in class.",
      "c) Students are in program uniforms at all times while on campus.",
      "d) Students can have regular jackets, shirt, or other clothing over the uniform.",
    ],
    answer: 2,
  },
  {
    question: "What is the rule regarding wearing the EVIT ID on campus?",
    choices: [
      "a) Students are not required to have an EVIT ID.",
      "b) Students must have and be prepared to show some form of ID when on campus.",
      "c) Students are required wear and have visible their EVIT ID at all times while on campus.",
      "d) Students are only required to wear the EVIT ID while outside of the classroom.",
    ],
    answer: 2,
  },
  {
    question:
      "What is the procedure for students regarding their EVIT ID and program uniforms?",
    choices: [
      "a) Wear the EVIT ID and program uniform only when in the classroom.",
      "b) Put on the EVIT ID before exiting the vehicle/bus and immediately put on the program uniform if not already wearing it.",
      "c) Wear the EVIT ID and program uniform only on campus and outside of the classroom.",
      "d) The EVIT ID and program uniform are completely optional accessories.",
    ],
    answer: 1,
  },
  {
    question:
      "What is the consequence for being on campus without wearing the program uniform?",
    choices: [
      "a) The teacher will provide you a temporary program uniform.",
      "b) The teacher will call you out and embarrass you in front of the class.",
      "c) Every time after the third time out of uniform, you will be sent home and given an absence.",
      "d) The teacher will make you wear a bright orange shirt to humiliate you.",
    ],
    answer: 2,
  },
  {
    question:
      "When can hall passes be written according to the faculty handbook rule?",
    choices: [
      "a) Only during the first 10 minutes of class.",
      "b) Only during the last 10 minutes of class.",
      "c) This is a trick question, there are no hall passes at EVIT",
      "d) Hall passes can be written at any time during class except for the first and last ten minutes of class.",
    ],
    answer: 3,
  },
  {
    question: "What is the procedure for obtaining and using a hall pass?",
    choices: [
      "a) Fill out the hall pass and bring it to the teacher for a signature and time.",
      "b) Bring the hall pass to the front desk for verification.",
      "c) The teacher will give you hall passes every quarter and you need to keep track of them.",
      "d) Bribe the teacher with food and drinks to get a hall pass.",
    ],
    answer: 0,
  },
  {
    question:
      "What precautionary measures should students out of the classroom on a hall pass take during a fire alarm or lockdown?",
    choices: [
      "a) Proceed to the meet-up area during a fire alarm and remain in place during a lockdown.",
      "b) Lock bathroom or stall doors during a fire alarm and hide under the desk during a lockdown.",
      "c) Perch on the bathroom seat during a fire alarm and proceed to the meet-up area during a lockdown.",
      "d) Lock bathroom or stall doors during a fire alarm and panic during a lockdown.",
    ],
    answer: 0,
  },
  {
    question: "What happens when a student reaches 15 days of absence?",
    choices: [
      "a) The student's credit is withheld, and their graduation date may be affected.",
      "b) The student is automatically dropped from the program.",
      "c) The student's attendance is no longer required.",
      "d) The student needs to reach out to the Attendance office for assistance.",
    ],
    answer: 0,
  },
  {
    question:
      "How many consecutive absences will result in automatic dismissal from the program?",
    choices: [
      "a) 5 absences in a row",
      "b) 8 absences in a row",
      "c) 10 absences in a row",
      "d) 15 absences in a row",
    ],
    answer: 2,
  },
  {
    question:
      "What is the status of a student who doesn't attend EVIT on a day when their home school is not in session but EVIT is?",
    choices: [
      "a) It is not considered an absence.",
      "b) It is considered a tardy.",
      "c) It is considered an absence.",
      "d) It is considered a school holiday.",
    ],
    answer: 2,
  },
  {
    question:
      "Who should a student contact if they need assistance with excessive absences or chronic illness?",
    choices: [
      "a) The Attendance office",
      "b) The Director of Campus Security",
      "c) The Student Catalog office",
      "d) The home school administration",
    ],
    answer: 0,
  },
  {
    question:
      "What is the student's responsibility regarding activities missed during excused absences?",
    choices: [
      "a) The student needst to complete them any time before the end of the quarter.",
      "b) The student needs to complete them in a time equal to the length of the absence.",
      "c) Activities and assignments occuring when you are absent are considered optional.",
      "d) The student should inform their home school about the missed activities.",
    ],
    answer: 1,
  },
  {
    question:
      "What is the student's responsibility regarding activities missed during UNexcused absences?",
    choices: [
      "a) The student needst to complete them any time before the end of the quarter.",
      "b) Activities and assignments occuring during an unexcused absence cannot be made up.",
      "c) Activities and assignments occuring when you are absent are considered optional.",
      "d) The student should inform their home school about the missed activities.",
    ],
    answer: 1,
  },
  {
    question:
      "What is EVIT's policy regarding leaving the campus during school hours?",
    choices: [
      "a) Students are allowed to leave campus at any time.",
      "b) Students may leave campus only if they don't get caught by EVIT faculty, staff, administration or security.",
      "c) Students can use a hall pass to leave campus 10 minutes early.",
      "d) Students are not allowed to leave campus until they are dismissed by a faculty or staff, unless the student has been excused by a parent or guardian.",
    ],
    answer: 3,
  },
  {
    question: "How can a late student enter a classroom?",
    choices: [
      "a) Late students are not allowed to enter classrooms.",
      "b) Late students can enter classrooms with a valid excuse.",
      "c) Late students need to obtain a pass from the desk to enter classrooms.",
      "d) Late students can enter classrooms directly without any requirements.",
    ],
    answer: 2,
  },
  {
    question: "When are hall passes not permitted?",
    choices: [
      "a) During the first and last ten minutes of class.",
      "b) During lunch breaks.",
      "c) This is a trick question, there are no hallpasses at EVIT.",
      "d) Hall passes are permitted at any time during class.",
    ],
    answer: 0,
  },
  {
    question: "What is expected of students while in class?",
    choices: [
      "a) Students are allowed to engage in any task of their choice.",
      "b) Students must be engaged in tasks related to Software and App Design.",
      "c) Students must work only on that day's assignments.",
      "d) Students are not required to be on any specific task while in class.",
    ],
    answer: 1,
  },
  {
    question: "Are students allowed to visit students in other classes?",
    choices: [
      "a) Yes, students are encouraged to visit students in other classes.",
      "b) No, students are prohibited from visiting students in other classes.",
      "c) Students can visit other classes with permission from both teachers.",
      "d) Students can visit other classes only during designated times.",
    ],
    answer: 1,
  },
  {
    question:
      "What is required of you if you are sent to another teacher's class?",
    choices: [
      "a) You must greet the faculty and introduce themselves.",
      "b) You must show a hall pass to the teacher and explain their purpose for being in the class.",
      "c) You must obtain permission from your own teacher before entering another class.",
      "d) You do not need to provide any information when entering another teacher's class.",
    ],
    answer: 1,
  },
  {
    question:
      "What is the requirement for students regarding wearing the EVIT ID while on campus?",
    choices: [
      "a) Students are required to wear the EVIT ID at all times on campus.",
      "b) Students must wear the EVIT ID only during class hours.",
      "c) Students must wear some form of photo identification at all times while on campus.",
      "d) Students must show some form of identification only when asked to do so by school personnel.",
    ],
    answer: 0,
  },
  {
    question: "How are students expected to handle attendance and class time?",
    choices: [
      "a) Students are not required to attend class or be on time.",
      "b) Students are required to make arrangements with the teacher for any missed class time.",
      "c) Students can leave class early with permission from their teacher.",
      "d) Students do not need to make up class time if the absence is excused.",
    ],
    answer: 1,
  },
  {
    question:
      "Who is required to obtain parent/guardian permission for early release from class?",
    choices: [
      "a) Students under the age of 18 years",
      "b) Students 18 years of age and older",
      "c) Both students under the age of 18 years and 18 years of age and older",
      "d) Faculty members",
    ],
    answer: 0,
  },
  {
    question:
      "How should the permission for early release be communicated to the Attendance Office?",
    choices: [
      "a) Via telephone call or email to the Superintendent",
      "b) In person to the teacher",
      "c) Through a written note given to the teacher",
      "d) Via a telephone call or email to the Attendance Office",
    ],
    answer: 3,
  },
  {
    question:
      "What is the campus policy regarding the use of cell phones during academic instructional time?",
    choices: [
      "a) Cell phones are allowed to be used during class.",
      "b) Faculty members have the authority to release students from campus using cell phones.",
      "c) Cell phone use is restricted and not allowed during academic instructional time.",
      "d) Cell phone use is allowed with the permission of a parent or guardian.",
    ],
    answer: 2,
  },
  {
    question: "Under what condition can withholding of grades or credit occur?",
    choices: [
      "a) If the student is absent for any number of days in a semester.",
      "b) If the student is absent for five or more excused or unexcused days in a semester.",
      "c) If the student is absent for ten or more excused or unexcused days in a semester.",
      "d) If the student is absent fifteen or more excused or unexcused days in a semester.",
    ],
    answer: 3,
  },
  {
    question:
      "Whose responsibility is it to notify the teacher if a student will no longer be attending class?",
    choices: [
      "a) The Attendance Office",
      "b) The student's parent or guardian",
      "c) The student",
      "d) The other teachers",
    ],
    answer: 2,
  },
  {
    question: "When is Drop/Add authorized?",
    choices: [
      "a) During the last five days of class",
      "b) After the first five days of class",
      "c) During the first ten days of class",
      "d) Only during the first five days of class",
    ],
    answer: 3,
  },
  {
    question: "What is required in terms of dress code for all courses?",
    choices: [
      "a) Students can wear any type of clothing to class.",
      "b) Class and industry uniforms, safety shoes, or other professional dress are required.",
      "c) Students can wear casual attire to class.",
      "d) There is no specific dress code for students.",
    ],
    answer: 1,
  },
  {
    question:
      "What is the exception regarding food and drink in EVIT classrooms or labs?",
    choices: [
      "a) Only bottled water is allowed.",
      "b) Students can bring any type of food and drink.",
      "c) No food or drink is allowed under any circumstances.",
      "d) Students can bring food and drink with the permission of their teacher.",
    ],
    answer: 0,
  },
  {
    question:
      "Under what conditions can students carry or self-administer medication?",
    choices: [
      "a) Students can carry or self-administer medication without any authorization.",
      "b) Students can carry or self-administer medication if authorized by a school administrator.",
      "c) Students can carry or self-administer medication if authorized by a parent/legal guardian and a physician.",
      "d) Students are not allowed to carry or self-administer any medication.",
    ],
    answer: 2,
  },
  {
    question:
      "Under what circumstances may a student be removed from the campus?",
    choices: [
      "a) If the student is late for class",
      "b) If the student is found using a cell phone during instructional time",
      "c) If school administration has reasonable suspicion that the student is impaired by drugs or alcohol",
      "d) If the student is not wearing the required program uniform",
    ],
    answer: 2,
  },
  {
    question:
      "What action may be taken if a staff or faculty member confirms the suspicion of a student being impaired by drugs or alcohol?",
    choices: [
      "a) The student will be given a warning",
      "b) The student will be suspended from school",
      "c) The student's parent will be contacted",
      "d) Local law enforcement will be contacted",
    ],
    answer: 3,
  },
  {
    question: "What is the requirement for students who drive to school?",
    choices: [
      "a) They must obtain a parking permit from their home school.",
      "b) They must park their vehicle off-campus.",
      "c) They must display an EVIT parking permit in their vehicle.",
      "d) Students are not allowed to drive to school.",
    ],
    answer: 2,
  },
  {
    question:
      "What is the policy regarding the use of roller skates, roller blades, skateboards, scooters, and similar devices on school property?",
    choices: [
      "a) Students are allowed to use them anywhere on school property.",
      "b) Students must dismount or remove them as soon as they are on campus.",
      "c) Students can use them only outdoors on school property.",
      "d) Students are not allowed to bring these items to school.",
    ],
    answer: 1,
  },
  {
    question: "What is prohibited during instructional times?",
    choices: [
      "a) Use of cell phones, electronic devices, and cameras",
      "b) Use of musical instruments and headphones",
      "c) Use of distracting items",
      "d) All of the above",
    ],
    answer: 3,
  },
  {
    question:
      "Under what circumstances can a search of a student's person, bag, or purse be undertaken?",
    choices: [
      "a) If the student is late for class",
      "b) If there is reasonable suspicion that the student is violating the law or Board policy",
      "c) If the student is found using a cell phone during instructional time",
      "d) If the student is not wearing the required program uniform",
    ],
    answer: 1,
  },
  {
    question:
      "What is the consequence for a student found in possession of a firearm or other weapon on school grounds?",
    choices: [
      "a) Suspension for a week",
      "b) Expulsion for one year",
      "c) Verbal warning",
      "d) Mandatory counseling sessions",
    ],
    answer: 1,
  },
  {
    question: "What is the policy regarding gang activity at EVIT?",
    choices: [
      "a) Gang activity is allowed outside of school hours",
      "b) Gang activity is only prohibited inside the classrooms",
      "c) Verbal or visual advertising of gang affiliation is not tolerated",
      "d) Gang activity is permitted as long as it does not interfere with academic performance",
    ],
    answer: 2,
  },
  {
    question: "How does the district handle bullying and harassment?",
    choices: [
      "a) Bullying and harassment are accepted as part of school culture",
      "b) Bullying and harassment are only addressed if they become physical",
      "c) Bullying and harassment are not tolerated in any form",
      "d) Bullying and harassment are only addressed if they occur on school grounds",
    ],
    answer: 2,
  },
  {
    question:
      "What is the policy regarding the use of tobacco, e-cigarettes, or vape devices on campus?",
    choices: [
      "a) Students are allowed to use them in their cars",
      "b) Only faculty and staff are allowed to use them on campus",
      "c) Students are permitted to use them in designated smoking areas",
      "d) These are prohibited to all people at all times and places on campus",
    ],
    answer: 3,
  },
  {
    question:
      "What is the requirement for students regarding their student email?",
    choices: [
      "a) Students must check their student email weekly",
      "b) Students must check their student email twice a week",
      "c) Students must check their student email daily",
      "d) Students are not required to check their student email",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is considered academic misconduct?",
    choices: [
      "a) Participating in group study sessions",
      "b) Asking a classmate for help on a difficult assignment",
      "c) Cheating or plagiarism including submitting AI generated work",
      "d) Discussing ideas with classmates during a class discussion",
    ],
    answer: 2,
  },
  {
    question: "What is prohibited in relation to alcoholic substances?",
    choices: [
      "a) Drinking alcohol outside of school hours",
      "b) Possessing and distributing alcoholic substances on campus",
      "c) Discussing alcoholic substances with classmates",
      "d) Using alcoholic substances as part of a science experiment",
    ],
    answer: 1,
  },
  {
    question:
      "What action is considered damaging property by fire or incendiary device?",
    choices: [
      "a) Writing on the wall of a bathroom stall",
      "b) Painting graffiti on a school wall",
      "c) Starting a fire in a trash bin",
      "d) Writing on a desk with a pen",
    ],
    answer: 2,
  },
  {
    question:
      "What is considered a violation in relation to automobiles on school property?",
    choices: [
      "a) Driving at a reasonable speed within designated areas",
      "b) Parking under covered parking",
      "c) Carpooling with classmates to school",
      "d) Backing into a parking spot",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a violation related to bus rules?",
    choices: [
      "a) Talking to a friend while on the bus",
      "b) Eating a snack on the bus",
      "c) Listening to music with headphones on the bus",
      "d) Violating rules set by the bus driver",
    ],
    answer: 3,
  },
  {
    question:
      "What is prohibited regarding the use, display, or possession of certain instruments?",
    choices: [
      "a) Using musical instruments during music class",
      "b) Displaying instruments in an art exhibition",
      "c) Possessing instruments designed for lethal use",
      "d) Using instruments as part of a science experiment",
    ],
    answer: 2,
  },
  {
    question: "Which of the following actions violates the school rules?",
    choices: [
      "a) A parent calls in to let you out of class early",
      "b) Using a hall pass to Leave campus early",
      "c) Staying after class to get homework help",
      "d) Using the vending machine before class starts",
    ],
    answer: 1,
  },
  {
    question: "Which of the following actions violates the school rules?",
    choices: [
      "a) A parent calls in to let you out of class early",
      "b) Using a the vending machines during class",
      "c) Staying after class to get homework help",
      "d) Using the vending machine before class starts",
    ],
    answer: 1,
  },
  {
    question: "What is considered mistreatment of others?",
    choices: [
      "a) Engaging in a friendly debate with a classmate",
      "b) Accusing someone of discrimination without evidence",
      "c) Respectfully discussing religious beliefs",
      "d) Sharing cultural traditions with classmates",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is conduct that disrupts the educational environment?",
    choices: [
      "a) Expressing one's opinion during a class discussion",
      "b) Using appropriate language in conversations",
      "c) Engaging in public displays of affection",
      "d) Participating in a group study session",
    ],
    answer: 2,
  },
  {
    question: "Which rule relates to dress standards?",
    choices: [
      "a) Using a backpack to carry school supplies",
      "b) Wearing the program uniform with the EVIT logo showing",
      "c) Bringing a water bottle to stay hydrated during class",
      "d) Having a hairstyle of one's choice",
    ],
    answer: 1,
  },
  {
    question: "What action violates the drug policy?",
    choices: [
      "a) Taking prescription medication as prescribed by a doctor",
      "b) Bringing over-the-counter pain relievers to school",
      "c) Sharing personal experiences about substance abuse during a presentation",
      "d) Possessing or using illegal drugs on campus",
    ],
    answer: 3,
  },
  {
    question:
      "What does mutual participation in a physical altercation involve?",
    choices: [
      "a) Working together on a group project",
      "b) Playing a team sport during physical education class",
      "c) Participating in a friendly arm-wrestling match",
      "d) Engaging in a physical fight with another person",
    ],
    answer: 3,
  },
  {
    question: "What action violates the school rules?",
    choices: [
      "a) Wearing the program uniform with the EVIT logo showing",
      "b) Using the signature or initials of another person",
      "c) Participating in a friendly game with classmates",
      "d) Reporting accurate information",
    ],
    answer: 1,
  },
  {
    question: "Which activity is prohibited according to the rules?",
    choices: [
      "a) Participating in SkillsUsa activities during class time",
      "b) Engaging in games of chance for fun",
      "c) Watching YouTube videos about Cloud Computing",
      "d) Participating in games of chance for money",
    ],
    answer: 3,
  },
  {
    question:
      "What is considered a violation of the rules regarding gang activity?",
    choices: [
      "a) Wearing matching outfits with friends",
      "b) Engaging in friendly competition with classmates",
      "c) Verbally or visually displaying gang affiliation",
      "d) Forming study groups with classmates",
    ],
    answer: 2,
  },
  {
    question: "What action is classified as harassment/bullying?",
    choices: [
      "a) Offering support and kindness to classmates",
      "b) Engaging in healthy debates during class discussions",
      "c) Spreading rumors or making derogatory comments about others",
      "d) Collaborating with classmates on a group project",
    ],
    answer: 2,
  },
  {
    question: "What behavior is rough and/or boisterous play?",
    choices: [
      "a) Participating in physical training activities",
      "b) Engaging in outdoor games during physical training",
      "c) Disrupting the classroom environment with excessive noise and play",
      "d) Playing team sports during physical training",
    ],
    answer: 2,
  },
  {
    question:
      "Which action violates the rules regarding the inappropriate use of electronic devices?",
    choices: [
      "a) Using a cell phone to set up a LinkedIn profile",
      "b) Checking text messages while in the classroom",
      "c) Listening to music on AirPods during independent work time",
      "d) Checking how your website looks on the cell phone",
    ],
    answer: 1,
  },
  {
    question:
      "What does knowingly giving false or misleading information entail?",
    choices: [
      "a) Providing accurate and honest information when asked",
      "b) Sharing personal opinions and perspectives during class discussions",
      "c) Spreading false accusations against others with the intention to mislead",
      "d) Reporting accurate information based on facts",
    ],
    answer: 2,
  },
  {
    question:
      "What action is considered a violation of the rules regarding medication or dietary supplements?",
    choices: [
      "a) Following prescribed medication guidelines",
      "b) Obtaining authorization to carry medication on campus",
      "c) Unauthorized possession or distribution of medication or dietary supplements",
      "d) Seeking medical advice from a healthcare professional",
    ],
    answer: 2,
  },
  {
    question:
      "What behavior violates the rules regarding profane language and disrespect?",
    choices: [
      "a) Engaging in open and respectful communication",
      "b) Expressing personal opinions during class discussions",
      "c) Using profanity or showing disrespect towards others",
      "d) Engaging in friendly banter with classmates",
    ],
    answer: 2,
  },
  {
    question:
      "What action is classified as taking something that belongs to someone else without permission?",
    choices: [
      "a) Borrowing a book from the class library",
      "b) Borrowing a pen from a classmate",
      "c) Hiding someone's cell phone as a joke",
      "d) Asking a friend if you can use their phone",
    ],
    answer: 2,
  },
  {
    question: "Which action violates the school safety rules?",
    choices: [
      "a) Walking in the halls",
      "b) Reporting safety hazards to a teacher",
      "c) Running in the halls",
      "d) Leaving computers on at the end of class.",
    ],
    answer: 2,
  },
  {
    question:
      "What behavior constitutes a violation related to sexual contact and conduct?",
    choices: [
      "a) Touching another student with their permission",
      "b) Reporting instances of sexual harassment to a teacher or school authority",
      "c) Engaging in unwanted contact without consent",
      "d) Discussing topics related to sexual health during a sex education class",
    ],
    answer: 2,
  },
  {
    question: "What is prohibited speech according to the rules?",
    choices: [
      "a) Engaging in respectful and constructive debates during class discussions",
      "b) Expressing personal opinions during a speech or presentation",
      "c) Violating valid school restrictions on the time, place, or manner of speech",
      "d) Engaging in open and honest communication with classmates",
    ],
    answer: 2,
  },
  {
    question:
      "Which action is considered a violation of the rules regarding arrival to a scheduled class?",
    choices: [
      "a) Arriving early and hanging out in the classroom",
      "b) Arriving physically in the classroom before the bell has started",
      "c) Putting your bag in the classroom and not arriving until after the bell",
      "d) Starting the day's coursework before class starts",
    ],
    answer: 2,
  },
  {
    question:
      "What behavior constitutes a violation related to threatening the safety of persons or property?",
    choices: [
      "a) Reporting safety concerns to a teacher or school authority",
      "b) Taking precautions to ensure the safety of others",
      "c) Engaging in behavior that poses a threat to the safety of persons or property",
      "d) Participating in safety drills and emergency preparedness activities",
    ],
    answer: 2,
  },
  {
    question:
      "Which action violates the rules regarding the use, distribution, or possession of a tobacco product?",
    choices: [
      "a) Using tobacco products in designated smoking areas",
      "b) Discarding tobacco products in appropriate receptacles",
      "c) Engaging in the use, distribution, or possession of a tobacco product, including vapor pens and E-cigarettes",
      "d) Seeking assistance to quit using tobacco products",
    ],
    answer: 2,
  },
  {
    question:
      "What action is considered an unauthorized presence on district property?",
    choices: [
      "a) Attending classes and school-related activities as a registered student",
      "b) Seeking permission to visit district property for educational purposes",
      "c) Remaining on district property without proper authorization or permission",
      "d) Following school guidelines for accessing district property",
    ],
    answer: 2,
  },
  {
    question:
      "Which absence is considered a violation if it is not excused by the student's parent or legal guardian?",
    choices: [
      "a) An absence due to a documented medical reason",
      "b) An absence for a school-approved activity or event",
      "c) An absence with a valid excuse provided by the student's parent or legal guardian",
      "d) An absence that is not excused by the student's parent or legal guardian and approved by the appropriate school official",
    ],
    answer: 3,
  },
  {
    question:
      "What behavior violates the rules regarding the destruction or defacing of property?",
    choices: [
      "a) Creating artwork within designated areas or with permission from school authorities",
      "b) Reporting instances of damaged or defaced property to school staff",
      "c) Engaging in the destruction or defacing of property belonging to the district, staff, or students, including graffiti and stickers",
      "d) Participating in school-sanctioned activities that involve the modification of property",
    ],
    answer: 2,
  },
];

// Shuffle the questions array using Fisher-Yates algorithm
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//console.log(questions.length);
// Randomly select a subset of questions
const selectedQuestions = shuffleQuestions(questions).slice(0, 25);

// Game variables
let score = 0;
let currentQuestionIndex = 0;

// DOM elements
const questionElement = document.querySelector(".question");
const choicesContainer = document.querySelector(".choices-container");
const feedbackElement = document.querySelector(".feedback");
const scoreElement = document.querySelector("#score");

// Function to display the current question
function displayQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", () => {
      handleAnswer(index, currentQuestion.answer);
    });
    choicesContainer.appendChild(choiceButton);
  });
}

// Function to handle user answer selection
function handleAnswer(selectedIndex, correctAnswerIndex) {
  if (selectedIndex === correctAnswerIndex) {
    score++;
    feedbackElement.textContent = "Correct answer!";
    feedbackElement.classList.add("correct-animation"); // Add animation class

    setTimeout(() => {
      feedbackElement.classList.remove("correct-animation"); // Remove animation class after a delay
    }, 1500);
  } else {
    feedbackElement.textContent = "Incorrect answer!";
  }

  scoreElement.textContent = score;
  currentQuestionIndex++;

  // Check if all questions have been answered
  if (currentQuestionIndex === selectedQuestions.length) {
    endGame();
  } else {
    displayQuestion();
  }
}

// Function to end the game
function endGame() {
  questionElement.textContent =
    "Congratulations! You completed the Procedure Adventure!";
  choicesContainer.style.display = "none";
  feedbackElement.style.display = "none";
}

// Start the game
displayQuestion();
