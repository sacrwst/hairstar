import { Link } from "react-router-dom";

export const DefaultTemplate = () => {
  return (
    <>
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
      <footer></footer>
    </>
  );
};
