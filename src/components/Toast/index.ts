import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type tTypeNotify = "sucess" | "error";

export const notify = (message: string, type: tTypeNotify) => {
  if (type === "sucess") {
    toast.success(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 3000,
      icon: "🍔",
    });
  } else if (type === "error") {
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 3000,
      icon: "🍎",
    });
  }
};
