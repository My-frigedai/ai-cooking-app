import React from "react";

export default function AppDescription() {
  return (
    <section className="app-description">
      <h2>Fridge AIについて</h2>

      <div className="description-block">
        <h3>概要</h3>
        <p>
          Fridge AIはあなたのキッチンのパートナー。冷蔵庫の中身に合わせた献立提案や、AIによる調理サポートで毎日の料理をスマートにします。
        </p>
      </div>

      <div className="description-block">
        <h3>Smart Menus</h3>
        <p>
          AIがあなたの食材に合わせた毎日の献立や週単位のメニューを作成。食材を無駄にせず、時間も節約できます。
        </p>
      </div>

      <div className="description-block">
        <h3>AI Cooking</h3>
        <p>
          スキルレベルや好みに応じた調理アドバイスを提供。ステップごとの指示で、誰でも簡単に美味しい料理を作れます。
        </p>
      </div>
    </section>
  );
}
