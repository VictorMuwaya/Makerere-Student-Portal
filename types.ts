
export interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
  progress: number;
  grade: string;
  color: string;
  credits: number;
  description?: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
}

export interface GradePoint {
  semester: string;
  gpa: number;
  courses: { name: string; code: string; grade: string; gp: number; cu: number }[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'academic' | 'financial' | 'system' | 'social';
  isRead: boolean;
}

export interface ScheduleEvent {
  id: string;
  courseCode: string;
  courseName: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  startTime: string;
  endTime: string;
  location: string;
}
