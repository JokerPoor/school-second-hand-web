import usePopup from "@/hooks/usePopup";
import RegisterModal from "../components/register-modal/index.vue";

export default () => {
    function openRegisterModal() {
        const popup = usePopup<{
          isShouldClose: () => void;
        }>({
          props: {
            isShouldClose: () => {
              popup.close();
            },
          },
          slots: {
            default: () => h(RegisterModal, {
              close: () => popup.close()
            }),
          },
        });
      }
      
      return {
        openRegisterModal,
      }
};