"use client";
import React from "react";
import styles from "./nav-bar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { navigateTo, navigationLinks } from "@/utils/dashboard-utils/navigation-utils";
import Icons from "@/themes/icons/icons";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    navigateTo(path,router.push);
  }
  return(
    <div className={styles.navbarWrapper}>
        <span className={styles.logo}>
            {Icons.logoSmall}
        </span>

        <div className={styles.navList}>
            {navigationLinks.map((link) => (
                <div
                    key={link.path}
                    className={`${styles.navItem} ${pathname === link.path ? styles.active : ""}`}
                    onClick={() => handleNavigation(link.path)}
                >
                    <span>{pathname === link.path ?Icons[link.activeIcon]:Icons[link.defaultIcon]}</span>
                    <span>{link.label}</span>
                </div>
            ))}
        </div>
  </div>
)};

export default NavBar;
