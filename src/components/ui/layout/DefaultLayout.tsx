import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = (props: Props) => {
  return (
    <div className="max-w-xl mx-auto">
      <header className="bg-teal-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="w-20">
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="HairStarロゴ"
              />
            </Link>
          </h1>
          <div className="cursor-pointer">メニュー</div>
        </div>
      </header>
      <main className="bg-slate-100 px-4 py-8">{props.children}</main>
      <footer>footer</footer>
    </div>
  );
};