import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = (props: Props) => {
  return (
    <div className="max-w-xl mx-auto">
      <header className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="w-5/12">
            <Link to={"/"} className="block">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="HairStarロゴ"
              />
            </Link>
          </h1>
          <div className="cursor-pointer">アイコン</div>
        </div>
        <div>
          <span>ページ確認用</span>
          <Link
            to={"/mypage"}
            className="inline-block text-blue-900 underline ml-2"
          >
            マイページ
          </Link>
          <Link
            to={"/create-post"}
            className="inline-block text-blue-900 underline ml-2"
          >
            募集作成
          </Link>
        </div>
      </header>
      <main className="bg-slate-100 px-4 py-8">{props.children}</main>
      <footer>footer</footer>
    </div>
  );
};
