
import { Course, Assignment, GradePoint, Notification, ScheduleEvent } from './types';

export const MOCK_COURSES: Course[] = [
  { id: '1', name: 'Constitutional Law I', code: 'LAW1101', instructor: 'Dr. John Musoke', progress: 65, grade: 'B+', color: 'bg-red-700', credits: 4, description: 'An introduction to the foundations of Ugandan constitutional law and governance.' },
  { id: '2', name: 'Introduction to Computing', code: 'BIT1101', instructor: 'Prof. Sarah Namukasa', progress: 88, grade: 'A', color: 'bg-slate-800', credits: 3, description: 'Basic computer hardware, software, and introduction to programming concepts.' },
  { id: '3', name: 'Principles of Agriculture', code: 'AGR1101', instructor: 'Dr. Peter Okello', progress: 42, grade: 'C+', color: 'bg-amber-600', credits: 3, description: 'Fundamental concepts of crop production and animal husbandry.' },
  { id: '4', name: 'Development Economics', code: 'ECO1202', instructor: 'Prof. Mary Atwine', progress: 75, grade: 'A-', color: 'bg-emerald-700', credits: 4, description: 'Economic theories focused on low-income countries and development strategies.' },
  { id: '5', name: 'Research Methods', code: 'RES2101', instructor: 'Dr. Isaac Luganda', progress: 20, grade: 'Pending', color: 'bg-indigo-700', credits: 3, description: 'Methodology for conducting academic and professional research.' },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  { id: 'a1', courseId: '1', title: 'Case Note on Attorney General v. Tinyefuza', dueDate: '2023-11-28', status: 'pending' },
  { id: 'a2', courseId: '2', title: 'C++ Programming Lab: Loops & Arrays', dueDate: '2023-11-25', status: 'pending' },
  { id: 'a3', courseId: '4', title: 'Analysis of Vision 2040 Economic Policy', dueDate: '2023-11-20', status: 'submitted' },
  { id: 'a4', courseId: '3', title: 'Soil Fertility Practical Report', dueDate: '2023-12-02', status: 'pending' },
];

export const GPA_DATA: GradePoint[] = [
  { 
    semester: 'Year 1 Sem 1', 
    gpa: 3.8,
    courses: [
      { name: 'Introduction to Law', code: 'LAW1100', grade: 'B+', gp: 4.0, cu: 4 },
      { name: 'Communications Skills', code: 'CSK1101', grade: 'A', gp: 5.0, cu: 3 },
      { name: 'ICT Basics', code: 'BIT1100', grade: 'B', gp: 3.5, cu: 3 },
    ]
  },
  { 
    semester: 'Year 1 Sem 2', 
    gpa: 4.1,
    courses: [
      { name: 'Contracts Law', code: 'LAW1201', grade: 'A-', gp: 4.5, cu: 4 },
      { name: 'Criminal Law', code: 'LAW1202', grade: 'B', gp: 3.5, cu: 4 },
      { name: 'Ethics', code: 'ETH1201', grade: 'A', gp: 5.0, cu: 2 },
    ]
  },
  { 
    semester: 'Year 2 Sem 1', 
    gpa: 4.0,
    courses: [
      { name: 'Tort Law', code: 'LAW2101', grade: 'B+', gp: 4.0, cu: 4 },
      { name: 'Public International Law', code: 'LAW2102', grade: 'B', gp: 3.5, cu: 4 },
      { name: 'Environmental Law', code: 'LAW2103', grade: 'A-', gp: 4.5, cu: 3 },
    ]
  },
  { semester: 'Year 2 Sem 2', gpa: 4.4, courses: [] },
  { semester: 'Year 3 Sem 1', gpa: 4.6, courses: [] },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'Senate Results Approved', message: 'The University Senate has approved the results for the previous semester.', timestamp: '10 mins ago', type: 'academic', isRead: false },
  { id: 'n2', title: 'Tuition Deadline Approaching', message: 'Friendly reminder to complete your functional fees payment.', timestamp: '2 hours ago', type: 'financial', isRead: false },
  { id: 'n3', title: 'Library System Maintenance', message: 'Online catalog down tonight from 11 PM to 3 AM.', timestamp: '5 hours ago', type: 'system', isRead: true },
  { id: 'n4', title: 'Inter-Hall Sports Gala', message: 'Lumumba Hall vs Mitchell Hall football gala this Saturday.', timestamp: '1 day ago', type: 'social', isRead: true }
];

export const MOCK_SCHEDULE: ScheduleEvent[] = [
  { id: 's1', courseCode: 'LAW1101', courseName: 'Constitutional Law I', day: 'Monday', startTime: '08:00', endTime: '10:00', location: 'Lower Lecture Theatre' },
  { id: 's2', courseCode: 'BIT1101', courseName: 'Intro to Computing', day: 'Monday', startTime: '14:00', endTime: '16:00', location: 'College of Computing Lab' },
  { id: 's3', courseCode: 'ECO1202', courseName: 'Development Economics', day: 'Tuesday', startTime: '10:00', endTime: '12:00', location: 'School of Economics RM 4' },
  { id: 's4', courseCode: 'AGR1101', courseName: 'Principles of Agriculture', day: 'Wednesday', startTime: '11:00', endTime: '13:00', location: 'Faculty of Agriculture Hall' },
  { id: 's5', courseCode: 'RES2101', courseName: 'Research Methods', day: 'Thursday', startTime: '09:00', endTime: '11:00', location: 'Main Building Rm 10' },
  { id: 's6', courseCode: 'LAW1101', courseName: 'Constitutional Law I', day: 'Friday', startTime: '14:00', endTime: '16:00', location: 'Lower Lecture Theatre' },
];
