import TopNavbar from "../components/navigation/topNavbar/TopNavbar";
import Footer from "../components/navigation/footer/Footer";
import ProfileSummary from "../components/ content/ProfileSummary";
import Experience from "../components/ content/Experience";
import ContactForm from "../components/ content/ContactForm";

export default function Home() {
  return (
    <>
      <TopNavbar/>
      <main>
        <ProfileSummary />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
