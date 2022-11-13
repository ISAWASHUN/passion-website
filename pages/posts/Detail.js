import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

export function detail() {
  return (
    <>
    <div>
      <Layout>

      </Layout>
        {/* <!-- 大会詳細セクション --> */}
  <div className="lg:mt-32">
    <p className="text-5xl font-bold my-20 text-center">大会詳細</p>
  <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 pl-12">第一回大会</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500 pl-12">記念すべき第一回大会</p>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold pl-12 text-black">大会名</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">Passion</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold  text-black pl-12">日時</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">11月20日　14:00~17:00</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">場所</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">JGreen堺(〒590-0901 大阪府堺市堺区築港八幡町１４５番地)　F7・F8</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">参加費(チームごとに)</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">19,000円(通常価格) <br/>17,000円(早割価格) <br/>15,000(紹介価格) <br/>*早割価格:　11月６日までの振込 <br/>*紹介価格:　大会に他のチーム1チーム紹介していただけるとこの料金になります。<br/>紹介されたチームも15,000円になります。</dd>
          
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">チーム数</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">12チーム</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">優勝賞金</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">50,000円</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">その他</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">Passion賞 <br/>最も大会を盛り上げてくれたチームに次回大会の参加費を無料とさせていただきます。</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">振込先</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">三井住友銀行 堺支店 7970967</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-red-500 pl-12">注意事項</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">キャンセルは11月13日となります。<br/>申し込みしていただく際にはこちらの大会規約を熟読していただき、了承の上でご応募ください。<br/><a className="" href="Rule"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded">大会規約</button></a></dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">応募方法</dt>
          <dd className="mt-1 text-2xl text-red-500 sm:col-span-2 sm:mt-0 pl-12"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf2z44vYauKlI66Ouia_gontYT3PcYD_I7drJcMC58DISN0Jw/viewform?pli=1 ">こちらをクリック</a></dd>
        </div>
      </dl>
    </div>
  </div>

  {/* <!-- 第二回大会 --> */}
  <p className="text-5xl font-bold my-32 text-center">次回大会予告</p>
  <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 pl-12">第二回大会</h3>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">大会名</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">Passion</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold  text-black pl-12">日時</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">12月17日　14:00~17:00</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">場所</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">JGreen堺(〒590-0901 大阪府堺市堺区築港八幡町１４５番地)　F7・F8</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">参加費(チームごとに)</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">19,000円(通常価格) <br/>17,000円(早割価格) <br/>15,000(紹介価格) <br/>*早割価格:　11月30日までの振込 <br/>*紹介価格:　大会に他のチーム1チーム紹介していただけるとこの料金になります。<br/>紹介されたチームも15,000円になります。</dd>
          
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">チーム数</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">12チーム</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">優勝賞金</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">50,000円</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">その他</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">Passion賞 <br/>最も大会を盛り上げてくれたチームに次回大会の参加費を無料とさせていただきます。</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">振込先</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">三井住友銀行 堺支店 7970967</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-red-500 pl-12">注意事項</dt>
          <dd className="mt-1 text-lg text-black sm:col-span-2 sm:mt-0 pl-12">キャンセルは12月10日となります。<br/>申し込みしていただく際にはこちらの大会規約を熟読していただき、了承の上でご応募ください。<br/><a className="" href="Rule"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded">大会規約</button></a></dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500"></dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-bold text-black pl-12">応募方法</dt>
          <dd className="mt-1 text-2xl text-red-500 sm:col-span-2 sm:mt-0 pl-12"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf2z44vYauKlI66Ouia_gontYT3PcYD_I7drJcMC58DISN0Jw/viewform?pli=1">こちらをクリック</a></dd>
        </div>
      </dl>
    </div>
  </div>
  </div>
</div>
<Footer>

</Footer>
</>
  );
}

export default detail;