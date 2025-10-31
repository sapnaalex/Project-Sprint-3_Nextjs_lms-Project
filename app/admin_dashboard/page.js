import DashboardLayout from "@/components/layout/main-layout";
import AdminCard from "@/components/AdminCard";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AdminCard title="Total Students" value="120" />
        <AdminCard title="Courses Created" value="8" />
        <AdminCard title="Pending Reviews" value="3" />
      </div>
    </DashboardLayout>
  );
}
