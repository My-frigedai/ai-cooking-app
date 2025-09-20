// pages/terms.js
import Head from "next/head";
import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>特定商取引法に基づく表記 | Fridge AI</title>
        <meta
          name="description"
          content="Fridge AI の特定商取引法に基づく表記ページです。"
        />
      </Head>

<section class="terms-section">
  <h1>特定商取引法に基づく表記</h1>
  <div class="terms-content">
    <p><strong>販売事業者</strong><br />Fridge AI</p>
    <p><strong>運営責任者</strong><br />築地　奏空</p>
    <p><strong>所在地</strong><br />宮崎県宮崎市大字島之内7569-3</p>
    <p><strong>お問い合わせ先</strong><br />メール:9collie-laxest@icloud.com</p>
    <p><strong>販売価格</strong><br />各商品ページに記載の価格に準じます。</p>
    <p><strong>商品代金以外に必要な料金</strong><br />特になし（通信費等はお客様負担）。</p>
    <p><strong>お支払い方法</strong><br />クレジットカード決済（Stripe）</p>
    <p><strong>商品の引渡し時期</strong><br />購入後、即時に利用可能です。</p>
    <p><strong>返品・キャンセルについて</strong><br />デジタルサービスの性質上、返品・返金は原則不可。<br />重複課金やシステム不具合がある場合は対応します。</p>
  </div>
</section>

      <style jsx>{`
        .terms-section {
          padding: 80px 20px;
          max-width: 900px;
          margin: 0 auto;
          color: #e0f7ff;
          font-family: 'Segoe UI', sans-serif;
        }
        .terms-section h1 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 40px;
          color: #66d9ff;
          text-shadow: 0 0 10px rgba(102, 217, 255, 0.8);
        }
        .terms-content p {
          margin-bottom: 20px;
          line-height: 1.8;
          font-size: 1.1rem;
          background: rgba(0, 0, 0, 0.4);
          padding: 15px;
          border-left: 3px solid #66d9ff;
          border-radius: 5px;
        }
        .terms-content strong {
          color: #80e1ff;
        }
      `}</style>
    </Layout>
  );
}
