import { ProductDataType } from './product-data-type'

export type CartProductDataType = ProductDataType & {
    quantity?: number
}
