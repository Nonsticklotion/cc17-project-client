import { Outlet } from "react-router-dom";
import CardWithLink from "../components/CardWithLink";

export default function AdminContainer() {
  return (
    <div className="min-h-screen flex flex-col px-32">
      <div className="flex flex-row gap-5 pt-5">
        <CardWithLink link="/admin/products" title="Product Management" />
        <CardWithLink link="/admin/orders" title="Manage Customer Orders" />
      </div>
      <div className="pt-5">
        <Outlet />
      </div>
    </div>
  );
}
