import DashboardLayout from "@/components/layout/main-layout";
import StudentCard from "@/components/StudentCard";

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StudentCard course="React Basics" progress={70} />
        <StudentCard course="Next.js Fundamentals" progress={40} />
      </div>
    </DashboardLayout>
  );
}
