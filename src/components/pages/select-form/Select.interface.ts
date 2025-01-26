import type { Measurement } from '@/shared/interfaces/measurement.interface'

export interface SelectProps extends Measurement {
    onChangeUnit: (value: string) => void
    onChangeCurrency: (value: string) => void
}
