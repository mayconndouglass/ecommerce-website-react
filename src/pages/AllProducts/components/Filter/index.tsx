import { Select } from '../Select'
import * as S from './styles'

export const Filter = () => {
    const filters = ['Category', 'Product type', 'Price', 'Brand']

    return (
        <S.Container>
            <div></div>
            <h2>View all products</h2>

            <div className="filter-container">
                <div className="first-filter">
                    {filters.map(filter => (
                        <Select key={filter} name={filter} />
                    ))}
                </div>

                <div className="second-filter">
                    <span>Sorting by:</span>
                    <Select name='Date added' />
                </div>
            </div>
        </S.Container>
    )
}
