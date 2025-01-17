import Icons from "@/themes/icons/icons";

interface NavigationLinks {
    path: string;
    label: string;
    defaultIcon: keyof typeof Icons;
    activeIcon: keyof typeof Icons;
  }

// Define navigation links as a constant
const navigationLinks:NavigationLinks[] = [
  { path: "/dashboard/home", label: "ダッシュボード", defaultIcon: "dashBoardNormal", activeIcon: "dashBoardSelected"},
  { path: "/dashboard/users", label: "登録ユーザー", defaultIcon: "multipleUsersNormal", activeIcon: "multipleUsersSelected" },
  { path: "/dashboard/rewards", label: "当選者", defaultIcon: "rewardsNormal", activeIcon: "rewardsNormal" },
  { path: "/dashboard/admin", label: "運営管理者", defaultIcon: "superAdmin", activeIcon: "superAdmin"}
];

// Function to get active status of a link based on the current pathname
export const getActiveStatus = (path: string, pathname: string): boolean => {
  return pathname === path || pathname.startsWith(`${path}/`);
};

// Function to navigate to a specific path
export const navigateTo = (path: string, navigate: (path: string) => void) => {
  navigate(path); // Perform the navigation
};

export { navigationLinks };
