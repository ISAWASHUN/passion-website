import Head from 'next/head'
import Layout,{siteTitle} from '../components/Layout'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
      <title>{siteTitle}</title>
      </Head>
      </Layout>
      {/* ヒーローセクション */}
      <div className='lg:flex lg:item-center lg:justify-between'>
        <img className="lg:w-5/12 lg:m-20  mt-12" src="/images/hero.JPG" alt="ヒーローセクション"/>
        <div className='lg:mt-32 lg:mr-32 mt-20 text-center'>
        <h1 className='lg:text-6xl text-5xl font-bold text-black  lg:pt-32'>フットサル大会</h1>
        <h1 className='lg:text-6xl text-5xl font-bold text-black hover:text-red-500'>Passion</h1>
        <h1 className='lg:text-5xl text-4xl  text-black pt-12'>胸に秘めた情熱を解放しよう!</h1>
        <button class="bg-red-500 hover:bg-red-400 text-white rounded my-8 px-6 py-4">
        <Link href="posts/detail"> 募集大会一覧へ!</Link>
          </button>
        </div>
      </div>

      <Footer>
      </Footer>

  </>
  )
}
