import Link from "next/link";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function About() {
  return (
    <div>
      <Layout>

      </Layout>

      <div>

      <h1 class="lg:text-6xl text-4xl  font-bold hover:text-red-500 text-center mt-18 lg:mt-28">About Us</h1>
      <p class="lg:text-3xl text-2xl px-1 text-center my-10">私たちは、<br/>学生起業家のPrincipalです!</p>
      <p class="lg:text-3xl text-2xl px-2 text-center my-10">Principalでは皆さんが胸に秘めたPassionを解き放とうをテーマに<br/>さまざまなイベントを企画し運営しています!</p>
      <p class="text-3xl text-center my-8 lg:my-10">Princpalのホームページはこちら!</p>
      <div className="flex justify-center">
      <button class="bg-red-500 hover:bg-red-400 text-white rounded my-8 px-6 py-4">
        <Link href="#">ここをクリック!</Link>
      </button>
      </div>
      <h1 className="text-3xl font-bold text-center mt-32">メンバー紹介</h1>
      <div className="flex justify-center">
        <div class="w-full max-w-md h-full bg-white rounded-lg border mt-28  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="mt-3 mb-3 w-24 h-24 rounded-full shadow-lg" src="/images/IMG_1643.JPG"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">瀧内　友輝</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">共同代表</span>
                <ul className="py-2">大学2年性</ul>
                <ul className="py-2">世界で最もPassionがある男</ul>
                <ul className="py-2">一言:最高な場所を作り上げましょう!</ul>
            </div>
        </div>
        </div>
        <div className="flex justify-center">
        <div class="w-full max-w-md h-full bg-white rounded-lg border mt-28 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="mb-3 w-24 h-24 mt-3  rounded-full shadow-lg" src="/images/IMG_1657.jpeg"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">山本　優也</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">共同代表</span>
                <ul className="py-2">大学3年性</ul>
                <ul className="py-2">趣味:　株式売買・仮想通貨取引</ul>
                <ul className="py-2">一言:　エキサイティングな環境作ります!</ul>
            </div>
        </div>
        </div>
        <div className="flex justify-center">
        <div class="w-full max-w-md h-full bg-white rounded-lg border border-gray-200 shadow-md mt-28 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="mt-3 mb-3 w-24 h-30  rounded-full shadow-lg " src="/images/IMG_1644.JPG"/>
                <h5 class="mb-1 text-xl font-medium py-5 text-gray-900 dark:text-white">井澤　駿</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">共同代表</span>
                <ul className="py-2">大学3年性</ul>
                <ul className="py-2">趣味:　プログラミング・読書</ul>
                <ul className="py-2">一言:　エキサイティングを作り上げましょう!</ul>
            </div>
        </div>
        </div>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}