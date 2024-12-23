export interface AccountInfoSectionProps {
  onEditMailHandler: () => void;
}

export interface SubscriptionSectionProps {
  hasActivePlan: boolean;
  onChangePlaneHandler?: () => void;
  onSubscribeHandler?: () => void;
}
