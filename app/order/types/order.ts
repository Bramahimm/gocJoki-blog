export interface OrderForm {
  orderType: "service" | "template";
  customerName: string;
  email: string;
  phone: string;
  notes: string;
  preferred: "wa" | "email";
  attachment?: File;
}
