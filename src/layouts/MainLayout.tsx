import { AppShell } from "@mantine/core";
import { Navbar } from "../components";
import Footer from "../components/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <Footer />
    </AppShell>
  );
}

export default MainLayout;
