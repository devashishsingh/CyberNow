export interface User {
  id: string;
  cybernow_id: string;
  email: string;
  role: 'student' | 'mentor' | 'instructor' | 'admin';
  profile?: {
    full_name: string;
    phone?: string;
    city?: string;
    bio?: string;
  };
}

export interface AuthResponse {
  success: boolean;
  data?: {
    jwt_token: string;
    user_id: string;
    cybernow_id: string;
    role: string;
  };
  error?: string;
  platform?: string;
}

export interface RegisterRequest {
  email: string;
  dob: string;
}

export interface LoginRequest {
  cybernow_id: string;
  totp_code: string;
}

export interface VerifySetupRequest {
  cybernow_id: string;
  totp_code: string;
}

export interface RegisterResponse {
  success: boolean;
  data?: {
    cybernow_id: string;
    qr_code_url: string;
    secret: string;
  };
  error?: string;
  platform?: string;
}

export interface Skill {
  id: string;
  user_id: string;
  skill_name: string;
  proficiency_level: 'beginner' | 'intermediate' | 'advanced';
  verified: boolean;
  acquired_at: string;
}

export interface Job {
  id: string;
  company_name: string;
  job_title: string;
  description: string;
  salary_range: string;
  location: string;
  job_type: string;
  skills_required: string[];
}

export interface JobMatchingResult {
  success: boolean;
  data?: {
    job_id: string;
    job_title: string;
    company_name: string;
    match_percentage: number;
    matched_skills: string[];
    missing_skills: string[];
    ready_now: boolean;
    ready_in_weeks: number;
    message: string;
  };
  error?: string;
  platform?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration_weeks: number;
  difficulty_level: string;
  price: number;
  instructor_id?: string;
  status: string;
  modules?: Module[];
}

export interface Module {
  id: string;
  course_id: string;
  module_number: number;
  title: string;
  description: string;
  duration_hours: number;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  module_id: string;
  lesson_number: number;
  title: string;
  description?: string;
  video_url?: string;
  slides_url?: string;
  duration_minutes: number;
  what_youll_learn?: string[];
  why_it_matters?: string;
  skills_gained?: string[];
  real_world_example?: string;
}

export interface Dashboard {
  success: boolean;
  data?: {
    current_course?: Course;
    progress_percentage: number;
    acquired_skills: Skill[];
    job_recommendations: JobMatchingResult[];
    pending_assessments: any[];
    next_live_session?: any;
  };
  error?: string;
  platform?: string;
}
