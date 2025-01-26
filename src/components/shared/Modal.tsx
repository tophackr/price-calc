import { VisuallyHidden } from '@telegram-apps/telegram-ui'
import {
    type ModalProps,
    Modal as TGUIModal
} from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/Modal'
import { Drawer } from '@xelene/vaul-with-scroll-fix'

export function Modal({ children, ...rest }: ModalProps) {
    return (
        <TGUIModal
            {...rest}
            aria-describedby={undefined}
        >
            <VisuallyHidden>
                <Drawer.Title />
            </VisuallyHidden>

            {children}
        </TGUIModal>
    )
}

Modal.Header = TGUIModal.Header
Modal.Close = TGUIModal.Close
Modal.Overlay = TGUIModal.Overlay
