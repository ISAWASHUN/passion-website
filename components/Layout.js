import Head from "next/head";
import Link from "next/link";

const siteTitle = "フットサル大会　Passion";

function layout() {
  return (

    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>

        <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
          <div class="flex items-center flex-no-shrink text-white mr-6">
            <svg class="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-lg lg:flex-grow px-3">
              <Link href="/" class="block mt-4 lg:inline-block lg:mt-0 rounded-lg p-2 hover:text-white transition-all duration-300 hover:bg-red-500 mr-4">
                home
              </Link>
              <Link href="posts/Detail" class="block mt-4 lg:inline-block lg:mt-0 rounded-lg p-2 transition-all duration-300 hover:text-white hover:bg-red-500 mr-4">
                大会詳細
              </Link>
              <Link href="posts/About" class="block mt-4 lg:inline-block lg:mt-0 rounded-lg p-2 transition-all duration-300 hover:text-white hover:bg-red-500">
                About Us
              </Link>
              <Link href="posts/Contact" class="block mt-4 lg:inline-block lg:mt-0 rounded-lg p-2 transition-all duration-300 hover:text-white hover:bg-red-500">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default layout;