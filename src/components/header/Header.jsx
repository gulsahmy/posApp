import { Badge, Input, message } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({setSearch}) => {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const logOut = () => {
    if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("posUser");
      Navigate("/login");
      message.success("Çıkış işlemi başarılı.");
    }
  };

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="ürün ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-1"
          >
            <HomeOutlined className="md:text-2xl text-xl " />
            <span className="md:text-xs text-[10px] ">Ana sayfa</span>
          </Link>
          <Badge
            count={cart.cartItems.length}
            offset={[0, 0]}
            className="md:flex hidden"
          >
            <Link
              to={"/cart"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-1 "
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          <Link
            to={"/bills"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-1"
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>
          <Link
            to={"/customers"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-1"
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>
          <Link
            to={"/statistic"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-1"
          >
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </Link>

          <Link className="menu-link" onClick={logOut}>
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge
          count={cart.cartItems.length}
          offset={[0, 0]}
          className="md:hidden flex"
        >
          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all gap-y-1"
          >
            <ShoppingCartOutlined className="text-xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
