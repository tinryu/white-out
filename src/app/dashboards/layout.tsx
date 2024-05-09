import TopNav from "../components/TopNav";

const menu = [
  {title: 'Overview', link: '/dashboards'},
  {title: 'Targets', link: '/dashboards/targets'},
  {title: 'Budget', link: '/dashboards/budget'},
  {title: 'Users', link: '/dashboards/users'},
  {title: 'File', link: '/dashboards/file'},
  {title: 'Activity', link: '/dashboards/activity'},
  {title: 'Setting', link: '/dashboards/settings'}
];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <TopNav menu={menu}/>
    <main className="w-full min-h-screen px-6">{children}</main>
    </>
    );
}
