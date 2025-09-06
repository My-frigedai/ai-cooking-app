import React from "react";

export default function Features() {
  return (
    <section className="features">
      <h2>主な機能</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Smart Menus</h3>
          <p>冷蔵庫の食材に合わせて自動で献立を提案。</p>
        </div>
        <div className="feature-item">
          <h3>AI Cooking</h3>
          <p>AIがステップごとに調理のコツを教え、初心者でも安心。</p>
        </div>
      </div>
    </section>
  );
}
