import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1';

class APIClient {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Load token from localStorage
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
      if (this.token) {
        this.setAuthHeader(this.token);
      }
    }

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Clear token and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
            window.location.href = '/auth/login';
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setAuthHeader(token: string) {
    this.token = token;
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token', token);
  }

  clearAuthHeader() {
    this.token = null;
    delete this.client.defaults.headers.common['Authorization'];
    localStorage.removeItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
  }

  // Auth endpoints
  async register(email: string, dob: string) {
    return this.client.post('/auth/register', { email, dob });
  }

  async verifySetup(cybernow_id: string, totp_code: string) {
    return this.client.post('/auth/verify-setup', { cybernow_id, totp_code });
  }

  async login(cybernow_id: string, totp_code: string) {
    return this.client.post('/auth/login', { cybernow_id, totp_code });
  }

  // User endpoints
  async getUserProfile() {
    return this.client.get('/user/profile');
  }

  async updateUserProfile(data: any) {
    return this.client.put('/user/profile', data);
  }

  // Course endpoints
  async getCourses() {
    return this.client.get('/courses');
  }

  async getCourseDetails(courseId: string) {
    return this.client.get(`/courses/${courseId}`);
  }

  async getCourseModules(courseId: string) {
    return this.client.get(`/courses/${courseId}/modules`);
  }

  async getModuleLessons(moduleId: string) {
    return this.client.get(`/modules/${moduleId}/lessons`);
  }

  async getLessonDetails(lessonId: string) {
    return this.client.get(`/lessons/${lessonId}`);
  }

  async enrollCourse(courseId: string) {
    return this.client.post('/courses/enroll', { course_id: courseId });
  }

  // Skills endpoints
  async getUserSkills() {
    return this.client.get('/user/skills');
  }

  async addUserSkill(skillName: string) {
    return this.client.post('/user/skills', { skill_name: skillName });
  }

  // Job endpoints
  async getJobs() {
    return this.client.get('/jobs');
  }

  async getJobMatching() {
    return this.client.get('/job-matching');
  }

  async applyForJob(jobId: string) {
    return this.client.post(`/jobs/${jobId}/apply`, {});
  }

  // Dashboard endpoints
  async getStudentDashboard() {
    return this.client.get('/dashboard/student');
  }

  // Health check
  async healthCheck() {
    return this.client.get('/health');
  }
}

export const apiClient = new APIClient();
export default apiClient;
