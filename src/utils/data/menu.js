import { ReactComponent as Overview } from "assets/svgs/overview.svg";
import { ReactComponent as Bank } from "assets/svgs/bank.svg";
import { ReactComponent as CreditCard } from "assets/svgs/credit-card.svg";
import { ReactComponent as DollarSign } from "assets/svgs/dollar.svg";
import { ReactComponent as Notification } from "assets/svgs/notification.svg";
import { ReactComponent as User } from "assets/svgs/user.svg";

export const menu = [
  { title: "Overview", icon: <Overview /> },
  { title: "Tribal Pay", icon: <Bank /> },
  { title: "Tribal Credit", icon: <CreditCard /> },
  { title: "Payments", icon: <DollarSign /> },
  { title: "Notifications", icon: <Notification /> },
  { title: "Users", icon: <User /> },
];
