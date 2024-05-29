export enum NOTIFICATION_TYPE {
  Message = "message",
  PaymentSucces = "paymentSuccess",
  AgreementCancel = "agreementCancel",
  AgreementSuccess = "agreementSuccess",
  AgreementUpdate = "agreementUpdate",
  AgreementCreate = "agreementCreate",
}

export type Notification = {
  id: string;
  content: string;
  type: NOTIFICATION_TYPE;
  createdAt: string;
};
