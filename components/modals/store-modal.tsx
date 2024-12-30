/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return(
        <Modal
        title="Create Store"
        description="add anew store to manage product and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
        future create store form
        </Modal>
    )
}