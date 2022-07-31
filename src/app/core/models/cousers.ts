import { shortUser } from "./user";

export interface Course {
    uid?: string;
    title: string;
    description: string;
    video: string;
    exam: Exam;
    author: shortUser;
    createdAt?: string;
}

export interface Exam {
    questions: Question[];
}

export interface Question {
    question: string;
    answers: Answer[];
}

export interface Answer {
    text: string;
    correct: boolean;
}

export interface UserCertificate {
    title: string;
    courseUID: string;
    courseName: string;
    user: shortUser
    gradePercent: number;
    examDate: any;
}