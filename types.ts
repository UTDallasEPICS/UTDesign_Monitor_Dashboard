export interface User {
    cuid: string;
    name: string;
    email: string;
    role: string;
    dashboards: Dashboard[];
  }