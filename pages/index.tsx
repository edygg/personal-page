import TopNavbar from "../components/navigation/topNavbar/TopNavbar";
import Footer from "../components/navigation/footer/Footer";
import ProfileSummary from "../components/ content/ProfileSummary";
import Experience from "../components/ content/Experience";
import ContactForm from "../components/ content/ContactForm";
import {getHTMLContentFromMd} from "../libs/content/utils";

type HomeProps = {
  profileSummaryContent: any
}
export default function Home({profileSummaryContent}: HomeProps) {
  return (
    <>
      <TopNavbar/>
      <main className="container mx-auto">
        <ProfileSummary profileSummary={profileSummaryContent} />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const profileSummaryContent =
    await getHTMLContentFromMd("home/profile")

  return {
    props: {
      profileSummaryContent
    }
  }
}
