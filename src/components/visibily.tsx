let isModalOpen = false;

export const getModalVisibility = () => isModalOpen;

export const setModalVisibility = (value: boolean) => {
  isModalOpen = value;
};
