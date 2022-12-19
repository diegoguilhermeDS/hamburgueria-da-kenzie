import { iPorduct } from "../userContextTypes";

export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iCartContext {
  currentSale: iPorduct[];
  handleAddToCart: (event: any) => void;
  handleRemoveToCart: (event: any) => void;
  handleRemoveAllToCart: () => void;
  handleAddAmount: (event: any) => void;
  handleRemoveAmount: (event: any) => void;
  showModal: boolean;
  handleShowModal: () => void;
  handleNoneModal: () => void;
  animationModal: boolean;
}
