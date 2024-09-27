import React, { ReactNode } from "react";
import { ICategory } from "../header/dataFake";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { IHeaderProps } from "../header/header";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: faUser,
  },
  {
    label: "Edit Profile",
    icon: faUser,
  },
  {
    label: "Inbox",
    icon: faUser,
  },
  {
    label: "Help",
    icon: faUser,
  },
  {
    label: "Sign Out",
    icon: faUser,
  },
];

export function AnonymousInfo({ isAuthenticated }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const styleIcon: string =
    "bg-brown-50 rounded-full p-2 h-[18px] w-[18px] cursor-pointer";

  return (
    <>
      {isAuthenticated ? (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <div className="flex items-center">
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-0.5 pl-0.5"
                placeholder={""}
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  placeholder={""}
                  alt="tania andrew"
                  className="border border-gray-900 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </Button>
            </div>
          </MenuHandler>
          <MenuList className="p-1" placeholder={""}>
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  placeholder={""}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={icon} />
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    placeholder={""}
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      ) : (
        <div className="flex items-center gap-2">
          <button>
            <FontAwesomeIcon className={styleIcon} icon={faMagnifyingGlass} />
          </button>
          <a href="/account">
            <FontAwesomeIcon className={styleIcon} icon={faUser} />
          </a>
          <a href="/cart">
            <FontAwesomeIcon className={styleIcon} icon={faBagShopping} />
          </a>
        </div>
      )}
    </>
  );
}
function MenuItemAnonymousApi(props: { data: ICategory }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const data = props.data;

  return (
    // <div className="outline-none">
    <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        <a
          href="#"
          className="flex items-center item-navbar-link border-none outline-none"
        >
          <span>{data.name}</span>
        </a>
      </MenuHandler>

      <MenuList className="w-full flex " placeholder={""}>
        <div className="h-auto outline-none">
          {/* <Image src={data.thumbnail} alt='img-nam' width={100} height={300}></Image> */}
          <img className="w-full h-full" src={data.thumbnail} alt="" />
        </div>
        <div className="flex justify-between w-full outline-none">
          {data.categoriesChild.map((item) => (
            <div key={item.id} className="px-8">
              <a
                href="#"
                className="font-bold uppercase text-black hover:text-red-500"
              >
                {item.name}
              </a>
              <ul className="mt-2 flex flex-col gap-2">
                {item &&
                  item.subCategories.map((item) => (
                    <a href="#" className="hover:text-red-500" key={item.id}>
                      <li>{item.name}</li>
                    </a>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </MenuList>
    </Menu>
    // </div>
  );
}
function ListMenuAnonymousApi(props: { data: ICategory[] }) {
  const dataMenu = props.data;
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  const renderItem = dataMenu.map(({ id, name, subCategories }) => (
    <a key={id} href="#">
      <span>{name}</span>
    </a>
  ));

  return (
    <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        {dataMenu.map(({ id, name }) => (
          <a href="#" key={id}>
            {name}
          </a>
        ))}
      </MenuHandler>

      <MenuList className="" placeholder={""}>
        <ul>{renderItem}</ul>
      </MenuList>
    </Menu>
  );
}

function AnonymousMenu(props: { data: ICategory[] }) {
  const dataMenu = props.data;
  return (
    <div className="md:flex justify-between w-full">
      {dataMenu.map((item) => (
        <MenuItemAnonymousApi data={item} key={item.id} />
      ))}
      <div className="flex items-center item-navbar-link">
        {" "}
        {/*custom css */}
        <a href="#">Bộ sưu tập</a>
      </div>
      <div className="flex items-center item-navbar-link">
        <a href="#">Show Room</a>
      </div>
      <div className="flex items-center item-navbar-link">
        <a href="#">Tin tức</a>
      </div>
    </div>
  );
}

export default AnonymousMenu;
