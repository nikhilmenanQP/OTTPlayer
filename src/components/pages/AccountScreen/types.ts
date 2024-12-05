export interface SubscriptionSectionProps {
  hasActivePlan: boolean;
  onChangePlaneHandler?: () => void;
  onSubscribeHandler?: () => void;
}

export interface AccountInfoSectionProps {
  onEditMailHandler: () => void;
}
