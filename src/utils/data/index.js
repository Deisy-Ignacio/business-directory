import { ReactComponent as Overview } from "assets/svgs/overview.svg";
import { ReactComponent as Bank } from "assets/svgs/bank.svg";
import { ReactComponent as CreditCard } from "assets/svgs/credit-card.svg";
import { ReactComponent as DollarSign } from "assets/svgs/dollar.svg";
import { ReactComponent as Notification } from "assets/svgs/notification.svg";
import { ReactComponent as User } from "assets/svgs/user.svg";

export const MODAL_TYPES = { CREATE: "CREATE", EDIT: "EDIT", DELETE: "DELETE" };

export const INPUT_TYPES = {
  TEXT: "text",
  NUMBER: "number",
  DATE: "date",
};

export const VIEWS = {
  HOME: "HOME",
  BUSINNES: "BUSINESS",
  BUSINNES_TEAM: "BUSINNES_TEAM",
};

export const MENU = [
  { title: "overview", icon: <Overview />, view: VIEWS.BUSINNES },
  { title: "tribalpay", icon: <Bank /> },
  { title: "tribalCredit", icon: <CreditCard /> },
  { title: "payments", icon: <DollarSign /> },
  { title: "notifications", icon: <Notification /> },
  { title: "users", icon: <User /> },
];
