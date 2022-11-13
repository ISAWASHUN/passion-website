import Link from "next/link";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div>
      <Layout>

      </Layout>

      <h2 id="contact" class="text-5xl font-bold mt-10 lg:mt-36 text-center">Contact</h2>
      <p class="lg:text-2xl text-xl text-center pt-16">お問い合わせ内容をこちらのフォームにご記入ください!</p>
      <p class="text-2xl text-center pt-2 hover:text-sky-400"><a href="https://docs.google.com/forms/d/1I5PmgkVUmqTaOhgFulOUb9y-CnbxDP2kNGfWPtV--Lc/edit?hl=JA">こちらをクリック!</a></p>
      <p class="text-2xl text-center pt-4 ">E-mail:　principalpassion@gmail.com</p>

      <Footer>

      </Footer>
    </div>
  );
}

export default Contact;