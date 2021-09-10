import { ReactComponent as Open } from "../../assets/orders_card_icon.svg";
import { ReactComponent as Transit } from "../../assets/transit_card_icon.svg";
import { ReactComponent as Fulfil } from "../../assets/fulfilled_card_icon.svg";
import { ReactComponent as Cancel } from "../../assets/cancel_card.svg";

export const status = [
  {
    title: "Open Orders",
    status: 239,
    icon: <Open />,
  },
  {
    title: "Orders in transit",
    status: 126,
    icon: <Transit />,
  },
  {
    title: "Fulfilled orders",
    status: 1254,
    icon: <Fulfil />,
  },
  {
    title: "Cancelled Orders",
    status: 35,
    icon: <Cancel />,
  },
];
