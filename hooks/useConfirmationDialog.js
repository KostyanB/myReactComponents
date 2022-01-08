import React, { useCallback, useState } from 'react';
import ConfirmationDialog from 'components/global/ConfirmationDialog';

export default function useConfirmationDialog({
    headerText,
    bodyText,
    confirmationButtonText,
    onConfirmClick,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);

    const Dialog = useCallback(
        () => (
            <ConfirmationDialog
                headerText={headerText}
                bodyText={bodyText}
                isOpen={isOpen}
                onConfirmClick={onConfirmClick}
                onCancelClick={() => setIsOpen(false)}
                confirmationButtonText={confirmationButtonText}
            />
        ),
        [isOpen]
    );

    return { Dialog, onOpen };
}

// use in UI
import { useConfirmationDialog } from './useConfirmationDialog'

function Client() {
    const { Dialog, onOpen } = useConfirmationDialog({
        headerText: "Delete this record?",
        bodyText:
        "Are you sure you want delete this record? This cannot be undone.",
        confirmationButtonText: "Delete",
        onConfirmClick: handleDeleteConfirm,
    });

    function handleDeleteConfirm() {
        //TODO: удалить
    }

    const handleDeleteClick = () => onOpen();

    return (
        <div>
            <Dialog />
            <button onClick={handleDeleteClick} />
        </div>
    );
}

export default Client;