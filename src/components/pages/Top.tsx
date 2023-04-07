import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <div className="top">
      <header className="bg-teal-200">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Hair</h1>
          <div className="cursor-pointer">メニュー</div>
        </div>
      </header>
      <main>
        <div>
          <Link to={"/mypage"}>マイページ</Link>
          <h2 className="text-3xl text-center">
            サロン探しがめんどください？
            <br />
            待つだけ
          </h2>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
