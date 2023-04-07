import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <main className="Top">
      <div>
        <Link to={"/mypage"}>マイページ</Link>
        <h2 className="text-3xl text-center">
          サロン探しがめんどください？
          <br />
          待つだけ
        </h2>
      </div>
    </main>
  );
};
