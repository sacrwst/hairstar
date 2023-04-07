import { Link } from "react-router-dom";

export const Mypage = () => {
  return (
    <div className="mypage max-w-xl mx-auto">
      <header className="bg-teal-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="w-20">
            <Link to={"/"}>
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
            </Link>
          </h1>
          <div className="cursor-pointer">メニュー</div>
        </div>
      </header>
      <main>
        <div className="max-w-xl mx-auto">
          <Link to={"/login"}>ログイン</Link>
          <h2 className="text-3xl text-center">マイページ</h2>
          <div>
            <div>
              <div className="bg-gray-400 w-20 h-20 mx-auto rounded-full"></div>
              <h3 className="text-xl text-center mt-2">名前</h3>
            </div>
            <ul className="mt-6">
              <li>
                <Link to={"/"} className="block">
                  募集を作成
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block">
                  作成した募集
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block">
                  届いた提案
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block">
                  予約履歴
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
